/**
 * Codename Index View - Main component for displaying codename indexes
 */

/**
 * 6a0_index_setup - Index container creation for codename listing
 * @param {Object} container - Container element to render index into
 * @returns {Object} Index controller object with public methods
 */
const index_view_create = (container) => {
    // Private state
    let sort_criteria = 'name'; // Default sort by name
    let sort_direction = 'asc'; // Default ascending
    let expanded_roots = {}; // Track expanded state
    let current_selection = null; // Track selected codename
    
    // Create main index container
    const index_container = document.createElement('div');
    index_container.className = 'index_container';
    
    /**
     * Renders the codename index with root-based grouping
     * @param {Array} codename_list - Array of codename objects
     */
    const render_index = (codename_list) => {
        console.log('index_render: creating index with', codename_list.length, 'codenames');
        
        // Clear container
        index_container.innerHTML = '';
        
        // Group codenames by root
        const root_groups = group_by_root(codename_list);
        
        // Sort roots alphabetically for consistent display
        const sorted_roots = Object.keys(root_groups).sort();
        
        // Create a group for each root
        sorted_roots.forEach(root => {
            const codenames = root_groups[root];
            const is_expanded = expanded_roots[root] === true;
            
            // Create group with specified root and codenames
            const group = root_group_create(root, codenames, is_expanded);
            index_container.appendChild(group);
        });
        
        // Log completion of render operation
        console.log('index_render_complete: rendered', sorted_roots.length, 'root groups');
    };
    
    /**
     * Groups codenames by their root term
     * @param {Array} codename_list - Array of codename objects
     * @returns {Object} Map of root terms to arrays of codenames
     */
    const group_by_root = (codename_list) => {
        const groups = {};
        
        codename_list.forEach(codename => {
            const root = extract_root(codename.name);
            
            if (!groups[root]) {
                groups[root] = [];
            }
            
            groups[root].push(codename);
        });
        
        return groups;
    };
    
    /**
     * Extracts the root term from a codename
     * @param {string} codename - Full codename string
     * @returns {string} Root term (first part before underscore)
     */
    const extract_root = (codename) => {
        if (!codename) return '';
        
        const parts = codename.split('_');
        return parts[0] || '';
    };
    
    /**
     * Creates a collapsible group for a root term
     * @param {string} root - Root term
     * @param {Array} codenames - Array of codename objects with this root
     * @param {boolean} expanded_is - Whether the group is expanded
     * @returns {HTMLElement} Group element
     */
    const root_group_create = (root, codenames, expanded_is = false) => {
        // Sort codenames according to current sort criteria
        const sorted_codenames = sort_codenames(codenames);
        
        // Create group container
        const group = document.createElement('div');
        group.className = `root_group ${expanded_is ? 'root_expanded' : ''}`;
        group.dataset.root = root;
        
        // Create header (clickable)
        const header = root_header_create(root, codenames.length, expanded_is);
        
        // Create content container
        const content = document.createElement('div');
        content.className = 'root_content';
        
        // Add codenames to content
        sorted_codenames.forEach(codename => {
            const item = codename_item_create(codename);
            content.appendChild(item);
        });
        
        // Add header and content to group
        group.appendChild(header);
        group.appendChild(content);
        
        return group;
    };
    
    /**
     * Creates a root group header with expansion controls
     * @param {string} root - Root term
     * @param {number} count - Number of codenames in this group
     * @param {boolean} expanded_is - Whether the group is expanded
     * @returns {HTMLElement} Header element
     */
    const root_header_create = (root, count, expanded_is) => {
        const header = document.createElement('div');
        header.className = 'root_header';
        
        // Add caret for expansion indicator
        const caret = document.createElement('span');
        caret.className = 'root_caret';
        caret.textContent = expanded_is ? '▼' : '▶';
        
        // Add title
        const title = document.createElement('span');
        title.className = 'root_title';
        title.textContent = `${root} (${count})`;
        
        // Add event listener for toggling
        header.addEventListener('click', () => {
            // Toggle expanded state
            const group = header.closest('.root_group');
            const currently_expanded = group.classList.contains('root_expanded');
            
            // Update state
            group.classList.toggle('root_expanded');
            expanded_roots[root] = !currently_expanded;
            
            // Update caret
            caret.textContent = !currently_expanded ? '▼' : '▶';
            
            console.log(`root_toggle: ${root} group ${!currently_expanded ? 'expanded' : 'collapsed'}`);
        });
        
        // Add keyboard support
        header.tabIndex = 0;
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
        
        // Assemble header
        header.appendChild(caret);
        header.appendChild(title);
        
        return header;
    };
    
    /**
     * Creates a codename item element
     * @param {Object} codename - Codename object
     * @returns {HTMLElement} Codename element
     */
    const codename_item_create = (codename) => {
        const item = document.createElement('div');
        item.className = `codename_item codename_${codename.type}`;
        item.dataset.name = codename.name;
        item.dataset.type = codename.type;
        
        // Create term container for visual breakdown
        const term_container = term_container_create(codename.name);
        
        // Add description as tooltip
        if (codename.description) {
            item.title = codename.description;
        }
        
        // Add selection handling
        item.addEventListener('click', () => {
            // Deselect previous selection
            if (current_selection) {
                const prev = index_container.querySelector(`.codename_item[data-name="${current_selection}"]`);
                if (prev) prev.classList.remove('codename_selected');
            }
            
            // Update selection
            current_selection = codename.name;
            item.classList.add('codename_selected');
            
            // Emit selection event
            const event = new CustomEvent('codename_select', {
                detail: { codename }
            });
            index_container.dispatchEvent(event);
            
            console.log(`codename_select: selected ${codename.name}`);
        });
        
        // Add keyboard support
        item.tabIndex = 0;
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
        
        // Append term container
        item.appendChild(term_container);
        
        return item;
    };
    
    /**
     * Creates a container for visualizing terms in a codename
     * @param {string} codename - Codename string
     * @returns {HTMLElement} Term container element
     */
    const term_container_create = (codename) => {
        const container = document.createElement('div');
        container.className = 'term_container';
        
        // Split by underscore and create term elements
        const terms = codename.split('_');
        
        terms.forEach((term, index) => {
            // Create term element
            const term_el = document.createElement('span');
            term_el.className = `term ${index === 0 ? 'term_root' : ''}`;
            term_el.textContent = term;
            
            // Add to container
            container.appendChild(term_el);
            
            // Add separator unless last term
            if (index < terms.length - 1) {
                const separator = document.createElement('span');
                separator.className = 'term_separator';
                separator.textContent = '_';
                container.appendChild(separator);
            }
        });
        
        return container;
    };
    
    /**
     * Sort codenames based on current sort criteria
     * @param {Array} codenames - Array of codename objects to sort
     * @returns {Array} Sorted array of codenames
     */
    const sort_codenames = (codenames) => {
        return [...codenames].sort((a, b) => {
            let comparison = 0;
            
            // Compare based on criteria
            switch (sort_criteria) {
                case 'name':
                    comparison = a.name.localeCompare(b.name);
                    break;
                case 'type':
                    // Sort by type, then by name for same type
                    comparison = a.type.localeCompare(b.type);
                    if (comparison === 0) {
                        comparison = a.name.localeCompare(b.name);
                    }
                    break;
                default:
                    comparison = a.name.localeCompare(b.name);
            }
            
            // Apply direction
            return sort_direction === 'asc' ? comparison : -comparison;
        });
    };
    
    /**
     * Change the sort criteria and direction
     * @param {string} criteria - Sort criteria ('name', 'type', etc.)
     * @param {string} direction - Sort direction ('asc' or 'desc')
     */
    const change_sort = (criteria, direction) => {
        sort_criteria = criteria || 'name';
        sort_direction = direction || 'asc';
        
        console.log(`sort_change: sorting by ${criteria} in ${direction} order`);
        
        // Re-render with current data if we have any groups
        const groups = index_container.querySelectorAll('.root_group');
        if (groups.length > 0) {
            // Need to collect all codenames, sort them, and re-render
            let all_codenames = [];
            groups.forEach(group => {
                const root = group.dataset.root;
                const items = group.querySelectorAll('.codename_item');
                
                items.forEach(item => {
                    all_codenames.push({
                        name: item.dataset.name,
                        type: item.dataset.type,
                        description: item.title
                    });
                });
            });
            
            render_index(all_codenames);
        }
        
        // Save sort preferences to localStorage
        save_sort_preferences();
    };
    
    /**
     * Save sort preferences to localStorage
     */
    const save_sort_preferences = () => {
        try {
            localStorage.setItem('codename_sort_criteria', sort_criteria);
            localStorage.setItem('codename_sort_direction', sort_direction);
            console.log('sort_save: saved sort preferences');
        } catch (e) {
            console.error('sort_save_error: failed to save sort preferences', e);
        }
    };
    
    /**
     * Load sort preferences from localStorage
     */
    const load_sort_preferences = () => {
        try {
            const criteria = localStorage.getItem('codename_sort_criteria');
            const direction = localStorage.getItem('codename_sort_direction');
            
            if (criteria) sort_criteria = criteria;
            if (direction) sort_direction = direction;
            
            console.log(`sort_load: loaded sort preferences (${criteria}, ${direction})`);
        } catch (e) {
            console.error('sort_load_error: failed to load sort preferences', e);
        }
    };
    
    /**
     * Initialize the index view
     */
    const initialize = () => {
        // Load saved preferences
        load_sort_preferences();
        
        // Add to container
        container.appendChild(index_container);
        
        // Set up lazy loading for large datasets
        setup_lazy_loading();
        
        console.log('index_initialize: index view initialized');
    };
    
    /**
     * Set up lazy loading for performance with large datasets
     */
    const setup_lazy_loading = () => {
        // Track scroll position
        index_container.addEventListener('scroll', (e) => {
            // Use a throttled approach for performance
            if (!window.requestAnimationFrame) return;
            
            window.requestAnimationFrame(() => {
                // Implementation for lazy loading would go here
                // For now, just log scroll position for development
                const scroll_top = index_container.scrollTop;
                const scroll_height = index_container.scrollHeight;
                const client_height = index_container.clientHeight;
                
                // If near bottom, could load more items
                if (scroll_top + client_height >= scroll_height - 100) {
                    // In a real implementation, would load more items here
                    // console.log('index_scroll: near bottom, could load more');
                }
            });
        });
    };
    
    // Public API
    const api = {
        initialize,
        render_index,
        change_sort,
        // Subscribe to selection events
        on_select: (callback) => {
            index_container.addEventListener('codename_select', (e) => {
                callback(e.detail.codename);
            });
        }
    };
    
    return api;
};

export default index_view_create; 