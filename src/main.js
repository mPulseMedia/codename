/**
 * Main JavaScript file for Codename Project
 */

// Import components
import index_view_create from './components/index_view.js';
import detail_view_create from './components/detail_view.js';
import interaction_handler_create from './components/interaction_handler.js';
import filter_component_create from './components/filter_component.js';
import search_component_create from './components/search_component.js';
import lookup_component_create from './components/lookup_component.js';

// Import data modules
import CodenameDM from './data/cn_access.js';
import SnippetDM from './data/snippet_access.js';

/**
 * 5b0_element_factory - Core DOM Element Factory Functions
 */

// 5b0a_element_create - Creates a DOM element with attributes and children
const element_create = (tag, attributes = {}, children = []) => {
    const element = document.createElement(tag);
    
    // Configure element
    element_configure(element, attributes);
    
    // Append children
    if (children && children.length > 0) {
        element_append(element, children);
    }
    
    return element;
};

// 5b0b_element_configure - Configures an element with attributes
const element_configure = (element, attributes = {}) => {
    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'class' || key === 'className') {
            element.className = value;
        } else if (key === 'text' || key === 'textContent') {
            element.textContent = value;
        } else if (key === 'html' || key === 'innerHTML') {
            element.innerHTML = value;
        } else if (key.startsWith('on') && typeof value === 'function') {
            // Event listeners
            const eventName = key.substring(2).toLowerCase();
            element.addEventListener(eventName, value);
        } else {
            element.setAttribute(key, value);
        }
    });
    
    return element;
};

// 5b0c_element_append - Appends children to an element
const element_append = (parent, children = []) => {
    children.forEach(child => {
        if (typeof child === 'string') {
            parent.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            parent.appendChild(child);
        }
    });
    
    return parent;
};

// 5b0d_element_remove - Safely removes an element from the DOM
const element_remove = (element) => {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
        return true;
    }
    return false;
};

/**
 * 5b3_index_components - Codename Index Components
 */

// 5b3a_root_group_create - Creates a collapsible root group component
const root_group_create = (root, codenames, expanded_is = false) => {
    const group_container = element_create('div', {
        class: `root_group ${expanded_is ? 'root_expanded' : ''}`
    });
    
    // Create header (clickable)
    const header = root_header_create(root, codenames.length, expanded_is);
    
    // Create content (initially hidden if not expanded)
    const content = element_create('div', { class: 'root_content' });
    
    // Add codenames to content
    codenames.forEach(codename => {
        const cn_element = cn_element_create(codename);
        content.appendChild(cn_element);
    });
    
    // Add header and content to group
    group_container.appendChild(header);
    group_container.appendChild(content);
    
    return group_container;
};

// 5b3b_root_header_create - Creates a root group header
const root_header_create = (root, count, expanded_is = false) => {
    const header = element_create('div', { 
        class: 'root_header',
        onclick: function() {
            const parent = this.parentNode;
            parent.classList.toggle('root_expanded');
            const isExpanded = parent.classList.contains('root_expanded');
            console.log(`root_toggle: ${root} group ${isExpanded ? 'expanded' : 'collapsed'}`);
        }
    });
    
    // Add caret indicator
    const caret = element_create('span', {
        class: 'root_caret',
        html: '&#9658;' // Right-pointing triangle
    });
    
    // Add root name and count
    const title = element_create('span', {
        class: 'root_title',
        text: `${root} (${count})`
    });
    
    header.appendChild(caret);
    header.appendChild(title);
    
    return header;
};

// 5b3c_cn_element_create - Creates a codename element
const cn_element_create = (codename) => {
    const cn_container = element_create('div', {
        class: `codename_item codename_${codename.type}`,
        title: codename.description,
        onclick: function() {
            console.log(`cn_select: selected codename ${codename.name}`);
            lookup_show(codename);
        }
    });
    
    // Extract and display terms
    const term_container = term_container_create(codename);
    cn_container.appendChild(term_container);
    
    return cn_container;
};

// 5b3d_term_container_create - Creates a container for terms
const term_container_create = (codename) => {
    const container = element_create('div', { class: 'term_container' });
    
    // Extract terms
    const terms = CodenameDM.extractTerms(codename.name);
    
    // Create term elements
    terms.forEach((term, index) => {
        const term_element = term_element_create(term);
        
        // Add separator except for the last term
        if (index < terms.length - 1) {
            container.appendChild(term_element);
            container.appendChild(document.createTextNode('_'));
        } else {
            container.appendChild(term_element);
        }
    });
    
    return container;
};

// 5b3e_term_element_create - Creates a styled term element
const term_element_create = (term) => {
    let classNames = 'term';
    if (term.position === 0) {
        classNames += ' term_root'; // First term is the root
    }
    
    return element_create('span', {
        class: classNames,
        text: term.text
    });
};

