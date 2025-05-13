/**
 * Storage utility for localStorage with fallbacks and enhanced functionality
 * Provides methods for storing, retrieving, and managing persisted data
 */

// Check if localStorage is available
const storage_available_is = () => {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

// Memory storage fallback when localStorage is not available
const memory_storage = {
  items: {},
  getItem: (key) => memory_storage.items[key],
  setItem: (key, value) => {
    memory_storage.items[key] = value;
  },
  removeItem: (key) => {
    delete memory_storage.items[key];
  },
  clear: () => {
    memory_storage.items = {};
  }
};

// Determine which storage mechanism to use
const storage = storage_available_is() ? localStorage : memory_storage;

/**
 * Sets a value in storage with optional expiration
 * @param {string} key - Storage key
 * @param {*} value - Value to store (will be JSON stringified)
 * @param {Object} options - Additional options
 * @param {number} options.expires - Expiration time in milliseconds
 * @returns {boolean} True if storage was successful
 */
const storage_set = (key, value, options = {}) => {
  try {
    const item = {
      value,
      timestamp: Date.now()
    };
    
    // Add expiration if provided
    if (options.expires) {
      item.expires = Date.now() + options.expires;
    }
    
    storage.setItem(key, JSON.stringify(item));
    return true;
  } catch (e) {
    console.error('Error setting storage item:', e);
    return false;
  }
};

/**
 * Gets a value from storage
 * @param {string} key - Storage key
 * @param {*} default_value - Default value if key not found or expired
 * @returns {*} Retrieved value or default value
 */
const storage_get = (key, default_value = null) => {
  try {
    const data = storage.getItem(key);
    
    if (!data) {
      return default_value;
    }
    
    const item = JSON.parse(data);
    
    // Check if item has expired
    if (item.expires && item.expires < Date.now()) {
      storage.removeItem(key);
      return default_value;
    }
    
    return item.value;
  } catch (e) {
    console.error('Error getting storage item:', e);
    return default_value;
  }
};

/**
 * Removes a value from storage
 * @param {string} key - Storage key to remove
 * @returns {boolean} True if removal was successful
 */
const storage_remove = (key) => {
  try {
    storage.removeItem(key);
    return true;
  } catch (e) {
    console.error('Error removing storage item:', e);
    return false;
  }
};

/**
 * Clears all items from storage
 * @returns {boolean} True if clearing was successful
 */
const storage_clear = () => {
  try {
    storage.clear();
    return true;
  } catch (e) {
    console.error('Error clearing storage:', e);
    return false;
  }
};

/**
 * Gets all stored keys
 * @returns {string[]} Array of storage keys
 */
const storage_keys_get = () => {
  try {
    if (storage === localStorage) {
      return Object.keys(localStorage);
    } else {
      return Object.keys(memory_storage.items);
    }
  } catch (e) {
    console.error('Error getting storage keys:', e);
    return [];
  }
};

/**
 * Checks if a key exists in storage and is not expired
 * @param {string} key - Storage key to check
 * @returns {boolean} True if key exists and is not expired
 */
const storage_key_exists_is = (key) => {
  try {
    const data = storage.getItem(key);
    
    if (!data) {
      return false;
    }
    
    const item = JSON.parse(data);
    
    // Check if item has expired
    if (item.expires && item.expires < Date.now()) {
      storage.removeItem(key);
      return false;
    }
    
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Gets the size of stored data in bytes
 * @returns {number} Size in bytes
 */
const storage_size_get = () => {
  try {
    let size = 0;
    const keys = storage_keys_get();
    
    for (const key of keys) {
      const value = storage.getItem(key);
      if (value) {
        size += key.length + value.length;
      }
    }
    
    return size;
  } catch (e) {
    console.error('Error calculating storage size:', e);
    return 0;
  }
};

// Export storage utilities
export {
  storage_available_is,
  storage_set,
  storage_get,
  storage_remove,
  storage_clear,
  storage_keys_get,
  storage_key_exists_is,
  storage_size_get
}; 