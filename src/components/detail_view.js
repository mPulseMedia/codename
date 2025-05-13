/**
 * Codename Detail View - Component for displaying detailed information about a selected codename
 */

/**
 * 6b0_detail_layout - Creates layout structure for codename detail display
 * @param {Object} container - Container element to render detail view into
 * @returns {Object} Detail view controller object with public methods
 */
const detail_view_create = (container) => {
    // Private state
    let current_codename = null;
    let detail_container = null;
    
    /**
     * Creates the main container for the detail view
     * @returns {HTMLElement} The detail container element
     */
    const create_detail_container = () => {
        const container = document.createElement('div');
        container.className = 'detail_container';
        return container;
    };
    
    /**
     * Creates the header section with codename and actions
     * @param {Object} codename - Codename object to display
     * @returns {HTMLElement} The header element
     */
    const create_detail_header = (codename) => {
        const header = document.createElement('div');
        header.className = 'detail_header';
        
        // Create title with codename name
        const title = document.createElement('h2');
        title.className = 'detail_title';
        title.textContent = codename.name;
        
        // Create type badge
        const type_badge = document.createElement('span');
        type_badge.className = `detail_type detail_type_${codename.type}`;
        type_badge.textContent = codename.type;
        
        // Create action buttons container
        const actions = document.createElement('div');
        actions.className = 'detail_actions';
        
        // Add copy button
        const copy_button = document.createElement('button');
        copy_button.className = 'detail_button detail_button_copy';
        copy_button.textContent = 'Copy';
        copy_button.addEventListener('click', () => {
            copy_to_clipboard(codename.name);
            console.log(`detail_copy: copied ${codename.name} to clipboard`);
        });
        
        // Add reference button
        const ref_button = document.createElement('button');
        ref_button.className = 'detail_button detail_button_reference';
        ref_button.textContent = 'Reference';
        ref_button.addEventListener('click', () => {
            generate_reference(codename);
            console.log(`detail_reference: generated reference for ${codename.name}`);
        });
        
        // Assemble header
        header.appendChild(title);
        header.appendChild(type_badge);
        actions.appendChild(copy_button);
        actions.appendChild(ref_button);
        header.appendChild(actions);
        
        return header;
    };
    
    /**
     * 6b1_term_breakdown - Creates visual breakdown of codename terms
     * @param {Object} codename - Codename object to break down
     * @returns {HTMLElement} Term breakdown element
     */
    const create_term_breakdown = (codename) => {
        const breakdown = document.createElement('div');
        breakdown.className = 'detail_terms';
        
        // Add section title
        const section_title = document.createElement('h3');
        section_title.className = 'detail_section_title';
        section_title.textContent = 'Term Breakdown';
        breakdown.appendChild(section_title);
        
        // Split codename into terms
        const terms = extract_terms(codename.name);
        
        // Create term list
        const term_list = document.createElement('div');
        term_list.className = 'term_breakdown_list';
        
        terms.forEach((term, index) => {
            const term_item = document.createElement('div');
            term_item.className = `term_item ${index === 0 ? 'term_item_root' : ''}`;
            
            // Term name
            const term_name = document.createElement('div');
            term_name.className = 'term_name';
            term_name.textContent = term.text;
            
            // Term position
            const term_position = document.createElement('div');
            term_position.className = 'term_position';
            term_position.textContent = index === 0 ? 'Root' : `Position ${index}`;
            
            // Term meaning (if available)
            const term_meaning = document.createElement('div');
            term_meaning.className = 'term_meaning';
            term_meaning.textContent = get_term_meaning(term.text, index) || 'No definition available';
            
            term_item.appendChild(term_name);
            term_item.appendChild(term_position);
            term_item.appendChild(term_meaning);
            term_list.appendChild(term_item);
        });
        
        breakdown.appendChild(term_list);
        return breakdown;
    };
    
    /**
     * 6b2_usage_examples - Creates examples section with code snippets
     * @param {Object} codename - Codename object to show examples for
     * @returns {HTMLElement} Examples section element
     */
    const create_usage_examples = (codename) => {
        const examples = document.createElement('div');
        examples.className = 'detail_examples';
        
        // Add section title
        const section_title = document.createElement('h3');
        section_title.className = 'detail_section_title';
        section_title.textContent = 'Usage Examples';
        examples.appendChild(section_title);
        
        // Get examples for this codename
        const code_examples = get_codename_examples(codename.name);
        
        if (code_examples && code_examples.length > 0) {
            // Create tabs if multiple examples
            if (code_examples.length > 1) {
                const tabs = document.createElement('div');
                tabs.className = 'example_tabs';
                
                code_examples.forEach((example, index) => {
                    const tab = document.createElement('button');
                    tab.className = `example_tab ${index === 0 ? 'example_tab_active' : ''}`;
                    tab.textContent = example.description || `Example ${index + 1}`;
                    tab.dataset.index = index;
                    
                    tab.addEventListener('click', (e) => {
                        // Update active tab
                        document.querySelectorAll('.example_tab').forEach(t => {
                            t.classList.remove('example_tab_active');
                        });
                        e.target.classList.add('example_tab_active');
                        
                        // Show corresponding example
                        document.querySelectorAll('.example_content').forEach(c => {
                            c.classList.remove('example_content_active');
                        });
                        document.querySelector(`.example_content[data-index="${index}"]`).classList.add('example_content_active');
                    });
                    
                    tabs.appendChild(tab);
                });
                
                examples.appendChild(tabs);
            }
            
            // Create content panels for each example
            const content_container = document.createElement('div');
            content_container.className = 'example_contents';
            
            code_examples.forEach((example, index) => {
                const content = document.createElement('div');
                content.className = `example_content ${index === 0 ? 'example_content_active' : ''}`;
                content.dataset.index = index;
                
                // Example context/description if available
                if (example.description) {
                    const context = document.createElement('div');
                    context.className = 'example_context';
                    context.textContent = example.description;
                    content.appendChild(context);
                }
                
                // Code example
                const code = document.createElement('pre');
                code.className = `example_code language-${example.language || 'javascript'}`;
                code.textContent = example.code;
                
                // Add copy button for code
                const copy_code = document.createElement('button');
                copy_code.className = 'example_copy';
                copy_code.textContent = 'Copy';
                copy_code.addEventListener('click', () => {
                    copy_to_clipboard(example.code);
                    copy_code.textContent = 'Copied!';
                    setTimeout(() => {
                        copy_code.textContent = 'Copy';
                    }, 2000);
                });
                
                content.appendChild(code);
                content.appendChild(copy_code);
                content_container.appendChild(content);
            });
            
            examples.appendChild(content_container);
        } else {
            // No examples available
            const empty = document.createElement('div');
            empty.className = 'example_empty';
            empty.textContent = 'No examples available for this codename.';
            examples.appendChild(empty);
        }
        
        return examples;
    };
    
    /**
     * 6b3_codename_metadata - Creates metadata section with additional information
     * @param {Object} codename - Codename object to show metadata for
     * @returns {HTMLElement} Metadata section element
     */
    const create_codename_metadata = (codename) => {
        const metadata = document.createElement('div');
        metadata.className = 'detail_metadata';
        
        // Add section title
        const section_title = document.createElement('h3');
        section_title.className = 'detail_section_title';
        section_title.textContent = 'Metadata';
        metadata.appendChild(section_title);
        
        // Create metadata table
        const table = document.createElement('table');
        table.className = 'metadata_table';
        
        // Add type row
        const type_row = document.createElement('tr');
        const type_label = document.createElement('td');
        type_label.className = 'metadata_label';
        type_label.textContent = 'Type';
        const type_value = document.createElement('td');
        type_value.className = 'metadata_value';
        type_value.textContent = codename.type;
        type_row.appendChild(type_label);
        type_row.appendChild(type_value);
        table.appendChild(type_row);
        
        // Add usage frequency if available
        if (codename.frequency) {
            const freq_row = document.createElement('tr');
            const freq_label = document.createElement('td');
            freq_label.className = 'metadata_label';
            freq_label.textContent = 'Usage Frequency';
            const freq_value = document.createElement('td');
            freq_value.className = 'metadata_value';
            freq_value.textContent = codename.frequency;
            freq_row.appendChild(freq_label);
            freq_row.appendChild(freq_value);
            table.appendChild(freq_row);
        }
        
        // Add description if available
        if (codename.description) {
            const desc_row = document.createElement('tr');
            const desc_label = document.createElement('td');
            desc_label.className = 'metadata_label';
            desc_label.textContent = 'Description';
            const desc_value = document.createElement('td');
            desc_value.className = 'metadata_value';
            desc_value.textContent = codename.description;
            desc_row.appendChild(desc_label);
            desc_row.appendChild(desc_value);
            table.appendChild(desc_row);
        }
        
        // Add convention rules reference
        const rule_row = document.createElement('tr');
        const rule_label = document.createElement('td');
        rule_label.className = 'metadata_label';
        rule_label.textContent = 'Convention Rules';
        const rule_value = document.createElement('td');
        rule_value.className = 'metadata_value';
        
        // Get relevant rules for this codename
        const rules = get_relevant_rules(codename);
        if (rules && rules.length > 0) {
            const rule_list = document.createElement('ul');
            rule_list.className = 'rule_list';
            
            rules.forEach(rule => {
                const rule_item = document.createElement('li');
                rule_item.textContent = rule;
                rule_list.appendChild(rule_item);
            });
            
            rule_value.appendChild(rule_list);
        } else {
            rule_value.textContent = 'No specific rules';
        }
        
        rule_row.appendChild(rule_label);
        rule_row.appendChild(rule_value);
        table.appendChild(rule_row);
        
        // Related codenames based on shared terms
        const related_row = document.createElement('tr');
        const related_label = document.createElement('td');
        related_label.className = 'metadata_label';
        related_label.textContent = 'Related Codenames';
        const related_value = document.createElement('td');
        related_value.className = 'metadata_value';
        
        // Get related codenames
        const related = get_related_codenames(codename);
        if (related && related.length > 0) {
            const related_list = document.createElement('ul');
            related_list.className = 'related_list';
            
            related.forEach(rel => {
                const rel_item = document.createElement('li');
                
                // Make related items clickable
                const rel_link = document.createElement('a');
                rel_link.className = 'related_link';
                rel_link.textContent = rel.name;
                rel_link.href = '#';
                rel_link.addEventListener('click', (e) => {
                    e.preventDefault();
                    display_detail(rel);
                });
                
                rel_item.appendChild(rel_link);
                related_list.appendChild(rel_item);
            });
            
            related_value.appendChild(related_list);
        } else {
            related_value.textContent = 'No related codenames';
        }
        
        related_row.appendChild(related_label);
        related_row.appendChild(related_value);
        table.appendChild(related_row);
        
        metadata.appendChild(table);
        return metadata;
    };
    
    /**
     * 6b4_action_buttons - Creates action buttons for codename management
     * @returns {HTMLElement} Action buttons container
     */
    const create_action_buttons = () => {
        const actions = document.createElement('div');
        actions.className = 'detail_action_buttons';
        
        // Copy button
        const copy_button = document.createElement('button');
        copy_button.className = 'action_button action_copy';
        copy_button.textContent = 'Copy Codename';
        copy_button.addEventListener('click', () => {
            if (!current_codename) return;
            copy_to_clipboard(current_codename.name);
            console.log(`detail_copy: copied ${current_codename.name} to clipboard`);
            
            // Show feedback
            copy_button.textContent = 'Copied!';
            setTimeout(() => {
                copy_button.textContent = 'Copy Codename';
            }, 2000);
        });
        
        // Reference button
        const ref_button = document.createElement('button');
        ref_button.className = 'action_button action_reference';
        ref_button.textContent = 'Generate Reference';
        ref_button.addEventListener('click', () => {
            if (!current_codename) return;
            generate_reference(current_codename);
            console.log(`detail_reference: generated reference for ${current_codename.name}`);
        });
        
        // Example add button
        const example_button = document.createElement('button');
        example_button.className = 'action_button action_example';
        example_button.textContent = 'Add Example';
        example_button.addEventListener('click', () => {
            if (!current_codename) return;
            console.log(`detail_example_add: adding example for ${current_codename.name}`);
            // In a real implementation, would show a form for adding examples
        });
        
        // Feedback button
        const feedback_button = document.createElement('button');
        feedback_button.className = 'action_button action_feedback';
        feedback_button.textContent = 'Provide Feedback';
        feedback_button.addEventListener('click', () => {
            if (!current_codename) return;
            console.log(`detail_feedback: providing feedback on ${current_codename.name}`);
            // In a real implementation, would show a feedback form
        });
        
        // Add buttons to container
        actions.appendChild(copy_button);
        actions.appendChild(ref_button);
        actions.appendChild(example_button);
        actions.appendChild(feedback_button);
        
        return actions;
    };
    
    /**
     * Helper function to copy text to clipboard
     * @param {string} text - Text to copy
     */
    const copy_to_clipboard = (text) => {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        
        // Select and copy the text
        textarea.select();
        document.execCommand('copy');
        
        // Clean up
        document.body.removeChild(textarea);
    };
    
    /**
     * Generate reference link for a codename
     * @param {Object} codename - Codename to reference
     */
    const generate_reference = (codename) => {
        // In a real implementation, would generate a reference link
        // or provide a formatted reference for documentation
        console.log(`Generating reference for: ${codename.name}`);
        
        // Example implementation: show an alert with reference format
        const reference = `\`${codename.name}\` (${codename.type}) - ${codename.description || 'No description available'}`;
        alert(`Reference copied to clipboard:\n\n${reference}`);
        
        // Copy reference to clipboard
        copy_to_clipboard(reference);
    };
    
    /**
     * Extract terms from a codename string
     * @param {string} codename - Codename string to extract terms from
     * @returns {Array} Array of term objects
     */
    const extract_terms = (codename) => {
        if (!codename) return [];
        
        const parts = codename.split('_');
        return parts.map((text, index) => ({
            text,
            position: index,
            type: index === 0 ? 'root' : null
        }));
    };
    
    /**
     * Get meaning for a term based on known terminology
     * @param {string} term - Term to look up
     * @param {number} position - Position in the codename
     * @returns {string|null} Term meaning or null if not found
     */
    const get_term_meaning = (term, position) => {
        // This would typically come from a terminology database
        // Here we're providing some sample meanings for common terms
        
        const meanings = {
            // Common roots
            'app': 'Application-level functionality',
            'data': 'Data operations and management',
            'element': 'DOM element operations',
            'event': 'Event handling and dispatching',
            'filter': 'Filtering operations',
            'user': 'User-related functionality',
            'ui': 'User interface components',
            'util': 'Utility functions',
            
            // Common verbs
            'create': 'Creates a new instance of something',
            'update': 'Updates an existing entity',
            'delete': 'Removes or destroys something',
            'get': 'Retrieves data or information',
            'set': 'Sets or changes a value',
            'add': 'Adds something to a collection',
            'remove': 'Removes something from a collection',
            'load': 'Loads data from a source',
            'save': 'Persists data to storage',
            'toggle': 'Switches between two states',
            
            // Common modifiers
            'list': 'Collection of items',
            'is': 'Boolean state indicator'
        };
        
        return meanings[term] || null;
    };
    
    /**
     * Get code examples for a codename
     * @param {string} name - Codename to get examples for
     * @returns {Array} Array of example objects
     */
    const get_codename_examples = (name) => {
        // In a real implementation, this would come from a data source
        // Here we're providing sample examples for demonstration
        
        const examples = {
            'element_create': [
                {
                    code: `const button = element_create('button', {
    class: 'button button_primary',
    text: 'Click Me',
    onclick: handleClick
});

document.body.appendChild(button);`,
                    language: 'javascript',
                    description: 'Creating a button element'
                }
            ],
            'data_save': [
                {
                    code: `// Save user settings to localStorage
data_save('user_settings', {
    theme: 'dark',
    fontSize: 16,
    notifications_is: true
});`,
                    language: 'javascript',
                    description: 'Saving user settings'
                }
            ],
            'filter_apply': [
                {
                    code: `// Apply the current filter settings to the codename list
filter_apply();

// With specific parameters
filter_apply({
    type: 'function',
    search: 'element',
    root_only: false
});`,
                    language: 'javascript',
                    description: 'Applying filters to codename list'
                }
            ]
        };
        
        return examples[name] || [];
    };
    
    /**
     * Get relevant convention rules for a codename
     * @param {Object} codename - Codename to get rules for
     * @returns {Array} Array of rule strings
     */
    const get_relevant_rules = (codename) => {
        // In a real implementation, this would come from a rules database
        // Here we're providing some sample rules based on type
        
        const rules = {
            'function': [
                'Use verb_noun format (e.g., element_create)',
                'Avoid abbreviations unless very common',
                'Use present tense verbs (create, not creating)'
            ],
            'variable': [
                'Use descriptive nouns or adjective_noun',
                'End booleans with _is suffix (visible_is)',
                'Use singular forms, not plural'
            ],
            'class': [
                'Use noun or adjective_noun format',
                'Apply same snake_case convention',
                'Be specific about purpose or behavior'
            ],
            'parameter': [
                'Follow same conventions as variables',
                'Be descriptive of expected inputs',
                'Consider validation requirements'
            ]
        };
        
        return rules[codename.type] || [];
    };
    
    /**
     * Get related codenames based on shared terms
     * @param {Object} codename - Codename to find related terms for
     * @returns {Array} Array of related codename objects
     */
    const get_related_codenames = (codename) => {
        // In a real implementation, this would search the codename database
        // Here we're providing some sample related codenames
        
        // Extract the root term
        const root = codename.name.split('_')[0];
        
        // Sample codenames with the same root
        const sample_related = {
            'element': [
                { name: 'element_append', type: 'function', description: 'Append child elements to a parent' },
                { name: 'element_remove', type: 'function', description: 'Remove an element from the DOM' },
                { name: 'element_configure', type: 'function', description: 'Configure element attributes and properties' }
            ],
            'data': [
                { name: 'data_fetch', type: 'function', description: 'Fetch data from a source' },
                { name: 'data_save', type: 'function', description: 'Save data to storage' },
                { name: 'data_format', type: 'function', description: 'Format data for display or transmission' }
            ],
            'filter': [
                { name: 'filter_apply', type: 'function', description: 'Apply filters to a dataset' },
                { name: 'filter_reset', type: 'function', description: 'Reset all filters to default state' },
                { name: 'filter_toggle', type: 'function', description: 'Toggle a specific filter on/off' }
            ]
        };
        
        // Return related codenames if we have any for this root
        return (sample_related[root] || []).filter(rel => rel.name !== codename.name);
    };
    
    /**
     * Display detail view for a codename
     * @param {Object} codename - Codename to display details for
     */
    const display_detail = (codename) => {
        console.log(`detail_display: showing details for ${codename.name}`);
        
        // Store current codename
        current_codename = codename;
        
        // Clear container
        detail_container.innerHTML = '';
        
        // Create and add header
        const header = create_detail_header(codename);
        detail_container.appendChild(header);
        
        // Create and add term breakdown
        const terms = create_term_breakdown(codename);
        detail_container.appendChild(terms);
        
        // Create and add usage examples
        const examples = create_usage_examples(codename);
        detail_container.appendChild(examples);
        
        // Create and add metadata section
        const metadata = create_codename_metadata(codename);
        detail_container.appendChild(metadata);
        
        // Create and add action buttons
        const actions = create_action_buttons();
        detail_container.appendChild(actions);
        
        // Emit event for detail display
        const event = new CustomEvent('detail_display', {
            detail: { codename }
        });
        container.dispatchEvent(event);
    };
    
    /**
     * Initialize the detail view
     */
    const initialize = () => {
        // Create detail container if it doesn't exist
        if (!detail_container) {
            detail_container = create_detail_container();
            container.appendChild(detail_container);
        }
        
        console.log('detail_initialize: detail view initialized');
    };
    
    // Public API
    return {
        initialize,
        display_detail,
        
        // Event subscription
        on_display: (callback) => {
            container.addEventListener('detail_display', (e) => {
                callback(e.detail.codename);
            });
        },
        
        // Get container element
        get_container: () => container
    };
};

export default detail_view_create; 