/**
 * 5b4_lookup_components - Code Snippet Lookup Components
 */

// 5b4a_lookup_window_create - Creates the lookup window
const lookup_window_create = () => {
    return element_create('div', { class: 'lookup_container' });
};

// 5b4b_lookup_header_create - Creates the lookup header
const lookup_header_create = (title) => {
    const header = element_create('div', { class: 'lookup_header' });
    
    const header_title = element_create('h2', { text: title });
    const close_button = element_create('button', {
        class: 'button button_tertiary',
        text: 'Close',
        onclick: function() {
            lookup_hide();
        }
    });
    
    header.appendChild(header_title);
    header.appendChild(close_button);
    
    return header;
};

// 5b4c_code_display_create - Creates code snippet display
const code_display_create = (snippet) => {
    const display = element_create('div', { class: 'lookup_content' });
    
    if (snippet) {
        // Add description if available
        if (snippet.description) {
            const desc = element_create('p', {
                class: 'snippet_description',
                text: snippet.description
            });
            display.appendChild(desc);
        }
        
        // Add formatted code
        const code_html = SnippetDM.formatCode(snippet.code, snippet.language);
        const code_container = element_create('div', {
            class: 'snippet_display',
            html: code_html
        });
        
        display.appendChild(code_container);
    } else {
        display.appendChild(placeholder_create());
    }
    
    return display;
};

// 5b4d_placeholder_create - Creates placeholder for empty state
const placeholder_create = () => {
    return element_create('div', {
        class: 'placeholder_layout',
        html: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L2 22"/><path d="M22 22L2 2"/></svg><h3>No Example Available</h3><p>This codename does not have any code examples yet.</p>'
    });
};

/**
 * 5b2_filter_components - Filter Interface Components
 */

// 5b2a_filter_button_create - Creates a filter toggle button
const filter_button_create = (type, label, active_is = false) => {
    return element_create('button', {
        class: `filter_button filter_button_${type} ${active_is ? 'filter_button_active' : ''}`,
        text: label,
        'data-type': type,
        onclick: function() {
            this.classList.toggle('filter_button_active');
            const active_is = this.classList.contains('filter_button_active');
            console.log(`filter_toggle: ${type} filter ${active_is ? 'enabled' : 'disabled'}`);
            filter_apply();
        }
    });
};

// 5b2b_search_input_create - Creates search input with clear button
const search_input_create = () => {
    const container = element_create('div', { class: 'filter_search_area' });
    
    const input = element_create('input', {
        class: 'input_text',
        type: 'text',
        placeholder: 'Search codenames...',
        oninput: function() {
            console.log(`search_input: search query changed to "${this.value}"`);
            filter_apply();
        }
    });
    
    const clear_button = element_create('button', {
        class: 'search_clear',
        text: '×',
        title: 'Clear search',
        onclick: function() {
            input.value = '';
            console.log('search_clear: search input cleared');
            filter_apply();
        }
    });
    
    container.appendChild(input);
    container.appendChild(clear_button);
    
    return {
        container,
        input,
        clear_button
    };
};

// 5b2c_reset_button_create - Creates reset button for filters
const reset_button_create = () => {
    return element_create('button', {
        class: 'button button_tertiary',
        text: 'Reset Filters',
        onclick: function() {
            console.log('filter_reset: resetting all filters');
            // Reset all filter buttons to active
            document.querySelectorAll('.filter_button').forEach(button => {
                button.classList.add('filter_button_active');
            });
            
            // Clear search input
            const search_input = document.querySelector('.filter_search_area input');
            if (search_input) search_input.value = '';
            
            // Apply filter changes
            filter_apply();
        }
    });
};

/**
 * Application State and Logic
 */

// Current state
let current_state = {
    active_filters: {
        function: true,
        variable: true,
        class: true,
        parameter: true,
        constant: true,
        event: true,
        property: true,
        file: true
    },
    search_query: '',
    selected_codename: null
};

// Lookup operations
const lookup_show = (codename) => {
    console.log(`lookup_show: showing lookup for ${codename.name}`);
    current_state.selected_codename = codename;
    
    // Get lookup container
    const lookup_container = document.querySelector('.lookup_container');
    if (!lookup_container) return;
    
    // Clear existing content
    lookup_container.innerHTML = '';
    
    // Create header
    const header = lookup_header_create(codename.name);
    lookup_container.appendChild(header);
    
    // Get snippets
    const snippets = SnippetDM.getSnippets(codename.name);
    const content = code_display_create(snippets.length > 0 ? snippets[0] : null);
    
    lookup_container.appendChild(content);
};

