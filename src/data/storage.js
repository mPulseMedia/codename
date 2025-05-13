/**
 * Storage Utilities - Persistence layer for codename application
 */

// Storage key constants for consistent access
const storage_keys = {
    CN_DATA: 'codename_data',
    FILTER_STATE: 'filter_state',
    SEARCH_HISTORY: 'search_history',
    ROOT_STATE: 'root_state',
    SNIPPET_CACHE: 'snippet_cache',
    THEME_PREFERENCE: 'theme_preference',
    DATA_VERSION: 'data_version'
};

// Current data version for schema migration
const current_version = '1.0.0';

/**
 * Check if localStorage is available in the current environment
 * @returns {boolean} Whether localStorage is available
 */
const storage_available_is = () => {
    try {
        const test_key = '__storage_test__';
        localStorage.setItem(test_key, test_key);
        localStorage.removeItem(test_key);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Serialize data to JSON for storage
 * @param {*} data - Data to serialize
 * @returns {string} JSON string
 */
const storage_serialize = (data) => {
    try {
        return JSON.stringify(data);
    } catch (error) {
        console.error('Error serializing data:', error);
        return '';
    }
};

/**
 * Deserialize JSON data from storage
 * @param {string} json_str - JSON string to deserialize
 * @param {*} fallback - Default value if parsing fails
 * @returns {*} Parsed data or fallback
 */
const storage_deserialize = (json_str, fallback = null) => {
    if (!json_str) return fallback;
    
    try {
        return JSON.parse(json_str);
    } catch (error) {
        console.error('Error deserializing data:', error);
        return fallback;
    }
};

/**
 * Check available localStorage space
 * @returns {Object} Object with used and available space in bytes
 */
const storage_size_check = () => {
    if (!storage_available_is()) {
        return { used: 0, available: 0, limit_is: true };
    }
    
    let total = 0;
    let keys_count = 0;
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        total += key.length + value.length;
        keys_count++;
    }
    
    // Estimate available space (5MB is a common limit)
    const available = 5 * 1024 * 1024 - total;
    
    return {
        used: total,
        available,
        limit_is: available < 1024 // Warning if less than 1KB available
    };
};

/**
 * Save codename data to localStorage
 * @param {Array} cn_list - Codename data to save
 * @returns {boolean} Success status
 */
const cn_save = (cn_list) => {
    if (!storage_available_is()) return false;
    
    try {
        // Check available space
        const size_info = storage_size_check();
        if (size_info.limit_is) {
            console.warn('Storage space is limited. Data may not be saved.');
        }
        
        // Prepare data with version
        const data_with_version = {
            version: current_version,
            data: cn_list,
            timestamp: Date.now()
        };
        
        // Store data
        localStorage.setItem(
            storage_keys.CN_DATA, 
            storage_serialize(data_with_version)
        );
        
        return true;
    } catch (error) {
        console.error('Error saving codename data:', error);
        return false;
    }
};

/**
 * Load codename data from localStorage
 * @param {Array} default_data - Default data to use if storage is empty
 * @returns {Array} Loaded codename data
 */
const cn_load = (default_data = []) => {
    if (!storage_available_is()) return default_data;
    
    try {
        const stored_json = localStorage.getItem(storage_keys.CN_DATA);
        
        if (!stored_json) return default_data;
        
        const stored_data = storage_deserialize(stored_json, { version: '', data: null });
        
        // Check version compatibility
        if (stored_data.version !== current_version) {
            console.warn(`Data version mismatch: ${stored_data.version} vs ${current_version}`);
            // Could implement migration logic here
        }
        
        return stored_data.data || default_data;
    } catch (error) {
        console.error('Error loading codename data:', error);
        return default_data;
    }
};

/**
 * Save filter state to localStorage
 * @param {Object} filter_state - Current filter configuration
 * @returns {boolean} Success status
 */
const filter_state_save = (filter_state) => {
    if (!storage_available_is()) return false;
    
    try {
        localStorage.setItem(
            storage_keys.FILTER_STATE,
            storage_serialize(filter_state)
        );
        return true;
    } catch (error) {
        console.error('Error saving filter state:', error);
        return false;
    }
};

/**
 * Load filter state from localStorage
 * @param {Object} default_state - Default state if storage is empty
 * @returns {Object} Loaded filter state
 */
const filter_state_load = (default_state = {}) => {
    if (!storage_available_is()) return default_state;
    
    try {
        const stored_json = localStorage.getItem(storage_keys.FILTER_STATE);
        return storage_deserialize(stored_json, default_state);
    } catch (error) {
        console.error('Error loading filter state:', error);
        return default_state;
    }
};

/**
 * Save search history to localStorage
 * @param {Array} search_history - Recent search queries
 * @param {number} max_items - Maximum number of history items to store
 * @returns {boolean} Success status
 */
const search_history_save = (search_history, max_items = 10) => {
    if (!storage_available_is()) return false;
    
    try {
        // Limit history to max_items
        const trimmed_history = search_history.slice(0, max_items);
        
        localStorage.setItem(
            storage_keys.SEARCH_HISTORY,
            storage_serialize(trimmed_history)
        );
        return true;
    } catch (error) {
        console.error('Error saving search history:', error);
        return false;
    }
};

/**
 * Load search history from localStorage
 * @returns {Array} Search history
 */
const search_history_load = () => {
    if (!storage_available_is()) return [];
    
    try {
        const stored_json = localStorage.getItem(storage_keys.SEARCH_HISTORY);
        return storage_deserialize(stored_json, []);
    } catch (error) {
        console.error('Error loading search history:', error);
        return [];
    }
};

/**
 * Save root group expansion state
 * @param {Object} root_state - Map of root names to expansion states
 * @returns {boolean} Success status
 */
const root_state_save = (root_state) => {
    if (!storage_available_is()) return false;
    
    try {
        localStorage.setItem(
            storage_keys.ROOT_STATE,
            storage_serialize(root_state)
        );
        return true;
    } catch (error) {
        console.error('Error saving root state:', error);
        return false;
    }
};

/**
 * Load root group expansion state
 * @param {Object} default_state - Default state if storage is empty
 * @returns {Object} Root expansion state
 */
const root_state_load = (default_state = {}) => {
    if (!storage_available_is()) return default_state;
    
    try {
        const stored_json = localStorage.getItem(storage_keys.ROOT_STATE);
        return storage_deserialize(stored_json, default_state);
    } catch (error) {
        console.error('Error loading root state:', error);
        return default_state;
    }
};

/**
 * Save code snippets to cache
 * @param {Object} snippets - Snippets object keyed by codename
 * @returns {boolean} Success status
 */
const snippet_cache_save = (snippets) => {
    if (!storage_available_is()) return false;
    
    try {
        // Check available space - snippets can be large
        const size_info = storage_size_check();
        if (size_info.limit_is) {
            console.warn('Storage space is limited. Snippet cache may not be saved.');
            return false;
        }
        
        localStorage.setItem(
            storage_keys.SNIPPET_CACHE,
            storage_serialize({
                version: current_version,
                data: snippets,
                timestamp: Date.now()
            })
        );
        return true;
    } catch (error) {
        console.error('Error saving snippet cache:', error);
        return false;
    }
};

/**
 * Load snippets from cache
 * @returns {Object} Cached snippets or empty object
 */
const snippet_cache_load = () => {
    if (!storage_available_is()) return {};
    
    try {
        const stored_json = localStorage.getItem(storage_keys.SNIPPET_CACHE);
        if (!stored_json) return {};
        
        const cache = storage_deserialize(stored_json, { version: '', data: {} });
        
        // Check version compatibility
        if (cache.version !== current_version) {
            console.warn('Snippet cache version mismatch - clearing cache');
            localStorage.removeItem(storage_keys.SNIPPET_CACHE);
            return {};
        }
        
        return cache.data;
    } catch (error) {
        console.error('Error loading snippet cache:', error);
        return {};
    }
};

/**
 * Clear snippet cache
 * @returns {boolean} Success status
 */
const snippet_cache_clear = () => {
    if (!storage_available_is()) return false;
    
    try {
        localStorage.removeItem(storage_keys.SNIPPET_CACHE);
        return true;
    } catch (error) {
        console.error('Error clearing snippet cache:', error);
        return false;
    }
};

/**
 * Save theme preference
 * @param {string} theme - Theme name (e.g., 'light', 'dark')
 * @returns {boolean} Success status
 */
const theme_preference_save = (theme) => {
    if (!storage_available_is()) return false;
    
    try {
        localStorage.setItem(storage_keys.THEME_PREFERENCE, theme);
        return true;
    } catch (error) {
        console.error('Error saving theme preference:', error);
        return false;
    }
};

/**
 * Load theme preference
 * @param {string} default_theme - Default theme if not set
 * @returns {string} Theme preference
 */
const theme_preference_load = (default_theme = 'light') => {
    if (!storage_available_is()) return default_theme;
    
    try {
        const theme = localStorage.getItem(storage_keys.THEME_PREFERENCE);
        return theme || default_theme;
    } catch (error) {
        console.error('Error loading theme preference:', error);
        return default_theme;
    }
};

/**
 * Storage fallback - In-memory storage when localStorage is unavailable
 */
const memory_storage = (() => {
    const store = {};
    
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => { store[key] = value; },
        removeItem: (key) => { delete store[key]; },
        clear: () => { Object.keys(store).forEach(key => delete store[key]); },
        length: () => Object.keys(store).length,
        key: (index) => Object.keys(store)[index]
    };
})();

/**
 * Get appropriate storage mechanism (localStorage or memory fallback)
 * @returns {Object} Storage interface
 */
const storage_get = () => {
    return storage_available_is() ? localStorage : memory_storage;
};

// Export storage utilities
export {
    storage_available_is,
    storage_serialize,
    storage_deserialize,
    storage_size_check,
    storage_get,
    storage_keys,
    cn_save,
    cn_load,
    filter_state_save,
    filter_state_load,
    search_history_save,
    search_history_load,
    root_state_save,
    root_state_load,
    snippet_cache_save,
    snippet_cache_load,
    snippet_cache_clear,
    theme_preference_save,
    theme_preference_load
}; 