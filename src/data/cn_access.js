/**
 * Codename Access Module - Data access functions and module patterns
 */
import { 
    cn_all_list, 
    cn_func_list, 
    cn_var_list, 
    cn_class_dom_list,
    cn_param_list,
    cn_const_list,
    cn_event_list,
    cn_prop_list,
    cn_file_list,
    cn_by_root_create
} from './cn_data.js';

import {
    cn_load,
    cn_save,
    root_state_load,
    root_state_save
} from './storage.js';

import {
    term_list_extract,
    term_list_compare,
    cn_type_enum
} from './cn_schema.js';

/**
 * Codename Access Module - Using revealing module pattern for encapsulation
 */
const CodenameDM = (() => {
    // Private state
    let initialized_is = false;
    let data_loaded_is = false;
    let codename_list = [];
    let root_map = {};
    let root_state = {};
    
    // Cache for frequently accessed data
    const cache = {
        by_type: {},
        by_root: {},
        search_results: {},
        filtered_results: {}
    };
    
    // Event subscribers
    const subscribers = {
        data_change: [],
        filter_change: [],
        selection_change: []
    };
    
    /**
     * Initialize the data module
     * @param {Array} initial_data - Optional initial data to use
     * @returns {boolean} Whether initialization was successful
     */
    const initialize = (initial_data = null) => {
        if (initialized_is) return true;
        
        try {
            // Load codenames from storage or use defaults
            codename_list = cn_load(initial_data || cn_all_list);
            
            // Load root expansion state
            root_state = root_state_load({});
            
            // Create root mapping
            root_map = cn_by_root_create();
            
            // Apply saved expansion state to root map
            Object.keys(root_state).forEach(root => {
                if (root_map[root]) {
                    root_map[root].expanded_is = root_state[root];
                }
            });
            
            // Clear caches
            clearCaches();
            
            initialized_is = true;
            data_loaded_is = true;
            
            // Notify subscribers
            notifySubscribers('data_change', { type: 'initialize' });
            
            return true;
        } catch (error) {
            console.error('Error initializing codename data module:', error);
            return false;
        }
    };
    
    /**
     * Clear all data caches
     */
    const clearCaches = () => {
        cache.by_type = {};
        cache.by_root = {};
        cache.search_results = {};
        cache.filtered_results = {};
    };
    
    /**
     * Get all codenames
     * @returns {Array} All codenames
     */
    const getAll = () => {
        if (!initialized_is) initialize();
        return [...codename_list];
    };
    
    /**
     * Get codenames by type
     * @param {string} type - Codename type from cn_type_enum
     * @returns {Array} Codenames of the specified type
     */
    const getByType = (type) => {
        if (!initialized_is) initialize();
        
        // Return from cache if available
        if (cache.by_type[type]) return [...cache.by_type[type]];
        
        // Filter by type and cache the result
        const result = codename_list.filter(cn => cn.type === type);
        cache.by_type[type] = result;
        
        return [...result];
    };
    
    /**
     * Get codenames organized by root term
     * @returns {Object} Map of root terms to codename arrays
     */
    const getByRoot = () => {
        if (!initialized_is) initialize();
        
        // Return cached result if available
        if (Object.keys(cache.by_root).length > 0) {
            // Make a deep copy to avoid external modifications
            return JSON.parse(JSON.stringify(cache.by_root));
        }
        
        // Use the root map created during initialization
        cache.by_root = root_map;
        
        return JSON.parse(JSON.stringify(root_map));
    };
    
    /**
     * Search codenames by text query
     * @param {string} query - Search text
     * @param {Object} [options] - Search options (case_sensitive, whole_word, etc.)
     * @returns {Array} Matching codenames
     */
    const search = (query, options = {}) => {
        if (!initialized_is) initialize();
        if (!query) return [];
        
        // Normalize query
        const normalized_query = options.case_sensitive ? query : query.toLowerCase();
        
        // Check cache first
        const cache_key = `${normalized_query}_${JSON.stringify(options)}`;
        if (cache.search_results[cache_key]) {
            return [...cache.search_results[cache_key]];
        }
        
        // Perform search
        const results = codename_list.filter(cn => {
            // Full codename text
            const cn_text = options.case_sensitive ? cn.name : cn.name.toLowerCase();
            
            // Check if codename contains query
            if (options.whole_word) {
                // Split by underscore and check for whole word match
                const terms = cn_text.split('_');
                return terms.some(term => term === normalized_query);
            } else {
                // Check for substring match
                return cn_text.includes(normalized_query);
            }
        });
        
        // Cache results
        cache.search_results[cache_key] = results;
        
        return [...results];
    };
    
    /**
     * Apply combined filtering to codenames
     * @param {Object} criteria - Filter criteria
     * @returns {Array} Filtered codenames
     */
    const filter = (criteria) => {
        if (!initialized_is) initialize();
        if (!criteria || Object.keys(criteria).length === 0) {
            return [...codename_list];
        }
        
        // Create a cache key from criteria
        const cache_key = JSON.stringify(criteria);
        if (cache.filtered_results[cache_key]) {
            return [...cache.filtered_results[cache_key]];
        }
        
        // Apply filters
        const results = codename_list.filter(cn => {
            // Filter by type if specified
            if (criteria.type && cn.type !== criteria.type) {
                return false;
            }
            
            // Filter by root if specified
            if (criteria.root && cn.root !== criteria.root) {
                return false;
            }
            
            // Filter by search text if specified
            if (criteria.search) {
                const search_text = criteria.case_sensitive ? 
                    criteria.search : criteria.search.toLowerCase();
                const cn_text = criteria.case_sensitive ? 
                    cn.name : cn.name.toLowerCase();
                
                if (!cn_text.includes(search_text)) {
                    return false;
                }
            }
            
            // Additional filters can be added here
            
            return true;
        });
        
        // Cache results
        cache.filtered_results[cache_key] = results;
        
        return [...results];
    };
    
    /**
     * Sort codenames by various criteria
     * @param {Array} codenames - Codename array to sort
     * @param {string} sort_by - Sort field (name, type, root)
     * @param {boolean} ascending - Sort direction
     * @returns {Array} Sorted codenames
     */
    const sort = (codenames, sort_by = 'name', ascending = true) => {
        if (!codenames || !Array.isArray(codenames)) return [];
        
        const sorted = [...codenames].sort((a, b) => {
            let comparison = 0;
            
            switch (sort_by) {
                case 'name':
                    comparison = a.name.localeCompare(b.name);
                    break;
                case 'type':
                    comparison = a.type.localeCompare(b.type);
                    break;
                case 'root':
                    comparison = a.root.localeCompare(b.root);
                    break;
                default:
                    comparison = a.name.localeCompare(b.name);
            }
            
            return ascending ? comparison : -comparison;
        });
        
        return sorted;
    };
    
    /**
     * Extract all unique terms from codename collections
     * @returns {Object} Map of terms to their frequency
     */
    const extractAllTerms = () => {
        if (!initialized_is) initialize();
        
        const term_frequency = {};
        
        codename_list.forEach(cn => {
            const terms = cn.name.split('_');
            
            terms.forEach(term => {
                term_frequency[term] = (term_frequency[term] || 0) + 1;
            });
        });
        
        return term_frequency;
    };
    
    /**
     * Find related terms based on co-occurrence
     * @param {string} term - The term to find relations for
     * @returns {Array} Related terms sorted by relevance
     */
    const findRelatedTerms = (term) => {
        if (!term) return [];
        if (!initialized_is) initialize();
        
        // Find all codenames containing this term
        const containing_codenames = codename_list.filter(cn => 
            cn.name.split('_').includes(term)
        );
        
        // Extract all terms from these codenames
        const term_map = {};
        
        containing_codenames.forEach(cn => {
            const terms = cn.name.split('_');
            
            terms.forEach(t => {
                if (t !== term) { // Don't include the search term itself
                    term_map[t] = (term_map[t] || 0) + 1;
                }
            });
        });
        
        // Convert to array and sort by frequency
        const related_terms = Object.keys(term_map).map(t => ({
            term: t,
            frequency: term_map[t]
        }));
        
        return related_terms.sort((a, b) => b.frequency - a.frequency);
    };
    
    /**
     * Update root group expansion state
     * @param {string} root_name - Root term
     * @param {boolean} expanded_is - Expansion state
     */
    const updateRootState = (root_name, expanded_is) => {
        if (!root_name) return;
        
        root_state[root_name] = expanded_is;
        
        // Update the root map too
        if (root_map[root_name]) {
            root_map[root_name].expanded_is = expanded_is;
        }
        
        // Persist to storage
        root_state_save(root_state);
        
        // Notify subscribers
        notifySubscribers('data_change', { 
            type: 'root_state', 
            root: root_name, 
            expanded_is 
        });
    };
    
    /**
     * Subscribe to data change events
     * @param {string} event_type - Event type to subscribe to
     * @param {Function} callback - Callback function
     * @returns {Function} Unsubscribe function
     */
    const subscribe = (event_type, callback) => {
        if (!subscribers[event_type]) {
            subscribers[event_type] = [];
        }
        
        subscribers[event_type].push(callback);
        
        // Return unsubscribe function
        return () => {
            subscribers[event_type] = subscribers[event_type]
                .filter(cb => cb !== callback);
        };
    };
    
    /**
     * Notify subscribers of an event
     * @param {string} event_type - Event type
     * @param {Object} data - Event data
     */
    const notifySubscribers = (event_type, data) => {
        if (!subscribers[event_type]) return;
        
        subscribers[event_type].forEach(callback => {
            try {
                callback(data);
            } catch (error) {
                console.error(`Error in ${event_type} subscriber:`, error);
            }
        });
    };
    
    // Public API
    return {
        initialize,
        getAll,
        getByType,
        getByRoot,
        search,
        filter,
        sort,
        extractAllTerms,
        findRelatedTerms,
        updateRootState,
        subscribe
    };
})();

// Export the module
export default CodenameDM; 