const lookup_hide = () => {
    console.log('lookup_hide: hiding lookup panel');
    current_state.selected_codename = null;
    
    // Get lookup container
    const lookup_container = document.querySelector('.lookup_container');
    if (!lookup_container) return;
    
    // Clear existing content
    lookup_container.innerHTML = '';
    
    // Show placeholder
    lookup_container.appendChild(lookup_header_create('Code Examples'));
    lookup_container.appendChild(placeholder_create());
};

// Filter operations
const filter_apply = () => {
    // Get current filter state
    const filter_buttons = document.querySelectorAll('.filter_button');
    filter_buttons.forEach(button => {
        const type = button.getAttribute('data-type');
        const active_is = button.classList.contains('filter_button_active');
        current_state.active_filters[type] = active_is;
    });
    
    // Get search query
    const search_input = document.querySelector('.filter_search_area input');
    current_state.search_query = search_input ? search_input.value.trim().toLowerCase() : '';
    
    console.log(`filter_apply: applying filters with search query "${current_state.search_query}"`);
    
    // Filter codenames in UI
    const codename_items = document.querySelectorAll('.codename_item');
    let visible_count = 0;
    
    codename_items.forEach(item => {
        const type = Array.from(item.classList)
            .find(cls => cls.startsWith('codename_') && cls !== 'codename_item')
            ?.replace('codename_', '');
            
        const name = item.textContent.toLowerCase();
        
        // Check if type is active and search query matches
        const type_match = type && current_state.active_filters[type];
        const search_match = current_state.search_query === '' || 
            name.includes(current_state.search_query);
        
        if (type_match && search_match) {
            item.style.display = '';
            visible_count++;
        } else {
            item.style.display = 'none';
        }
    });
    
    console.log(`filter_result: ${visible_count} codenames visible after filtering`);
    
    // Update empty state for each root group
    const root_groups = document.querySelectorAll('.root_group');
    root_groups.forEach(group => {
        const visible_items = group.querySelectorAll('.codename_item[style=""]').length;
        if (visible_items === 0) {
            // No visible items in this group
            group.style.display = 'none';
        } else {
            group.style.display = '';
        }
    });
};

// Theme toggling
const theme_toggle = () => {
    const body = document.body;
    const is_dark = body.classList.toggle('theme_dark');
    console.log(`theme_toggle: theme changed to ${is_dark ? 'dark' : 'light'}`);
    
    // Save preference
    localStorage.setItem('theme_preference', is_dark ? 'dark' : 'light');
};

/**
 * 7_filter - Initialize filter component with integration
 */
const initialize_filter_component = (container, index_view) => {
    console.log('filter_component_init: initializing filter component');
    
    // Create filter container
    const filter_container = document.createElement('div');
    filter_container.className = 'filter_component_container';
    container.insertBefore(filter_container, container.firstChild);
    
    // Get available root terms from codename data
    const all_codenames = CodenameDM.getAll();
    const root_set = new Set();
    all_codenames.forEach(codename => {
        const parts = codename.name.split('_');
        if (parts.length > 0 && parts[0]) {
            root_set.add(parts[0]);
        }
    });
    const root_terms = Array.from(root_set);
    
    // Create filter component
    const filter_component = filter_component_create(filter_container);
    filter_component.initialize(root_terms);
    
    // Register for filter changes
    filter_component.on_filter_change((filter_state) => {
        console.log('filter_state_change: applying new filter state');
        
        // Apply filters to all codenames
        const filtered_codenames = filter_component.apply_filters(all_codenames);
        
        // Update index view with filtered results
        index_view.render_index(filtered_codenames);
    });
    
    console.log('filter_component_init_complete: filter component initialized with', root_terms.length, 'root terms');
    
    return filter_component;
};

/**
 * 8_search - Initialize search component with integration
 */
const initialize_search_component = (container, index_view, detail_view) => {
    console.log('search_component_init: initializing search component');
    
    // Create search container
    const search_container = document.createElement('div');
    search_container.className = 'search_component_container';
    container.appendChild(search_container);
    
    // Create search component
    const search_component = search_component_create(search_container);
    search_component.initialize();
    
    // Get all codenames for searching
    const all_codenames = CodenameDM.getAll();
    
    // Register for search events
    search_component.on_search((query) => {
        console.log('search_execute: executing search with query:', query);
        
        if (!query) {
            search_component.set_results([]);
            return;
        }
        
        // Search codenames using the search component's algorithm
        const search_results = search_component.search_items(all_codenames, query);
        
        // Display search results
        search_component.set_results(search_results);
    });
    
    // Register for result selection
    search_component.on_result_select((result) => {
        console.log('search_result_select: selected result:', result.name);
        
        // Show the selected codename in the detail view
        if (result && result.name) {
            lookup_show(result);
        }
    });
    
    console.log('search_component_init_complete: search component initialized');
    
    return search_component;
};

