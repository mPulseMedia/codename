/**
 * Codename Schema - Core data structures for codename management
 */

// CN Type Enumeration - Define types of codenames for categorization
const cn_type_enum = {
    FUNCTION: 'function',
    VARIABLE: 'variable',
    CLASS: 'class',
    PARAMETER: 'parameter',
    CONSTANT: 'constant',
    EVENT: 'event',
    PROPERTY: 'property',
    FILE: 'file'
};

/**
 * Base codename object structure
 * @param {string} name - The full codename (e.g., "element_create")
 * @param {string} type - The type from cn_type_enum
 * @param {string} description - Brief description of the codename's purpose
 * @param {string[]} [example] - Optional usage examples
 */
const cn_object_create = (name, type, description, example = []) => {
    return {
        name,
        type,
        description,
        example,
        term_list: term_list_extract(name),
        root: root_extract(name)
    };
};

/**
 * Term object structure for component parts of a codename
 * @param {string} text - The term text
 * @param {number} position - Position in the codename (0-based index)
 * @param {string} [type] - Optional type for styling 
 */
const term_object_create = (text, position, type = null) => {
    return {
        text,
        position,
        type,
        // Generate styling based on position or term type
        style: term_style_get(text, position, type)
    };
};

/**
 * Root group object structure for organizing codenames 
 * @param {string} name - Root term name (e.g., "element", "dom", "util")
 * @param {boolean} expanded_is - Whether the group is expanded by default
 */
const root_group_object_create = (name, expanded_is = false) => {
    return {
        name,
        expanded_is,
        codename_list: [], // Will contain all codenames with this root
        description: '', // Can be populated with group description
        related_root_list: [] // Related conceptual roots
    };
};

/**
 * Snippet object for storing code examples
 * @param {string} code - The actual code snippet
 * @param {string} language - Language for syntax highlighting
 * @param {string} [description] - Optional description of what the snippet demonstrates
 */
const snippet_object_create = (code, language, description = '') => {
    return {
        code,
        language,
        description,
        timestamp: Date.now()
    };
};

/**
 * Extract the root term from a codename (first part before underscore)
 * @param {string} codename - Full codename to extract root from
 * @returns {string} Root term
 */
const root_extract = (codename) => {
    if (!codename || typeof codename !== 'string') return '';
    
    const first_underscore = codename.indexOf('_');
    if (first_underscore === -1) return codename;
    
    return codename.substring(0, first_underscore);
};

/**
 * Extract term list from a codename (parts separated by underscore)
 * @param {string} codename - Full codename to split into terms
 * @returns {Array} Array of term objects
 */
const term_list_extract = (codename) => {
    if (!codename || typeof codename !== 'string') return [];
    
    const term_text_list = codename.split('_');
    
    return term_text_list.map((text, position) => 
        term_object_create(text, position));
};

/**
 * Get styling information for a term based on position and type
 * @param {string} text - Term text
 * @param {number} position - Position in the codename
 * @param {string} type - Term type if applicable
 * @returns {Object} Styling information
 */
const term_style_get = (text, position, type) => {
    // Default styling
    const style = {
        color: '#ffffff',
        weight: 'normal',
        opacity: 1
    };
    
    // Apply styles based on position
    if (position === 0) {
        // Root terms
        style.weight = 'bold';
        style.color = '#64b5f6'; // Light blue for root terms
    } else if (position === 1) {
        // Secondary terms
        style.color = '#81c784'; // Light green for secondary terms
    }
    
    // Override with type-specific styling if provided
    if (type) {
        switch(type) {
            case 'verb':
                style.color = '#ffb74d'; // Orange for verb terms
                style.weight = 'bold';
                break;
            case 'noun':
                style.color = '#9575cd'; // Purple for noun terms
                break;
            // Add more term type styling as needed
        }
    }
    
    return style;
};

/**
 * Compare two term arrays for similarity analysis
 * @param {Array} term_list_a - First term list
 * @param {Array} term_list_b - Second term list
 * @returns {Object} Similarity metrics
 */
const term_list_compare = (term_list_a, term_list_b) => {
    if (!Array.isArray(term_list_a) || !Array.isArray(term_list_b)) {
        return { match_count: 0, match_ratio: 0, same_root_is: false };
    }
    
    // Extract just the term text for comparison
    const text_list_a = term_list_a.map(term => term.text);
    const text_list_b = term_list_b.map(term => term.text);
    
    // Count matching terms
    const match_count = text_list_a.filter(text => text_list_b.includes(text)).length;
    
    // Calculate match ratio
    const total_terms = new Set([...text_list_a, ...text_list_b]).size;
    const match_ratio = total_terms > 0 ? match_count / total_terms : 0;
    
    // Check if roots match
    const same_root_is = text_list_a[0] === text_list_b[0];
    
    return {
        match_count,
        match_ratio,
        same_root_is
    };
};

// Export all schema-related functions and constants
export {
    cn_type_enum,
    cn_object_create,
    term_object_create,
    root_group_object_create,
    snippet_object_create,
    root_extract,
    term_list_extract,
    term_style_get,
    term_list_compare
}; 