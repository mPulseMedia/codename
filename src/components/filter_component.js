/**
 * Codename Filter Component - Manages filtering of codename items
 */

/**
 * 7a0_filter_layout - Creates the filter panel layout following UI guidelines
 * @param {Object} container - Container element to render filter controls into
 * @returns {Object} Filter controller object with public methods
 */
const filter_component_create = (container) => {
    // Private state
    let filter_state = {
        type_filters: {
            function: true,
            variable: true,
            class: true,
            parameter: true,
            constant: true,
            event: true,
            property: true,
            file: true
        },
        search_text: '',
        root_filters: {},
        active_preset: null
    };
    
    // Track registered callbacks
    const change_callbacks = [];
    
    // Reference to DOM elements
    let search_input = null;
    let filter_container = null;
    
    /**
     * 7a0_container_design - Creates the main filter container
     * @returns {HTMLElement} The filter container element
     */
    const create_filter_container = () => {
        const container = document.createElement('div');
        container.className = 'filter_container';
        
        // Add title and toggle
        const header = create_filter_header();
        container.appendChild(header);
        
        // Add search input
        const search = create_search_input();
        container.appendChild(search);
        
        // Add type filters
        const type_filters = create_type_filters();
        container.appendChild(type_filters);
        
        // Add reset and save controls
        const action_bar = create_action_bar();
        container.appendChild(action_bar);
        
        return container;
    };
    
    /**
     * Creates the filter header with title and toggle
     * @returns {HTMLElement} Header element
     */
    const create_filter_header = () => {
        const header = document.createElement('div');
        header.className = 'filter_header';
        
        // Add title
        const title = document.createElement('h3');
        title.className = 'filter_title';
        title.textContent = 'Filters';
        
        // Add toggle button
        const toggle = document.createElement('button');
        toggle.className = 'filter_toggle';
        toggle.setAttribute('aria-label', 'Toggle filter panel');
        toggle.innerHTML = '<span>▼</span>';
        toggle.addEventListener('click', () => {
            filter_container.classList.toggle('filter_collapsed');
            const is_collapsed = filter_container.classList.contains('filter_collapsed');
            toggle.innerHTML = is_collapsed ? '<span>▶</span>' : '<span>▼</span>';
            toggle.setAttribute('aria-expanded', !is_collapsed);
            console.log(`filter_toggle: filter panel ${is_collapsed ? 'collapsed' : 'expanded'}`);
        });
        
        // Set initial state
        toggle.setAttribute('aria-expanded', 'true');
        
        header.appendChild(title);
        header.appendChild(toggle);
        
        return header;
    };
    
    /**
     * 7a2_search_input - Creates search input field for text-based filtering
     * @returns {HTMLElement} Search input container
     */
    const create_search_input = () => {
        const search_container = document.createElement('div');
        search_container.className = 'filter_search';
        
        // Create search icon
        const search_icon = document.createElement('span');
        search_icon.className = 'search_icon';
        search_icon.innerHTML = '🔍';
        search_container.appendChild(search_icon);
        
        // Create input field
        search_input = document.createElement('input');
        search_input.className = 'search_input';
        search_input.type = 'text';
        search_input.placeholder = 'Search codenames...';
        search_input.setAttribute('aria-label', 'Search codenames');
        
        // Add input event for real-time filtering
        search_input.addEventListener('input', () => {
            filter_state.search_text = search_input.value.trim().toLowerCase();
            console.log(`search_input: search text changed to "${filter_state.search_text}"`);
            
            // Show clear button if there's text
            if (filter_state.search_text) {
                clear_button.style.display = 'block';
            } else {
                clear_button.style.display = 'none';
            }
            
            notify_change();
        });
        
        // Add keyboard event for Enter key
        search_input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                console.log('search_enter: applying search filter');
                notify_change();
            }
        });
        
        search_container.appendChild(search_input);
        
        // Create clear button
        const clear_button = document.createElement('button');
        clear_button.className = 'search_clear';
        clear_button.innerHTML = '×';
        clear_button.setAttribute('aria-label', 'Clear search');
        clear_button.style.display = 'none'; // Hide initially
        
        clear_button.addEventListener('click', () => {
            search_input.value = '';
            filter_state.search_text = '';
            clear_button.style.display = 'none';
            search_input.focus();
            console.log('search_clear: search input cleared');
            notify_change();
        });
        
        search_container.appendChild(clear_button);
        
        return search_container;
    };
    
    /**
     * 7a1_toggle_controls - Creates toggle filter buttons for codename types
     * @returns {HTMLElement} Type filters container
     */
    const create_type_filters = () => {
        const type_container = document.createElement('div');
        type_container.className = 'filter_types';
        
        // Add section title
        const section_title = document.createElement('div');
        section_title.className = 'filter_section_title';
        section_title.textContent = 'Filter by Type';
        type_container.appendChild(section_title);
        
        // Create button grid
        const button_grid = document.createElement('div');
        button_grid.className = 'filter_button_grid';
        
        // Create toggle buttons for each type
        const type_labels = {
            function: 'Functions',
            variable: 'Variables',
            class: 'Classes',
            parameter: 'Parameters',
            constant: 'Constants',
            event: 'Events',
            property: 'Properties',
            file: 'Files'
        };
        
        Object.entries(type_labels).forEach(([type, label]) => {
            const button = document.createElement('button');
            button.className = `filter_button filter_button_${type} ${filter_state.type_filters[type] ? 'filter_button_active' : ''}`;
            button.setAttribute('data-type', type);
            button.setAttribute('aria-pressed', filter_state.type_filters[type]);
            
            // Create label with icon
            const icon = document.createElement('span');
            icon.className = 'filter_icon';
            // Use emoji as placeholder for icon
            switch(type) {
                case 'function': icon.textContent = '⚙️'; break;
                case 'variable': icon.textContent = '📦'; break;
                case 'class': icon.textContent = '🧩'; break;
                case 'parameter': icon.textContent = '🔹'; break;
                case 'constant': icon.textContent = '💎'; break;
                case 'event': icon.textContent = '⚡'; break;
                case 'property': icon.textContent = '🔧'; break;
                case 'file': icon.textContent = '📄'; break;
            }
            
            const btn_label = document.createElement('span');
            btn_label.className = 'filter_label';
            btn_label.textContent = label;
            
            button.appendChild(icon);
            button.appendChild(btn_label);
            
            // Add click handler
            button.addEventListener('click', () => {
                // Toggle active state
                filter_state.type_filters[type] = !filter_state.type_filters[type];
                button.classList.toggle('filter_button_active');
                button.setAttribute('aria-pressed', filter_state.type_filters[type]);
                
                console.log(`filter_toggle: ${type} filter ${filter_state.type_filters[type] ? 'enabled' : 'disabled'}`);
                notify_change();
            });
            
            button_grid.appendChild(button);
        });
        
        type_container.appendChild(button_grid);
        
        return type_container;
    };
    
    /**
     * 7a3_advanced_filters - Creates root filters section
     * @returns {HTMLElement} Root filters container
     */
    const create_root_filters = (roots) => {
        const root_container = document.createElement('div');
        root_container.className = 'filter_roots';
        
        // Add section title
        const section_title = document.createElement('div');
        section_title.className = 'filter_section_title';
        section_title.textContent = 'Filter by Root Term';
        root_container.appendChild(section_title);
        
        // If no roots provided, return empty container
        if (!roots || roots.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'filter_empty';
            empty.textContent = 'No root terms available';
            root_container.appendChild(empty);
            return root_container;
        }
        
        // Create scrollable container for root filters
        const root_scroll = document.createElement('div');
        root_scroll.className = 'filter_root_scroll';
        
        // Sort roots alphabetically
        const sorted_roots = [...roots].sort();
        
        // Create toggle for each root
        sorted_roots.forEach(root => {
            // Initialize root filter state if not exists
            if (filter_state.root_filters[root] === undefined) {
                filter_state.root_filters[root] = true; // Default to active
            }
            
            const root_btn = document.createElement('button');
            root_btn.className = `filter_root ${filter_state.root_filters[root] ? 'filter_root_active' : ''}`;
            root_btn.setAttribute('data-root', root);
            root_btn.setAttribute('aria-pressed', filter_state.root_filters[root]);
            root_btn.textContent = root;
            
            // Add click handler
            root_btn.addEventListener('click', () => {
                // Toggle active state
                filter_state.root_filters[root] = !filter_state.root_filters[root];
                root_btn.classList.toggle('filter_root_active');
                root_btn.setAttribute('aria-pressed', filter_state.root_filters[root]);
                
                console.log(`root_filter_toggle: ${root} filter ${filter_state.root_filters[root] ? 'enabled' : 'disabled'}`);
                notify_change();
            });
            
            root_scroll.appendChild(root_btn);
        });
        
        root_container.appendChild(root_scroll);
        
        return root_container;
    };
    
    /**
     * Creates action bar with reset and save buttons
     * @returns {HTMLElement} Action bar element
     */
    const create_action_bar = () => {
        const action_bar = document.createElement('div');
        action_bar.className = 'filter_actions';
        
        // Create reset button
        const reset_button = document.createElement('button');
        reset_button.className = 'filter_reset';
        reset_button.textContent = 'Reset All Filters';
        reset_button.addEventListener('click', () => {
            reset_all_filters();
            console.log('filter_reset: all filters reset to default');
        });
        
        // Create save preset button
        const save_button = document.createElement('button');
        save_button.className = 'filter_save';
        save_button.textContent = 'Save as Preset';
        save_button.addEventListener('click', () => {
            save_current_preset();
            console.log('filter_save: current filters saved as preset');
        });
        
        action_bar.appendChild(reset_button);
        action_bar.appendChild(save_button);
        
        return action_bar;
    };
    
    /**
     * 7b1_state_manipulation - Resets all filters to default state
     */
    const reset_all_filters = () => {
        // Reset type filters
        Object.keys(filter_state.type_filters).forEach(type => {
            filter_state.type_filters[type] = true;
        });
        
        // Update type filter buttons
        const type_buttons = document.querySelectorAll('.filter_button');
        type_buttons.forEach(button => {
            const type = button.getAttribute('data-type');
            button.classList.add('filter_button_active');
            button.setAttribute('aria-pressed', 'true');
        });
        
        // Reset root filters
        Object.keys(filter_state.root_filters).forEach(root => {
            filter_state.root_filters[root] = true;
        });
        
        // Update root filter buttons
        const root_buttons = document.querySelectorAll('.filter_root');
        root_buttons.forEach(button => {
            button.classList.add('filter_root_active');
            button.setAttribute('aria-pressed', 'true');
        });
        
        // Clear search input
        if (search_input) {
            search_input.value = '';
            filter_state.search_text = '';
            
            // Hide clear button
            const clear_button = document.querySelector('.search_clear');
            if (clear_button) clear_button.style.display = 'none';
        }
        
        // Reset active preset
        filter_state.active_preset = null;
        
        // Notify of changes
        notify_change();
    };
    
    /**
     * 7b2_state_persistence - Saves current filter state as a preset
     */
    const save_current_preset = () => {
        // Prompt for preset name
        const preset_name = prompt('Enter a name for this filter preset:');
        if (!preset_name || preset_name.trim() === '') return;
        
        // Get existing presets
        let saved_presets = [];
        try {
            const saved_data = localStorage.getItem('codename_filter_presets');
            saved_presets = saved_data ? JSON.parse(saved_data) : [];
        } catch (e) {
            console.error('preset_load_error: failed to load saved presets', e);
            saved_presets = [];
        }
        
        // Create new preset
        const new_preset = {
            id: Date.now(), // Use timestamp as ID
            name: preset_name.trim(),
            type_filters: { ...filter_state.type_filters },
            root_filters: { ...filter_state.root_filters },
            search_text: filter_state.search_text
        };
        
        // Add to presets
        saved_presets.push(new_preset);
        
        // Save to localStorage
        try {
            localStorage.setItem('codename_filter_presets', JSON.stringify(saved_presets));
            console.log(`preset_save: saved preset "${preset_name}" to localStorage`);
            
            // Update active preset
            filter_state.active_preset = new_preset.id;
        } catch (e) {
            console.error('preset_save_error: failed to save preset', e);
            alert('Failed to save preset. Local storage may be full or unavailable.');
        }
    };
    
    /**
     * 7b2_state_persistence - Loads a saved filter preset
     * @param {number} preset_id - ID of the preset to load
     */
    const load_preset = (preset_id) => {
        // Get existing presets
        let saved_presets = [];
        try {
            const saved_data = localStorage.getItem('codename_filter_presets');
            saved_presets = saved_data ? JSON.parse(saved_data) : [];
        } catch (e) {
            console.error('preset_load_error: failed to load saved presets', e);
            return;
        }
        
        // Find preset with matching ID
        const preset = saved_presets.find(p => p.id === preset_id);
        if (!preset) {
            console.error(`preset_load_error: preset with ID ${preset_id} not found`);
            return;
        }
        
        // Apply preset
        filter_state.type_filters = { ...preset.type_filters };
        filter_state.root_filters = { ...preset.root_filters };
        filter_state.search_text = preset.search_text;
        filter_state.active_preset = preset_id;
        
        // Update UI to match
        update_ui_from_state();
        
        console.log(`preset_load: loaded preset "${preset.name}"`);
        
        // Notify of changes
        notify_change();
    };
    
    /**
     * Updates UI elements to match current filter state
     */
    const update_ui_from_state = () => {
        // Update type filter buttons
        const type_buttons = document.querySelectorAll('.filter_button');
        type_buttons.forEach(button => {
            const type = button.getAttribute('data-type');
            if (type && filter_state.type_filters[type] !== undefined) {
                button.classList.toggle('filter_button_active', filter_state.type_filters[type]);
                button.setAttribute('aria-pressed', filter_state.type_filters[type]);
            }
        });
        
        // Update root filter buttons
        const root_buttons = document.querySelectorAll('.filter_root');
        root_buttons.forEach(button => {
            const root = button.getAttribute('data-root');
            if (root && filter_state.root_filters[root] !== undefined) {
                button.classList.toggle('filter_root_active', filter_state.root_filters[root]);
                button.setAttribute('aria-pressed', filter_state.root_filters[root]);
            }
        });
        
        // Update search input
        if (search_input) {
            search_input.value = filter_state.search_text || '';
            
            // Show/hide clear button
            const clear_button = document.querySelector('.search_clear');
            if (clear_button) {
                clear_button.style.display = filter_state.search_text ? 'block' : 'none';
            }
        }
    };
    
    /**
     * 7b4_state_events - Notifies all subscribers of filter state changes
     */
    const notify_change = () => {
        // Create a copy of the state to prevent external modification
        const state_copy = {
            type_filters: { ...filter_state.type_filters },
            root_filters: { ...filter_state.root_filters },
            search_text: filter_state.search_text,
            active_preset: filter_state.active_preset
        };
        
        // Call all registered callbacks
        change_callbacks.forEach(callback => {
            try {
                callback(state_copy);
            } catch (e) {
                console.error('filter_callback_error: error in filter change callback', e);
            }
        });
        
        // Save current state to localStorage
        save_filter_state();
    };
    
    /**
     * 7b2_state_persistence - Saves current filter state to localStorage
     */
    const save_filter_state = () => {
        try {
            localStorage.setItem('codename_filter_state', JSON.stringify(filter_state));
            console.log('filter_state_save: saved filter state to localStorage');
        } catch (e) {
            console.error('filter_state_save_error: failed to save filter state', e);
        }
    };
    
    /**
     * 7b2_state_persistence - Loads filter state from localStorage
     */
    const load_filter_state = () => {
        try {
            const saved_state = localStorage.getItem('codename_filter_state');
            if (saved_state) {
                const parsed_state = JSON.parse(saved_state);
                
                // Validate and merge with current state
                if (parsed_state && typeof parsed_state === 'object') {
                    // Merge type filters
                    if (parsed_state.type_filters && typeof parsed_state.type_filters === 'object') {
                        Object.keys(filter_state.type_filters).forEach(type => {
                            if (typeof parsed_state.type_filters[type] === 'boolean') {
                                filter_state.type_filters[type] = parsed_state.type_filters[type];
                            }
                        });
                    }
                    
                    // Merge root filters
                    if (parsed_state.root_filters && typeof parsed_state.root_filters === 'object') {
                        filter_state.root_filters = { ...parsed_state.root_filters };
                    }
                    
                    // Set search text
                    if (typeof parsed_state.search_text === 'string') {
                        filter_state.search_text = parsed_state.search_text;
                    }
                    
                    // Set active preset
                    if (parsed_state.active_preset) {
                        filter_state.active_preset = parsed_state.active_preset;
                    }
                    
                    console.log('filter_state_load: loaded filter state from localStorage');
                }
            }
        } catch (e) {
            console.error('filter_state_load_error: failed to load filter state', e);
        }
    };
    
    /**
     * 7c0_filter_functions - Applies current filters to codename list
     * @param {Array} codename_list - Array of codename objects to filter
     * @returns {Array} Filtered array of codename objects
     */
    const apply_filters = (codename_list) => {
        if (!codename_list || !Array.isArray(codename_list)) {
            return [];
        }
        
        console.log(`filter_apply: applying filters to ${codename_list.length} codenames`);
        
        // Start timer for performance measurement
        const start_time = performance.now();
        
        // Apply filters
        const filtered_list = codename_list.filter(codename => {
            // Type filter
            const type_match = filter_state.type_filters[codename.type];
            if (!type_match) return false;
            
            // Root filter
            const root = (codename.name || '').split('_')[0];
            const root_match = !root || filter_state.root_filters[root] !== false;
            if (!root_match) return false;
            
            // Text search
            if (filter_state.search_text) {
                const search_text = filter_state.search_text.toLowerCase();
                const name_match = (codename.name || '').toLowerCase().includes(search_text);
                const desc_match = (codename.description || '').toLowerCase().includes(search_text);
                if (!name_match && !desc_match) return false;
            }
            
            // All filters passed
            return true;
        });
        
        // Measure performance
        const end_time = performance.now();
        const duration = end_time - start_time;
        
        console.log(`filter_result: ${filtered_list.length} codenames match filters (${duration.toFixed(2)}ms)`);
        
        return filtered_list;
    };
    
    /**
     * 7c3_highlighting - Adds highlighting to search matches
     * @param {string} text - Text to highlight
     * @returns {string} HTML with highlighted matches
     */
    const highlight_matches = (text) => {
        if (!text || !filter_state.search_text) {
            return text;
        }
        
        const search_text = filter_state.search_text.toLowerCase();
        const index = text.toLowerCase().indexOf(search_text);
        
        if (index === -1) {
            return text;
        }
        
        const before = text.substring(0, index);
        const match = text.substring(index, index + search_text.length);
        const after = text.substring(index + search_text.length);
        
        return `${before}<span class="highlight">${match}</span>${after}`;
    };
    
    /**
     * Initializes the filter component
     * @param {Array} roots - Array of available root terms for filtering
     */
    const initialize = (roots = []) => {
        console.log('filter_initialize: initializing filter component');
        
        // Load saved state
        load_filter_state();
        
        // Create filter container
        filter_container = create_filter_container();
        container.appendChild(filter_container);
        
        // Add root filters if provided
        if (roots && roots.length > 0) {
            const root_filters = create_root_filters(roots);
            filter_container.appendChild(root_filters);
        }
        
        // Update UI to match loaded state
        update_ui_from_state();
        
        console.log('filter_initialize_complete: filter component initialized');
    };
    
    // Public API
    return {
        initialize,
        apply_filters,
        highlight_matches,
        
        // Register for filter change events
        on_filter_change: (callback) => {
            if (typeof callback === 'function') {
                change_callbacks.push(callback);
            }
        },
        
        // Get current filter state
        get_filter_state: () => ({ ...filter_state }),
        
        // Load a saved preset
        load_preset,
        
        // Reset all filters
        reset_all_filters
    };
};

export default filter_component_create; 