/**
 * 9_lookup - Initialize lookup component with integration
 */
const initialize_lookup_component = (container, index_view) => {
    console.log('lookup_component_init: initializing lookup component');
    
    // Create lookup container
    const lookup_container = document.createElement('div');
    lookup_container.className = 'lookup_component_container';
    container.appendChild(lookup_container);
    
    // Create lookup component
    const lookup_component = lookup_component_create(lookup_container);
    const lookup_element = lookup_component.initialize();
    
    // Override default lookup_show function to use our component
    window.lookup_show = (codename) => {
        console.log(`lookup_show: showing lookup for ${codename.name}`);
        
        // Get snippets for this codename
        const snippets = SnippetDM.getSnippets(codename.name);
        
        // Show lookup with codename and snippets
        lookup_component.show_lookup(codename, snippets);
    };
    
    // Override default lookup_hide function to use our component
    window.lookup_hide = () => {
        console.log('lookup_hide: hiding lookup panel');
        lookup_component.clear_lookup();
    };
    
    console.log('lookup_component_init_complete: lookup component initialized');
    
    return lookup_component;
};

/**
 * 6_index - Main index implementation with components
 */
const initialize_index_components = (container) => {
    console.log('index_components_init: initializing index components');
    
    // Create index container
    const index_container = document.createElement('div');
    index_container.className = 'app_column app_column_left';
    container.appendChild(index_container);
    
    // Create detail container
    const detail_container = document.createElement('div');
    detail_container.className = 'app_column app_column_right';
    container.appendChild(detail_container);
    
    // Create components
    const index_view = index_view_create(index_container);
    const detail_view = detail_view_create(detail_container);
    
    // Initialize components
    index_view.initialize();
    detail_view.initialize();
    
    // Create and initialize interaction handler
    const interaction_handler = interaction_handler_create(index_view, detail_view);
    interaction_handler.initialize();
    
    // Get all codenames from data module and render
    const all_codenames = CodenameDM.getAll();
    index_view.render_index(all_codenames);
    
    console.log('index_components_init_complete: index components initialized with', all_codenames.length, 'codenames');
    
    return {
        index_view,
        detail_view,
        interaction_handler
    };
};

// Application initialization
const app_init = () => {
    console.log('app_init: initializing application');
    
    // Initialize data modules
    if (!CodenameDM.initialize()) {
        console.error('app_init_error: failed to initialize codename data module');
        return false;
    }
    
    if (!SnippetDM.initialize()) {
        console.error('app_init_error: failed to initialize snippet data module');
        return false;
    }
    
    // Initialize UI
    dom_ready(() => {
        build_ui(document.body);
    });
    
    return true;
};

// DOM ready helper
const dom_ready = (callback) => {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
};

// UI builder
const build_ui = (container) => {
    console.log('ui_build: building application UI');
    
    // Create app container
    const app_container = document.createElement('div');
    app_container.className = 'app_container';
    container.appendChild(app_container);
    
    // Create header
    const app_header = document.createElement('header');
    app_header.className = 'app_header';
    
    const app_title = document.createElement('h1');
    app_title.className = 'app_title';
    app_title.textContent = 'Codename';
    
    const app_subtitle = document.createElement('p');
    app_subtitle.className = 'app_subtitle';
    app_subtitle.textContent = 'Naming Convention Explorer';
    
    // Theme toggle button
    const theme_button = document.createElement('button');
    theme_button.className = 'theme_toggle';
    theme_button.textContent = '🌙';  // Moon emoji for dark mode
    theme_button.title = 'Toggle theme';
    theme_button.addEventListener('click', theme_toggle);
    
    app_header.appendChild(app_title);
    app_header.appendChild(app_subtitle);
    app_header.appendChild(theme_button);
    app_container.appendChild(app_header);
    
    // Create main content area
    const app_content = document.createElement('main');
    app_content.className = 'app_content';
    app_container.appendChild(app_content);
    
    // Initialize index components
    const components = initialize_index_components(app_content);
    
    // Initialize and integrate filter component
    const filter_comp = initialize_filter_component(app_content, components.index_view);
    
    // Initialize and integrate search component
    const search_comp = initialize_search_component(app_content, components.index_view, components.detail_view);
    
    // Initialize and integrate lookup component
    const lookup_comp = initialize_lookup_component(components.detail_view.get_container(), components.index_view);
    
    console.log('ui_build_complete: application UI built successfully');
};

// Initialize the application
app_init(); 