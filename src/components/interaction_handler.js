/**
 * Codename Interaction Handler - Manages interactions between index and detail views
 */

/**
 * 6c0_selection_handling - Implements selection handling for codename index
 * @param {Object} index_view - Index view component instance
 * @param {Object} detail_view - Detail view component instance
 * @returns {Object} Interaction handler with public methods
 */
const interaction_handler_create = (index_view, detail_view) => {
    // Private state
    let keyboard_enabled = true;
    let current_selection = null;
    let selection_history = [];
    
    /**
     * Handles selection of a codename from the index view
     * @param {Object} codename - The selected codename object
     */
    const handle_selection = (codename) => {
        console.log(`selection_handler: selected ${codename.name}`);
        
        // Update selection state
        current_selection = codename;
        
        // Add to selection history
        add_to_history(codename);
        
        // Update the detail view
        detail_view.display_detail(codename);
    };
    
    /**
     * Adds a codename to selection history, avoiding duplicates
     * @param {Object} codename - Codename to add to history
     */
    const add_to_history = (codename) => {
        // Remove if already in history
        selection_history = selection_history.filter(item => item.name !== codename.name);
        
        // Add to front of history
        selection_history.unshift(codename);
        
        // Limit history length
        if (selection_history.length > 10) {
            selection_history.pop();
        }
        
        console.log(`selection_history: updated with ${codename.name}`);
    };
    
    /**
     * 6c1_keyboard_shortcuts - Sets up keyboard shortcuts for navigation
     */
    const setup_keyboard_shortcuts = () => {
        if (!keyboard_enabled) return;
        
        document.addEventListener('keydown', (e) => {
            // Only process if not in an input field
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
            
            // Navigation shortcuts
            switch (e.key) {
                case 'ArrowUp':
                    navigate_selection('prev');
                    e.preventDefault();
                    break;
                case 'ArrowDown':
                    navigate_selection('next');
                    e.preventDefault();
                    break;
                case 'Enter':
                    if (current_selection) {
                        // If something is already selected, perform action
                        console.log(`keyboard_action: enter on ${current_selection.name}`);
                    }
                    break;
                case 'Escape':
                    // Could implement deselection or closing a detail panel
                    console.log('keyboard_action: escape pressed');
                    break;
                case '/':
                    // Focus search field
                    focus_search();
                    e.preventDefault();
                    break;
                case 'c':
                    if (e.ctrlKey || e.metaKey) {
                        // Don't interfere with copy
                        return;
                    }
                    // Copy current selection
                    if (current_selection) {
                        copy_to_clipboard(current_selection.name);
                        console.log(`keyboard_action: copied ${current_selection.name}`);
                    }
                    break;
                case 'h':
                    // Toggle history panel
                    toggle_history();
                    e.preventDefault();
                    break;
            }
        });
        
        console.log('keyboard_shortcuts: setup complete');
    };
    
    /**
     * Navigate to the next or previous item in the list
     * @param {string} direction - 'next' or 'prev'
     */
    const navigate_selection = (direction) => {
        // Get all selectable items
        const items = document.querySelectorAll('.codename_item');
        if (!items.length) return;
        
        // Find the index of the current selection
        let current_index = -1;
        if (current_selection) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].dataset.name === current_selection.name) {
                    current_index = i;
                    break;
                }
            }
        }
        
        // Calculate new index
        let new_index;
        if (direction === 'next') {
            new_index = current_index < items.length - 1 ? current_index + 1 : 0;
        } else {
            new_index = current_index > 0 ? current_index - 1 : items.length - 1;
        }
        
        // Get the new element and trigger click
        const new_element = items[new_index];
        if (new_element) {
            // Ensure it's visible (expand parent group if needed)
            ensure_visible(new_element);
            
            // Trigger click
            new_element.click();
            
            // Scroll into view if needed
            new_element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };
    
    /**
     * Ensures an element is visible by expanding its parent group if needed
     * @param {HTMLElement} element - Element to make visible
     */
    const ensure_visible = (element) => {
        const root_group = element.closest('.root_group');
        if (root_group && !root_group.classList.contains('root_expanded')) {
            // Find and click the header to expand
            const header = root_group.querySelector('.root_header');
            if (header) {
                header.click();
            }
        }
    };
    
    /**
     * Focus the search input field
     */
    const focus_search = () => {
        const search_input = document.querySelector('.filter_search_area input');
        if (search_input) {
            search_input.focus();
        }
    };
    
    /**
     * Copy text to clipboard
     * @param {string} text - Text to copy
     */
    const copy_to_clipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log(`clipboard_copy: copied "${text}"`);
                show_copy_feedback();
            })
            .catch(err => {
                console.error('clipboard_error: could not copy text', err);
            });
    };
    
    /**
     * Show feedback when text is copied
     */
    const show_copy_feedback = () => {
        // Create or get feedback element
        let feedback = document.querySelector('.copy_feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'copy_feedback';
            document.body.appendChild(feedback);
        }
        
        // Show message
        feedback.textContent = 'Copied!';
        feedback.classList.add('copy_feedback_visible');
        
        // Hide after timeout
        setTimeout(() => {
            feedback.classList.remove('copy_feedback_visible');
        }, 2000);
    };
    
    /**
     * Toggle the history panel
     */
    const toggle_history = () => {
        console.log('history_toggle: showing selection history');
        
        // Create or get history panel
        let history_panel = document.querySelector('.history_panel');
        const is_visible = history_panel && history_panel.classList.contains('history_panel_visible');
        
        if (is_visible) {
            // Hide panel
            history_panel.classList.remove('history_panel_visible');
            return;
        }
        
        if (!history_panel) {
            // Create panel
            history_panel = document.createElement('div');
            history_panel.className = 'history_panel';
            
            // Add close button
            const close_button = document.createElement('button');
            close_button.className = 'history_close';
            close_button.textContent = '×';
            close_button.addEventListener('click', () => {
                history_panel.classList.remove('history_panel_visible');
            });
            
            // Add title
            const title = document.createElement('h3');
            title.className = 'history_title';
            title.textContent = 'Selection History';
            
            // Add header container
            const header = document.createElement('div');
            header.className = 'history_header';
            header.appendChild(title);
            header.appendChild(close_button);
            
            history_panel.appendChild(header);
            
            // Add to document
            document.body.appendChild(history_panel);
        }
        
        // Clear existing content (except header)
        const header = history_panel.querySelector('.history_header');
        history_panel.innerHTML = '';
        if (header) {
            history_panel.appendChild(header);
        }
        
        // Add history items
        if (selection_history.length > 0) {
            const list = document.createElement('ul');
            list.className = 'history_list';
            
            selection_history.forEach((codename) => {
                const item = document.createElement('li');
                item.className = 'history_item';
                
                const name = document.createElement('span');
                name.className = 'history_name';
                name.textContent = codename.name;
                
                const type = document.createElement('span');
                type.className = `history_type history_type_${codename.type}`;
                type.textContent = codename.type;
                
                item.appendChild(name);
                item.appendChild(type);
                
                // Make clickable
                item.addEventListener('click', () => {
                    history_panel.classList.remove('history_panel_visible');
                    handle_selection(codename);
                });
                
                list.appendChild(item);
            });
            
            history_panel.appendChild(list);
        } else {
            // No history yet
            const empty = document.createElement('div');
            empty.className = 'history_empty';
            empty.textContent = 'No selection history yet';
            history_panel.appendChild(empty);
        }
        
        // Show panel
        history_panel.classList.add('history_panel_visible');
    };
    
    /**
     * 6c2_drag_interactions - Sets up drag interactions for enhanced usability
     */
    const setup_drag_interactions = () => {
        // Implementation of drag interactions could go here
        // For MVP, this is left for future implementation
        console.log('drag_interactions: feature planned for future implementation');
    };
    
    /**
     * 6c3_context_menu - Sets up custom context menu for codename items
     */
    const setup_context_menu = () => {
        // Create context menu element
        const context_menu = document.createElement('div');
        context_menu.className = 'context_menu';
        context_menu.style.display = 'none';
        document.body.appendChild(context_menu);
        
        // Add menu items
        const menu_items = [
            {
                label: 'View Details',
                action: (codename) => {
                    handle_selection(codename);
                }
            },
            {
                label: 'Copy Codename',
                action: (codename) => {
                    copy_to_clipboard(codename.name);
                }
            },
            {
                label: 'Generate Reference',
                action: (codename) => {
                    // This would call the reference generation function
                    console.log(`context_reference: generating reference for ${codename.name}`);
                }
            }
        ];
        
        // Add items to menu
        menu_items.forEach(item => {
            const menu_item = document.createElement('div');
            menu_item.className = 'context_menu_item';
            menu_item.textContent = item.label;
            context_menu.appendChild(menu_item);
        });
        
        // Add context menu event listeners to codename items
        document.addEventListener('contextmenu', (e) => {
            // Find if click was on a codename item
            const codename_item = e.target.closest('.codename_item');
            if (!codename_item) {
                context_menu.style.display = 'none';
                return;
            }
            
            e.preventDefault();
            
            // Position menu
            context_menu.style.left = `${e.pageX}px`;
            context_menu.style.top = `${e.pageY}px`;
            context_menu.style.display = 'block';
            
            // Store reference to the codename
            const codename_name = codename_item.dataset.name;
            const codename_type = codename_item.dataset.type;
            const codename = {
                name: codename_name,
                type: codename_type
            };
            
            // Update menu item actions
            const menu_items = context_menu.querySelectorAll('.context_menu_item');
            menu_items.forEach((item, index) => {
                // Remove existing listeners
                const new_item = item.cloneNode(true);
                item.parentNode.replaceChild(new_item, item);
                
                // Add new listener
                new_item.addEventListener('click', () => {
                    menu_items[index].action(codename);
                    context_menu.style.display = 'none';
                });
            });
        });
        
        // Hide context menu when clicking elsewhere
        document.addEventListener('click', () => {
            context_menu.style.display = 'none';
        });
        
        console.log('context_menu: setup complete');
    };
    
    /**
     * 6c4_event_delegation - Sets up event delegation for better performance
     */
    const setup_event_delegation = () => {
        // Add click handler to document for event delegation
        document.addEventListener('click', (e) => {
            // Handle codename item clicks via delegation
            const codename_item = e.target.closest('.codename_item');
            if (codename_item) {
                // Extract codename data from dataset
                const name = codename_item.dataset.name;
                const type = codename_item.dataset.type;
                
                // In a real implementation, we would get the full codename object
                // For this example, we'll create a simple object with the data we have
                const codename = {
                    name: name,
                    type: type
                };
                
                // Update selection indicators
                document.querySelectorAll('.codename_item.codename_selected').forEach(item => {
                    item.classList.remove('codename_selected');
                });
                codename_item.classList.add('codename_selected');
                
                // Handle selection
                handle_selection(codename);
            }
        });
        
        console.log('event_delegation: setup complete');
    };
    
    /**
     * Cleans up event listeners to prevent memory leaks
     */
    const cleanup = () => {
        // This function would remove event listeners when component is unmounted
        console.log('interaction_cleanup: removing event listeners');
    };
    
    /**
     * Initialize the interaction handler
     */
    const initialize = () => {
        // Set up event handlers
        setup_keyboard_shortcuts();
        setup_context_menu();
        setup_event_delegation();
        
        // Set up view communication
        index_view.on_select(handle_selection);
        
        console.log('interaction_initialize: handler initialized');
        
        return {
            cleanup,
            toggle_keyboard: (enabled) => {
                keyboard_enabled = enabled;
                console.log(`keyboard_toggle: ${enabled ? 'enabled' : 'disabled'}`);
            }
        };
    };
    
    // Public API
    return {
        initialize,
        cleanup
    };
};

export default interaction_handler_create; 