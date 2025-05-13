/**
 * Codename Search Component - Advanced search functionality for codenames
 */

/**
 * 8a0_search_controls - Creates the search UI controls and manages search functionality
 * @param {Object} container - Container element to render search controls into
 * @returns {Object} Search controller object with public methods
 */
const search_component_create = (container) => {
    // Private state
    let search_state = {
        query: '',
        recent_searches: [],
        results: [],
        pagination: {
            current_page: 1,
            items_per_page: 10,
            total_pages: 1
        },
        active_result_index: -1
    };
    
    // Track registered callbacks
    const change_callbacks = [];
    
    // Reference to DOM elements
    let search_input = null;
    let results_container = null;
    let suggestion_container = null;
    
    /**
     * 8a0_search_controls - Creates the main search interface
     * @returns {HTMLElement} The search container element
     */
    const create_search_container = () => {
        const container = document.createElement('div');
        container.className = 'search_container';
        
        // Add title
        const title = document.createElement('h3');
        title.className = 'search_title';
        title.textContent = 'Advanced Search';
        container.appendChild(title);
        
        // Add search input
        const search_controls = create_search_controls();
        container.appendChild(search_controls);
        
        // Add results area
        results_container = document.createElement('div');
        results_container.className = 'search_results';
        container.appendChild(results_container);
        
        return container;
    };
    
    /**
     * 8a0_search_controls - Creates search input with button and suggestions
     * @returns {HTMLElement} Search controls container
     */
    const create_search_controls = () => {
        const controls = document.createElement('div');
        controls.className = 'search_controls';
        
        // Create search input group
        const input_group = document.createElement('div');
        input_group.className = 'search_input_group';
        
        // Create search icon
        const search_icon = document.createElement('span');
        search_icon.className = 'search_icon';
        search_icon.innerHTML = '🔍';
        input_group.appendChild(search_icon);
        
        // Create input field
        search_input = document.createElement('input');
        search_input.className = 'search_input';
        search_input.type = 'text';
        search_input.placeholder = 'Search codenames...';
        search_input.setAttribute('aria-label', 'Search codenames');
        
        // Add input event for search suggestions
        search_input.addEventListener('input', () => {
            const query = search_input.value.trim();
            search_state.query = query;
            
            // Show suggestions if there's text
            if (query) {
                show_suggestions(query);
                clear_button.style.display = 'block';
            } else {
                hide_suggestions();
                clear_button.style.display = 'none';
            }
        });
        
        // Add keydown event for keyboard navigation
        search_input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                perform_search(search_state.query);
                hide_suggestions();
            } else if (e.key === 'ArrowDown') {
                // Navigate to suggestions if visible
                if (suggestion_container && suggestion_container.style.display !== 'none') {
                    const first_suggestion = suggestion_container.querySelector('.search_suggestion');
                    if (first_suggestion) {
                        e.preventDefault();
                        first_suggestion.focus();
                    }
                }
            } else if (e.key === 'Escape') {
                hide_suggestions();
            }
        });
        
        input_group.appendChild(search_input);
        
        // Create clear button
        const clear_button = document.createElement('button');
        clear_button.className = 'search_clear';
        clear_button.innerHTML = '×';
        clear_button.setAttribute('aria-label', 'Clear search');
        clear_button.style.display = 'none'; // Hide initially
        
        clear_button.addEventListener('click', () => {
            search_input.value = '';
            search_state.query = '';
            clear_button.style.display = 'none';
            hide_suggestions();
            search_input.focus();
            
            // Clear results
            display_results([]);
        });
        
        input_group.appendChild(clear_button);
        controls.appendChild(input_group);
        
        // Create search button
        const search_button = document.createElement('button');
        search_button.className = 'search_button';
        search_button.textContent = 'Search';
        search_button.addEventListener('click', () => {
            perform_search(search_state.query);
            hide_suggestions();
        });
        
        controls.appendChild(search_button);
        
        // Create suggestions container
        suggestion_container = document.createElement('div');
        suggestion_container.className = 'search_suggestions';
        suggestion_container.style.display = 'none';
        controls.appendChild(suggestion_container);
        
        return controls;
    };
    
    /**
     * 8a3_search_suggestions - Shows search suggestions based on input
     * @param {string} query - The current search query
     */
    const show_suggestions = (query) => {
        if (!query || !suggestion_container) return;
        
        // Clear previous suggestions
        suggestion_container.innerHTML = '';
        
        // Get suggestions (this would typically come from the data)
        // Here we'll show recent searches and possible matches
        const suggestions = get_suggestions(query);
        
        if (suggestions.length === 0) {
            hide_suggestions();
            return;
        }
        
        // Create suggestion elements
        suggestions.forEach(suggestion => {
            const suggestion_elem = document.createElement('div');
            suggestion_elem.className = 'search_suggestion';
            suggestion_elem.setAttribute('tabindex', '0');
            
            // Highlight matching part
            const index = suggestion.toLowerCase().indexOf(query.toLowerCase());
            if (index >= 0) {
                const before = suggestion.substring(0, index);
                const match = suggestion.substring(index, index + query.length);
                const after = suggestion.substring(index + query.length);
                suggestion_elem.innerHTML = `${before}<span class="highlight">${match}</span>${after}`;
            } else {
                suggestion_elem.textContent = suggestion;
            }
            
            // Add click event
            suggestion_elem.addEventListener('click', () => {
                search_input.value = suggestion;
                search_state.query = suggestion;
                hide_suggestions();
                perform_search(suggestion);
            });
            
            // Add keyboard navigation
            suggestion_elem.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    search_input.value = suggestion;
                    search_state.query = suggestion;
                    hide_suggestions();
                    perform_search(suggestion);
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    suggestion_elem.nextElementSibling?.focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (suggestion_elem.previousElementSibling) {
                        suggestion_elem.previousElementSibling.focus();
                    } else {
                        search_input.focus();
                    }
                } else if (e.key === 'Escape') {
                    hide_suggestions();
                    search_input.focus();
                }
            });
            
            suggestion_container.appendChild(suggestion_elem);
        });
        
        // Show suggestions
        suggestion_container.style.display = 'block';
    };
    
    /**
     * Hides the suggestions dropdown
     */
    const hide_suggestions = () => {
        if (suggestion_container) {
            suggestion_container.style.display = 'none';
        }
    };
    
    /**
     * 8a3_search_suggestions - Gets search suggestions based on query
     * @param {string} query - The search query
     * @returns {Array} Array of suggestion strings
     */
    const get_suggestions = (query) => {
        // Start with recent searches
        let suggestions = [...search_state.recent_searches]
            .filter(s => s.toLowerCase().includes(query.toLowerCase()));
        
        // Limit to 5 recent searches
        suggestions = suggestions.slice(0, 5);
        
        return suggestions;
    };
    
    /**
     * 8c0_basic_search - Performs search with current query
     * @param {string} query - The search query
     */
    const perform_search = (query) => {
        if (!query) {
            display_results([]);
            return;
        }
        
        console.log(`search_execute: searching for "${query}"`);
        
        // Add to recent searches if not already there
        if (!search_state.recent_searches.includes(query)) {
            search_state.recent_searches.unshift(query);
            // Limit to 10 recent searches
            if (search_state.recent_searches.length > 10) {
                search_state.recent_searches.pop();
            }
            // Save recent searches to localStorage
            save_recent_searches();
        }
        
        // This would typically search the actual data
        // For now, we'll just notify the callback
        notify_search_change(query);
    };
    
    /**
     * 8a1_search_results - Displays search results
     * @param {Array} results - Array of search result objects
     */
    const display_results = (results) => {
        if (!results_container) return;
        
        // Clear previous results
        results_container.innerHTML = '';
        
        // Update state
        search_state.results = results;
        search_state.pagination.total_pages = Math.ceil(results.length / search_state.pagination.items_per_page);
        search_state.pagination.current_page = Math.min(search_state.pagination.current_page, search_state.pagination.total_pages);
        
        if (search_state.pagination.current_page < 1) {
            search_state.pagination.current_page = 1;
        }
        
        // If no results, show empty state
        if (results.length === 0) {
            const empty_state = document.createElement('div');
            empty_state.className = 'search_empty';
            
            if (search_state.query) {
                empty_state.innerHTML = `<p>No results found for "${search_state.query}"</p>`;
            } else {
                empty_state.innerHTML = '<p>Enter a search term to find codenames</p>';
            }
            
            results_container.appendChild(empty_state);
            return;
        }
        
        // Create results header
        const header = document.createElement('div');
        header.className = 'results_header';
        header.innerHTML = `<span>${results.length} result${results.length !== 1 ? 's' : ''} for "${search_state.query}"</span>`;
        results_container.appendChild(header);
        
        // Calculate pagination
        const start_index = (search_state.pagination.current_page - 1) * search_state.pagination.items_per_page;
        const end_index = Math.min(start_index + search_state.pagination.items_per_page, results.length);
        const current_results = results.slice(start_index, end_index);
        
        // Create results list
        const list = document.createElement('div');
        list.className = 'results_list';
        
        // Add result items
        current_results.forEach((result, index) => {
            const result_item = create_result_item(result, start_index + index);
            list.appendChild(result_item);
        });
        
        results_container.appendChild(list);
        
        // Add pagination if needed
        if (search_state.pagination.total_pages > 1) {
            const pagination = create_pagination();
            results_container.appendChild(pagination);
        }
    };
    
    /**
     * 8a1_search_results - Creates a search result item
     * @param {Object} result - Result object
     * @param {number} index - Result index
     * @returns {HTMLElement} Result item element
     */
    const create_result_item = (result, index) => {
        const item = document.createElement('div');
        item.className = 'result_item';
        item.setAttribute('data-index', index);
        
        // Highlight the matching part in the name
        const highlighted_name = highlight_matches(result.name, search_state.query);
        
        // Build result content
        const type_badge = document.createElement('span');
        type_badge.className = `type_badge type_${result.type}`;
        type_badge.textContent = result.type;
        
        const name = document.createElement('div');
        name.className = 'result_name';
        name.innerHTML = highlighted_name;
        
        const description = document.createElement('div');
        description.className = 'result_description';
        description.innerHTML = highlight_matches(result.description, search_state.query);
        
        item.appendChild(type_badge);
        item.appendChild(name);
        item.appendChild(description);
        
        // Add click event
        item.addEventListener('click', () => {
            search_state.active_result_index = index;
            notify_result_select(result);
        });
        
        return item;
    };
    
    /**
     * 8a2_results_navigation - Creates pagination controls
     * @returns {HTMLElement} Pagination element
     */
    const create_pagination = () => {
        const pagination = document.createElement('div');
        pagination.className = 'search_pagination';
        
        // Previous page button
        const prev_button = document.createElement('button');
        prev_button.className = 'pagination_prev';
        prev_button.textContent = '← Previous';
        prev_button.disabled = search_state.pagination.current_page <= 1;
        prev_button.addEventListener('click', () => {
            if (search_state.pagination.current_page > 1) {
                search_state.pagination.current_page--;
                display_results(search_state.results);
            }
        });
        
        // Next page button
        const next_button = document.createElement('button');
        next_button.className = 'pagination_next';
        next_button.textContent = 'Next →';
        next_button.disabled = search_state.pagination.current_page >= search_state.pagination.total_pages;
        next_button.addEventListener('click', () => {
            if (search_state.pagination.current_page < search_state.pagination.total_pages) {
                search_state.pagination.current_page++;
                display_results(search_state.results);
            }
        });
        
        // Page indicator
        const page_indicator = document.createElement('span');
        page_indicator.className = 'pagination_indicator';
        page_indicator.textContent = `Page ${search_state.pagination.current_page} of ${search_state.pagination.total_pages}`;
        
        pagination.appendChild(prev_button);
        pagination.appendChild(page_indicator);
        pagination.appendChild(next_button);
        
        return pagination;
    };
    
    /**
     * 8d0_match_detection - Highlights search matches in text
     * @param {string} text - Text to search
     * @param {string} query - Search query
     * @returns {string} HTML with highlighted matches
     */
    const highlight_matches = (text, query) => {
        if (!text || !query) {
            return text;
        }
        
        // Simple exact match highlighting (case insensitive)
        const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    };
    
    /**
     * Helper function to escape special regex characters
     * @param {string} string - String to escape
     * @returns {string} Escaped string
     */
    const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };
    
    /**
     * 8b2_state_persistence - Saves recent searches to localStorage
     */
    const save_recent_searches = () => {
        try {
            localStorage.setItem('codename_recent_searches', JSON.stringify(search_state.recent_searches));
        } catch (e) {
            console.error('search_save_error: failed to save recent searches', e);
        }
    };
    
    /**
     * 8b2_state_persistence - Loads recent searches from localStorage
     */
    const load_recent_searches = () => {
        try {
            const saved_searches = localStorage.getItem('codename_recent_searches');
            if (saved_searches) {
                search_state.recent_searches = JSON.parse(saved_searches);
            }
        } catch (e) {
            console.error('search_load_error: failed to load recent searches', e);
            search_state.recent_searches = [];
        }
    };
    
    /**
     * 8b4_state_events - Notifies subscribers of search query changes
     * @param {string} query - The search query
     */
    const notify_search_change = (query) => {
        change_callbacks.forEach(callback => {
            try {
                if (callback.type === 'search') {
                    callback.handler(query);
                }
            } catch (e) {
                console.error('search_callback_error: error in search change callback', e);
            }
        });
    };
    
    /**
     * Notifies subscribers when a result is selected
     * @param {Object} result - The selected result
     */
    const notify_result_select = (result) => {
        change_callbacks.forEach(callback => {
            try {
                if (callback.type === 'select') {
                    callback.handler(result);
                }
            } catch (e) {
                console.error('search_callback_error: error in result select callback', e);
            }
        });
    };
    
    /**
     * 8c0_basic_search - Core search algorithm
     * @param {Array} items - Array of items to search
     * @param {string} query - Search query
     * @returns {Array} Filtered array of items
     */
    const search_items = (items, query) => {
        if (!query || !items || !Array.isArray(items)) {
            return [];
        }
        
        const normalized_query = query.toLowerCase();
        
        // Perform basic search - look for matches in name or description
        return items.filter(item => {
            const name_match = item.name && item.name.toLowerCase().includes(normalized_query);
            const desc_match = item.description && item.description.toLowerCase().includes(normalized_query);
            return name_match || desc_match;
        });
    };
    
    /**
     * Initializes the search component
     */
    const initialize = () => {
        console.log('search_initialize: initializing search component');
        
        // Load saved searches
        load_recent_searches();
        
        // Create search container
        const search_container = create_search_container();
        container.appendChild(search_container);
        
        // Set initial state
        display_results([]);
        
        console.log('search_initialize_complete: search component initialized');
    };
    
    // Public API
    return {
        initialize,
        
        // Search methods
        search_items,
        set_results: display_results,
        
        // Get query
        get_query: () => search_state.query,
        
        // Set query programmatically
        set_query: (query) => {
            search_state.query = query;
            if (search_input) {
                search_input.value = query;
            }
        },
        
        // Register for events
        on_search: (handler) => {
            if (typeof handler === 'function') {
                change_callbacks.push({ type: 'search', handler });
            }
        },
        
        on_result_select: (handler) => {
            if (typeof handler === 'function') {
                change_callbacks.push({ type: 'select', handler });
            }
        },
        
        // Clear search
        clear_search: () => {
            search_state.query = '';
            if (search_input) {
                search_input.value = '';
            }
            display_results([]);
        }
    };
};

export default search_component_create; 