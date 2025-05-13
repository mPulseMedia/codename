/**
 * Codename Reveal Component - Reveals and explains codenames in text content
 */

/**
 * Creates a reveal component for highlighting and explaining codenames
 * @param {Object} container - Container element to render reveal controls into
 * @returns {Object} Reveal controller object with public methods
 */
const reveal_component_create = (container) => {
    // Private state
    let reveal_state = {
        active: false,
        highlighted_elements: [],
        tooltip_visible: false,
        active_tooltip: null,
        codename_registry: {},
        highlight_class: 'codename_highlight',
        processed_containers: new WeakSet()
    };
    
    // DOM references
    let control_panel = null;
    let tooltip = null;
    
    /**
     * Create control panel for reveal functionality
     * @returns {HTMLElement} Control panel element
     */
    const create_control_panel = () => {
        const panel = document.createElement('div');
        panel.className = 'reveal_control_panel';
        
        // Create toggle button
        const toggle_button = document.createElement('button');
        toggle_button.className = 'reveal_toggle_button';
        toggle_button.innerHTML = '<span class="reveal_icon">👁️</span><span class="reveal_text">Reveal Codenames</span>';
        toggle_button.setAttribute('aria-pressed', reveal_state.active);
        toggle_button.addEventListener('click', () => {
            toggle_reveal();
            toggle_button.setAttribute('aria-pressed', reveal_state.active);
        });
        
        // Create info text
        const info_text = document.createElement('div');
        info_text.className = 'reveal_info';
        info_text.textContent = 'Highlight and explain codenames in content';
        
        panel.appendChild(toggle_button);
        panel.appendChild(info_text);
        
        return panel;
    };
    
    /**
     * Create tooltip for displaying codename information
     * @returns {HTMLElement} Tooltip element
     */
    const create_tooltip = () => {
        const tooltip_element = document.createElement('div');
        tooltip_element.className = 'codename_tooltip';
        tooltip_element.style.display = 'none';
        
        // Create tooltip content
        const title = document.createElement('div');
        title.className = 'tooltip_title';
        
        const type_badge = document.createElement('span');
        type_badge.className = 'tooltip_badge';
        
        const description = document.createElement('div');
        description.className = 'tooltip_description';
        
        const actions = document.createElement('div');
        actions.className = 'tooltip_actions';
        
        // Create view details button
        const details_button = document.createElement('button');
        details_button.className = 'tooltip_button tooltip_details';
        details_button.textContent = 'View Details';
        
        // Create close button
        const close_button = document.createElement('button');
        close_button.className = 'tooltip_button tooltip_close';
        close_button.textContent = '✕';
        close_button.setAttribute('aria-label', 'Close tooltip');
        close_button.addEventListener('click', (e) => {
            e.stopPropagation();
            hide_tooltip();
        });
        
        actions.appendChild(details_button);
        actions.appendChild(close_button);
        
        tooltip_element.appendChild(title);
        tooltip_element.appendChild(type_badge);
        tooltip_element.appendChild(description);
        tooltip_element.appendChild(actions);
        
        // Add click handler for viewing details
        tooltip_element.addEventListener('click', (e) => {
            if (e.target === details_button) {
                const codename = tooltip_element.getAttribute('data-codename');
                if (codename && reveal_state.codename_registry[codename]) {
                    show_codename_details(reveal_state.codename_registry[codename]);
                }
            }
        });
        
        // Add event listeners to prevent clicks from propagating
        tooltip_element.addEventListener('mousedown', (e) => e.stopPropagation());
        tooltip_element.addEventListener('touchstart', (e) => e.stopPropagation());
        
        // Add to document body
        document.body.appendChild(tooltip_element);
        
        return tooltip_element;
    };
    
    /**
     * Toggle reveal functionality on/off
     */
    const toggle_reveal = () => {
        reveal_state.active = !reveal_state.active;
        
        if (reveal_state.active) {
            activate_reveal();
        } else {
            deactivate_reveal();
        }
        
        // Update button state
        const toggle_button = document.querySelector('.reveal_toggle_button');
        if (toggle_button) {
            toggle_button.classList.toggle('reveal_active', reveal_state.active);
            toggle_button.setAttribute('aria-pressed', reveal_state.active);
        }
        
        console.log(`reveal_toggle: reveal mode ${reveal_state.active ? 'activated' : 'deactivated'}`);
    };
    
    /**
     * Activate reveal functionality
     */
    const activate_reveal = () => {
        // Process content containers
        process_content_containers();
        
        // Set up global click listener to close tooltip
        document.addEventListener('click', document_click_handler);
        
        // Create tooltip if it doesn't exist
        if (!tooltip) {
            tooltip = create_tooltip();
        }
    };
    
    /**
     * Deactivate reveal functionality
     */
    const deactivate_reveal = () => {
        // Remove all highlights
        reveal_state.highlighted_elements.forEach(element => {
            unhighlight_element(element);
        });
        
        reveal_state.highlighted_elements = [];
        
        // Hide tooltip
        hide_tooltip();
        
        // Remove global click listener
        document.removeEventListener('click', document_click_handler);
        
        // Clear processed containers
        reveal_state.processed_containers = new WeakSet();
    };
    
    /**
     * Process content containers to find and highlight codenames
     */
    const process_content_containers = () => {
        // Find all content containers in the page
        const content_containers = find_content_containers();
        
        // Process each container
        content_containers.forEach(container => {
            // Skip if already processed
            if (reveal_state.processed_containers.has(container)) {
                return;
            }
            
            // Mark as processed
            reveal_state.processed_containers.add(container);
            
            // Scan for codenames
            scan_for_codenames(container);
        });
    };
    
    /**
     * Find content containers in the page
     * @returns {Array} Array of content container elements
     */
    const find_content_containers = () => {
        // Target main content areas, avoid UI controls
        // In a real implementation, this would be more sophisticated
        const containers = [
            ...document.querySelectorAll('main, article, section, .content'),
            ...document.querySelectorAll('p, pre, code, .codename_container')
        ];
        
        return containers;
    };
    
    /**
     * Scan a container for codenames
     * @param {HTMLElement} container - Container to scan
     */
    const scan_for_codenames = (container) => {
        // Get container text
        const text = container.textContent;
        
        // Regular expression for codenames (snake_case pattern)
        const regex = /\b([a-z]+(_[a-z]+)+)\b/g;
        
        // Find matches
        let match;
        const matches = [];
        while ((match = regex.exec(text)) !== null) {
            matches.push({
                text: match[0],
                index: match.index,
                length: match[0].length
            });
        }
        
        // Highlight matches if found
        if (matches.length > 0) {
            highlight_matches(container, matches);
        }
    };
    
    /**
     * Highlight codename matches in the container
     * @param {HTMLElement} container - Container element
     * @param {Array} matches - Array of matches to highlight
     */
    const highlight_matches = (container, matches) => {
        // For each match, we need to find the actual text node containing it
        matches.forEach(match => {
            const range = find_text_range(container, match.text, match.index);
            if (range) {
                highlight_range(range, match.text);
            }
        });
    };
    
    /**
     * Find the text range for a match
     * @param {HTMLElement} container - Container to search
     * @param {string} text - Text to find
     * @param {number} target_index - Approximate index in the container's text
     * @returns {Range|null} Range object or null if not found
     */
    const find_text_range = (container, text, target_index) => {
        // Get all text nodes in the container
        const text_nodes = [];
        collect_text_nodes(container, text_nodes);
        
        let current_index = 0;
        
        // Find the text node containing the match
        for (const node of text_nodes) {
            const node_length = node.nodeValue.length;
            
            // If the match is within this node
            if (target_index >= current_index && target_index < current_index + node_length) {
                // Calculate the offset within this node
                const start_offset = target_index - current_index;
                
                // Create a range
                const range = document.createRange();
                range.setStart(node, start_offset);
                range.setEnd(node, start_offset + text.length);
                
                return range;
            }
            
            current_index += node_length;
        }
        
        return null;
    };
    
    /**
     * Collect text nodes from a container
     * @param {Node} node - Starting node
     * @param {Array} result - Array to collect text nodes into
     */
    const collect_text_nodes = (node, result) => {
        if (node.nodeType === Node.TEXT_NODE) {
            result.push(node);
        } else {
            for (const child of node.childNodes) {
                collect_text_nodes(child, result);
            }
        }
    };
    
    /**
     * Highlight a text range as a codename
     * @param {Range} range - The range to highlight
     * @param {string} codename - The codename text
     */
    const highlight_range = (range, codename) => {
        // Skip if already a highlight element
        if (range.commonAncestorContainer.parentElement && 
            range.commonAncestorContainer.parentElement.classList && 
            range.commonAncestorContainer.parentElement.classList.contains(reveal_state.highlight_class)) {
            return;
        }
        
        // Create highlight span
        const highlight = document.createElement('span');
        highlight.className = reveal_state.highlight_class;
        highlight.setAttribute('data-codename', codename);
        
        // Look up or create codename info
        if (!reveal_state.codename_registry[codename]) {
            reveal_state.codename_registry[codename] = create_codename_info(codename);
        }
        
        // Apply type-specific class if available
        const codename_info = reveal_state.codename_registry[codename];
        if (codename_info.type) {
            highlight.classList.add(`highlight_${codename_info.type}`);
        }
        
        // Insert the highlight span
        try {
            range.surroundContents(highlight);
            
            // Add click handler
            highlight.addEventListener('click', (e) => {
                e.stopPropagation();
                show_tooltip(highlight, codename_info);
            });
            
            // Track highlighted element
            reveal_state.highlighted_elements.push(highlight);
        } catch (e) {
            console.error('reveal_highlight_error: failed to highlight range', e);
        }
    };
    
    /**
     * Create codename info object from codename text
     * @param {string} codename - Codename text
     * @returns {Object} Codename info object
     */
    const create_codename_info = (codename) => {
        // In a real implementation, this would look up the codename in a registry
        // For now, we'll generate some basic info based on the codename format
        
        // Parse parts
        const parts = codename.split('_');
        const root = parts[0];
        
        // Guess the type based on common patterns
        let type = 'unknown';
        let description = '';
        
        if (codename.endsWith('_is')) {
            type = 'variable';
            description = 'Boolean flag indicating a state';
        } else if (parts.length >= 2) {
            // Check common verb prefixes for functions
            const common_verbs = ['get', 'set', 'create', 'update', 'delete', 'add', 'remove', 'load', 'save', 'find', 'process', 'validate'];
            if (common_verbs.includes(parts[0])) {
                type = 'function';
                description = `${capitalize(parts[0])}s ${parts.slice(1).join(' ')}`;
            }
            // Check for common container suffixes
            else if (['list', 'array', 'collection', 'set', 'map', 'container'].includes(parts[parts.length - 1])) {
                type = 'variable';
                description = `Collection of ${parts.slice(0, -1).join(' ')}`;
            }
            // Check for component/container patterns
            else if (['component', 'container', 'panel', 'view'].includes(parts[parts.length - 1])) {
                type = 'class';
                description = `UI component for ${parts.slice(0, -1).join(' ')}`;
            }
            else {
                // Default to variable
                type = 'variable';
                description = parts.join(' ');
            }
        }
        
        return {
            name: codename,
            type: type,
            description: description,
            root: root
        };
    };
    
    /**
     * Show tooltip for a codename
     * @param {HTMLElement} element - The highlighted element
     * @param {Object} codename_info - Codename info object
     */
    const show_tooltip = (element, codename_info) => {
        if (!tooltip) return;
        
        // Hide any existing tooltip
        hide_tooltip();
        
        // Update tooltip content
        tooltip.querySelector('.tooltip_title').textContent = codename_info.name;
        tooltip.querySelector('.tooltip_badge').textContent = codename_info.type;
        tooltip.querySelector('.tooltip_badge').className = `tooltip_badge badge_${codename_info.type}`;
        tooltip.querySelector('.tooltip_description').textContent = codename_info.description;
        
        // Store codename reference
        tooltip.setAttribute('data-codename', codename_info.name);
        
        // Position tooltip
        position_tooltip(element);
        
        // Show tooltip
        tooltip.style.display = 'block';
        
        // Set active state
        reveal_state.tooltip_visible = true;
        reveal_state.active_tooltip = {
            element: element,
            codename: codename_info.name
        };
        
        // Track tooltip visibility on element
        element.setAttribute('data-tooltip-active', 'true');
    };
    
    /**
     * Position tooltip near the target element
     * @param {HTMLElement} target - The target element to position near
     */
    const position_tooltip = (target) => {
        if (!tooltip || !target) return;
        
        // Get element position
        const rect = target.getBoundingClientRect();
        const scroll_top = window.pageYOffset || document.documentElement.scrollTop;
        const scroll_left = window.pageXOffset || document.documentElement.scrollLeft;
        
        // Position tooltip below the element
        let top = rect.bottom + scroll_top + 5;
        let left = rect.left + scroll_left;
        
        // Check if tooltip would go off-screen to the right
        const tooltip_width = tooltip.offsetWidth || 300;
        if (left + tooltip_width > window.innerWidth + scroll_left) {
            left = window.innerWidth + scroll_left - tooltip_width - 10;
        }
        
        // Apply position
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
    };
    
    /**
     * Hide the tooltip
     */
    const hide_tooltip = () => {
        if (!tooltip) return;
        
        // Hide tooltip
        tooltip.style.display = 'none';
        
        // Clear active state
        if (reveal_state.active_tooltip && reveal_state.active_tooltip.element) {
            reveal_state.active_tooltip.element.removeAttribute('data-tooltip-active');
        }
        
        reveal_state.tooltip_visible = false;
        reveal_state.active_tooltip = null;
    };
    
    /**
     * Document click handler to hide tooltip when clicking outside
     */
    const document_click_handler = (event) => {
        if (reveal_state.tooltip_visible) {
            // Check if click was inside the tooltip
            if (tooltip && !tooltip.contains(event.target)) {
                hide_tooltip();
            }
        }
    };
    
    /**
     * Show detailed information for a codename
     * @param {Object} codename_info - Codename info object
     */
    const show_codename_details = (codename_info) => {
        console.log(`reveal_details: showing details for ${codename_info.name}`);
        
        // In a real implementation, this would open the detail view
        // For now, we'll dispatch a custom event that other components can listen for
        const detail_event = new CustomEvent('codename_detail_request', {
            detail: { codename: codename_info },
            bubbles: true
        });
        
        container.dispatchEvent(detail_event);
        
        // Hide tooltip after showing details
        hide_tooltip();
    };
    
    /**
     * Remove highlighting from an element
     * @param {HTMLElement} element - Element to unhighlight
     */
    const unhighlight_element = (element) => {
        if (!element || !element.parentNode) return;
        
        // Remove event listeners
        element.removeEventListener('click', show_tooltip);
        
        // Replace with original text content
        const text = element.textContent;
        const text_node = document.createTextNode(text);
        element.parentNode.replaceChild(text_node, element);
    };
    
    /**
     * Helper function to capitalize first letter
     * @param {string} string - String to capitalize
     * @returns {string} Capitalized string
     */
    const capitalize = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    
    /**
     * Initialize the reveal component
     */
    const initialize = () => {
        console.log('reveal_initialize: initializing reveal component');
        
        // Create control panel
        control_panel = create_control_panel();
        container.appendChild(control_panel);
        
        console.log('reveal_initialize_complete: reveal component initialized');
        
        return control_panel;
    };
    
    // Public API
    return {
        initialize,
        
        // Control methods
        activate: () => {
            if (!reveal_state.active) {
                toggle_reveal();
            }
        },
        
        deactivate: () => {
            if (reveal_state.active) {
                toggle_reveal();
            }
        },
        
        // Configuration
        register_codename: (codename, info) => {
            reveal_state.codename_registry[codename] = info;
        },
        
        register_codenames: (codenames) => {
            Object.assign(reveal_state.codename_registry, codenames);
        },
        
        // State access
        is_active: () => reveal_state.active,
        
        // Force re-scan
        rescan: () => {
            if (reveal_state.active) {
                process_content_containers();
            }
        }
    };
};

export default reveal_component_create; 