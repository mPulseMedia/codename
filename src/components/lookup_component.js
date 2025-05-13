/**
 * Codename Lookup Component - Enhanced code snippet display
 */

/**
 * Creates a lookup component for displaying code snippets
 * @param {Object} container - Container element to render lookup controls into
 * @returns {Object} Lookup controller object with public methods
 */
const lookup_component_create = (container) => {
    // Private state
    let lookup_state = {
        active_codename: null,
        snippets: [],
        active_snippet_index: 0,
        code_format: 'formatted', // 'formatted' or 'raw'
        copy_feedback_visible: false
    };
    
    // References to DOM elements
    let lookup_container = null;
    let snippet_container = null;
    let navigation_container = null;
    
    /**
     * Creates the main lookup container
     * @returns {HTMLElement} The lookup container element
     */
    const create_lookup_container = () => {
        lookup_container = document.createElement('div');
        lookup_container.className = 'lookup_container';
        
        // Create placeholder initially
        const placeholder = create_placeholder();
        lookup_container.appendChild(placeholder);
        
        return lookup_container;
    };
    
    /**
     * Creates the placeholder for empty state
     * @returns {HTMLElement} Placeholder element
     */
    const create_placeholder = () => {
        const placeholder = document.createElement('div');
        placeholder.className = 'lookup_placeholder';
        
        const icon = document.createElement('div');
        icon.className = 'placeholder_icon';
        icon.innerHTML = '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L2 22"/><path d="M22 22L2 2"/></svg>';
        
        const title = document.createElement('h3');
        title.className = 'placeholder_title';
        title.textContent = 'No Example Selected';
        
        const description = document.createElement('p');
        description.className = 'placeholder_description';
        description.textContent = 'Select a codename from the list to view examples.';
        
        placeholder.appendChild(icon);
        placeholder.appendChild(title);
        placeholder.appendChild(description);
        
        return placeholder;
    };
    
    /**
     * Creates the header for the lookup view
     * @param {Object} codename - The codename object being displayed
     * @returns {HTMLElement} The header element
     */
    const create_lookup_header = (codename) => {
        const header = document.createElement('div');
        header.className = 'lookup_header';
        
        // Create title with codename
        const title = document.createElement('h2');
        title.className = 'lookup_title';
        title.textContent = codename.name;
        
        // Create type badge
        const type_badge = document.createElement('span');
        type_badge.className = `type_badge type_${codename.type}`;
        type_badge.textContent = codename.type;
        
        // Create actions container
        const actions = document.createElement('div');
        actions.className = 'lookup_actions';
        
        // Create copy button
        const copy_button = document.createElement('button');
        copy_button.className = 'lookup_button lookup_copy';
        copy_button.innerHTML = '<span class="button_icon">📋</span><span class="button_text">Copy</span>';
        copy_button.setAttribute('aria-label', 'Copy code to clipboard');
        copy_button.addEventListener('click', () => {
            copy_to_clipboard();
        });
        
        // Create format toggle button
        const format_button = document.createElement('button');
        format_button.className = 'lookup_button lookup_format';
        format_button.innerHTML = '<span class="button_icon">🔄</span><span class="button_text">Toggle Format</span>';
        format_button.setAttribute('aria-label', 'Toggle code format');
        format_button.addEventListener('click', () => {
            toggle_format();
        });
        
        // Create close button
        const close_button = document.createElement('button');
        close_button.className = 'lookup_button lookup_close';
        close_button.innerHTML = '<span class="button_icon">✕</span><span class="button_text">Close</span>';
        close_button.setAttribute('aria-label', 'Close lookup view');
        close_button.addEventListener('click', () => {
            clear_lookup();
        });
        
        // Add buttons to actions
        actions.appendChild(copy_button);
        
        // Only show format toggle if there are snippets
        if (lookup_state.snippets.length > 0) {
            actions.appendChild(format_button);
        }
        
        actions.appendChild(close_button);
        
        // Add title and actions to header
        header.appendChild(title);
        header.appendChild(type_badge);
        header.appendChild(actions);
        
        return header;
    };
    
    /**
     * Creates the description section for the lookup view
     * @param {Object} codename - The codename object being displayed
     * @returns {HTMLElement} The description element
     */
    const create_description_section = (codename) => {
        const description = document.createElement('div');
        description.className = 'lookup_description';
        
        const desc_text = document.createElement('p');
        desc_text.textContent = codename.description;
        description.appendChild(desc_text);
        
        return description;
    };
    
    /**
     * Creates the snippet navigation controls
     * @returns {HTMLElement} The navigation element
     */
    const create_snippet_navigation = () => {
        // If there's only one snippet, don't show navigation
        if (lookup_state.snippets.length <= 1) {
            return null;
        }
        
        navigation_container = document.createElement('div');
        navigation_container.className = 'snippet_navigation';
        
        // Add counter
        const counter = document.createElement('span');
        counter.className = 'snippet_counter';
        counter.textContent = `Example ${lookup_state.active_snippet_index + 1} of ${lookup_state.snippets.length}`;
        
        // Add previous button if not on first snippet
        const prev_button = document.createElement('button');
        prev_button.className = 'snippet_nav_button snippet_prev';
        prev_button.textContent = '← Previous';
        prev_button.disabled = lookup_state.active_snippet_index === 0;
        prev_button.addEventListener('click', () => {
            if (lookup_state.active_snippet_index > 0) {
                lookup_state.active_snippet_index--;
                update_snippet_display();
            }
        });
        
        // Add next button if not on last snippet
        const next_button = document.createElement('button');
        next_button.className = 'snippet_nav_button snippet_next';
        next_button.textContent = 'Next →';
        next_button.disabled = lookup_state.active_snippet_index >= lookup_state.snippets.length - 1;
        next_button.addEventListener('click', () => {
            if (lookup_state.active_snippet_index < lookup_state.snippets.length - 1) {
                lookup_state.active_snippet_index++;
                update_snippet_display();
            }
        });
        
        navigation_container.appendChild(prev_button);
        navigation_container.appendChild(counter);
        navigation_container.appendChild(next_button);
        
        return navigation_container;
    };
    
    /**
     * Creates the snippet display container
     * @returns {HTMLElement} The snippet container element
     */
    const create_snippet_container = () => {
        snippet_container = document.createElement('div');
        snippet_container.className = 'snippet_container';
        
        // Get current snippet
        const snippet = lookup_state.snippets[lookup_state.active_snippet_index];
        
        if (!snippet) {
            // No snippet available
            const empty = document.createElement('div');
            empty.className = 'snippet_empty';
            empty.innerHTML = '<p>No code examples available for this codename.</p>';
            snippet_container.appendChild(empty);
            return snippet_container;
        }
        
        // Add snippet title if available
        if (snippet.description) {
            const title = document.createElement('div');
            title.className = 'snippet_title';
            title.textContent = snippet.description;
            snippet_container.appendChild(title);
        }
        
        // Create code display
        const code_display = document.createElement('div');
        code_display.className = 'snippet_display';
        
        // Language indicator
        const language = document.createElement('div');
        language.className = 'snippet_language';
        language.textContent = snippet.language || 'text';
        
        // Code content
        const code = document.createElement('pre');
        const code_element = document.createElement('code');
        code_element.className = `language-${snippet.language || 'text'}`;
        
        // Format code based on preference
        if (lookup_state.code_format === 'formatted') {
            code_element.innerHTML = format_code(snippet.code, snippet.language);
        } else {
            code_element.textContent = snippet.code;
        }
        
        code.appendChild(code_element);
        
        code_display.appendChild(language);
        code_display.appendChild(code);
        snippet_container.appendChild(code_display);
        
        return snippet_container;
    };
    
    /**
     * Formats code for syntax highlighting
     * @param {string} code - The code to format
     * @param {string} language - The language of the code
     * @returns {string} Formatted HTML
     */
    const format_code = (code, language) => {
        // Simple HTML escape for code
        const escaped = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        
        // In a real implementation, we would use a syntax highlighter here
        // For now, we'll just return the escaped code
        return escaped;
    };
    
    /**
     * Updates the snippet display with the current snippet
     */
    const update_snippet_display = () => {
        if (!lookup_container) return;
        
        // Update navigation if it exists
        if (navigation_container) {
            const counter = navigation_container.querySelector('.snippet_counter');
            if (counter) {
                counter.textContent = `Example ${lookup_state.active_snippet_index + 1} of ${lookup_state.snippets.length}`;
            }
            
            const prev_button = navigation_container.querySelector('.snippet_prev');
            if (prev_button) {
                prev_button.disabled = lookup_state.active_snippet_index === 0;
            }
            
            const next_button = navigation_container.querySelector('.snippet_next');
            if (next_button) {
                next_button.disabled = lookup_state.active_snippet_index >= lookup_state.snippets.length - 1;
            }
        }
        
        // Replace snippet container
        if (snippet_container) {
            const new_snippet_container = create_snippet_container();
            snippet_container.replaceWith(new_snippet_container);
            snippet_container = new_snippet_container;
        }
    };
    
    /**
     * Toggles the code format between formatted and raw
     */
    const toggle_format = () => {
        lookup_state.code_format = lookup_state.code_format === 'formatted' ? 'raw' : 'formatted';
        update_snippet_display();
    };
    
    /**
     * Copies the current snippet code to clipboard
     */
    const copy_to_clipboard = () => {
        const snippet = lookup_state.snippets[lookup_state.active_snippet_index];
        if (!snippet) return;
        
        try {
            navigator.clipboard.writeText(snippet.code).then(() => {
                show_copy_feedback();
            }).catch(err => {
                console.error('copy_error: failed to copy to clipboard', err);
            });
        } catch (e) {
            // Fallback for browsers without clipboard API
            const textarea = document.createElement('textarea');
            textarea.value = snippet.code;
            textarea.style.position = 'fixed';
            textarea.style.opacity = 0;
            document.body.appendChild(textarea);
            textarea.select();
            
            try {
                document.execCommand('copy');
                show_copy_feedback();
            } catch (e) {
                console.error('copy_error: failed to copy to clipboard', e);
            }
            
            document.body.removeChild(textarea);
        }
    };
    
    /**
     * Shows feedback when code is copied
     */
    const show_copy_feedback = () => {
        if (lookup_state.copy_feedback_visible) return;
        
        const feedback = document.createElement('div');
        feedback.className = 'copy_feedback';
        feedback.textContent = 'Copied to clipboard!';
        document.body.appendChild(feedback);
        
        // Show with animation
        setTimeout(() => {
            feedback.classList.add('copy_feedback_visible');
        }, 10);
        
        lookup_state.copy_feedback_visible = true;
        
        // Remove after delay
        setTimeout(() => {
            feedback.classList.remove('copy_feedback_visible');
            
            // Remove from DOM after fade out
            setTimeout(() => {
                document.body.removeChild(feedback);
                lookup_state.copy_feedback_visible = false;
            }, 300);
        }, 2000);
    };
    
    /**
     * Displays a codename and its code examples
     * @param {Object} codename - The codename to display
     * @param {Array} snippets - Array of code snippets
     */
    const show_lookup = (codename, snippets = []) => {
        if (!lookup_container) return;
        
        // Update state
        lookup_state.active_codename = codename;
        lookup_state.snippets = snippets || [];
        lookup_state.active_snippet_index = 0;
        
        // Clear container
        lookup_container.innerHTML = '';
        
        // Create header
        const header = create_lookup_header(codename);
        lookup_container.appendChild(header);
        
        // Create description
        const description = create_description_section(codename);
        lookup_container.appendChild(description);
        
        // Create snippet navigation if multiple snippets
        const navigation = create_snippet_navigation();
        if (navigation) {
            lookup_container.appendChild(navigation);
        }
        
        // Create snippet display
        snippet_container = create_snippet_container();
        lookup_container.appendChild(snippet_container);
    };
    
    /**
     * Clears the lookup view and shows placeholder
     */
    const clear_lookup = () => {
        if (!lookup_container) return;
        
        // Reset state
        lookup_state.active_codename = null;
        lookup_state.snippets = [];
        lookup_state.active_snippet_index = 0;
        
        // Clear container
        lookup_container.innerHTML = '';
        
        // Add placeholder
        const placeholder = create_placeholder();
        lookup_container.appendChild(placeholder);
    };
    
    /**
     * Initializes the lookup component
     */
    const initialize = () => {
        console.log('lookup_initialize: initializing lookup component');
        
        // Create lookup container
        const lookup = create_lookup_container();
        container.appendChild(lookup);
        
        console.log('lookup_initialize_complete: lookup component initialized');
        
        return lookup;
    };
    
    // Public API
    return {
        initialize,
        show_lookup,
        clear_lookup,
        
        // Get current state
        get_active_codename: () => lookup_state.active_codename,
        
        // Snippet navigation
        next_snippet: () => {
            if (lookup_state.active_snippet_index < lookup_state.snippets.length - 1) {
                lookup_state.active_snippet_index++;
                update_snippet_display();
                return true;
            }
            return false;
        },
        
        previous_snippet: () => {
            if (lookup_state.active_snippet_index > 0) {
                lookup_state.active_snippet_index--;
                update_snippet_display();
                return true;
            }
            return false;
        },
        
        // Format control
        toggle_format
    };
};

export default lookup_component_create; 