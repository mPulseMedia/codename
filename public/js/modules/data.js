/**
 * Data module for managing application data
 * Provides functions for data storage, retrieval, and manipulation
 */

// Storage key for data
const STORAGE_KEY = 'codename_app_data';

// Default data structure
const default_data = {
  items: [],
  settings: {
    theme: 'light',
    showWelcome: true
  },
  lastUpdated: null
};

// Current data state
let data_current = null;

/**
 * Initialize data module
 */
const data_init = () => {
  console.log('Data layer initializing...');
  data_load();
};

/**
 * Load data from localStorage
 * @returns {Object} The loaded data object
 */
const data_load = () => {
  try {
    const stored_data = localStorage.getItem(STORAGE_KEY);
    data_current = stored_data ? JSON.parse(stored_data) : {...default_data};
    data_current.lastUpdated = data_current.lastUpdated || new Date().toISOString();
    return data_current;
  } catch (error) {
    console.error('Error loading data:', error);
    data_current = {...default_data};
    return data_current;
  }
};

/**
 * Save current data to localStorage
 * @returns {boolean} True if save was successful
 */
const data_save = () => {
  try {
    data_current.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data_current));
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
};

/**
 * Get the full data object
 * @returns {Object} The current data object
 */
const data_get = () => {
  return data_current || data_load();
};

/**
 * Add an item to the data store
 * @param {Object} item - The item to add
 * @returns {string} The ID of the added item
 */
const data_item_add = (item) => {
  // Ensure data is loaded
  if (!data_current) data_load();
  
  // Generate unique ID
  const id = `item_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  const new_item = { 
    id, 
    ...item,
    createdAt: new Date().toISOString()
  };
  
  // Add to items array
  data_current.items.push(new_item);
  
  // Save data
  data_save();
  
  return id;
};

/**
 * Update an existing item
 * @param {string} id - The ID of the item to update
 * @param {Object} updates - The updates to apply
 * @returns {boolean} True if the update was successful
 */
const data_item_update = (id, updates) => {
  // Ensure data is loaded
  if (!data_current) data_load();
  
  const index = data_current.items.findIndex(item => item.id === id);
  if (index === -1) return false;
  
  // Update the item
  data_current.items[index] = {
    ...data_current.items[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  // Save data
  data_save();
  
  return true;
};

/**
 * Delete an item by ID
 * @param {string} id - The ID of the item to delete
 * @returns {boolean} True if the item was deleted
 */
const data_item_delete = (id) => {
  // Ensure data is loaded
  if (!data_current) data_load();
  
  const initialLength = data_current.items.length;
  data_current.items = data_current.items.filter(item => item.id !== id);
  
  // If an item was removed, save and return true
  if (data_current.items.length < initialLength) {
    data_save();
    return true;
  }
  
  return false;
};

/**
 * Get all items
 * @returns {Array} Array of all items
 */
const data_items_get = () => {
  if (!data_current) data_load();
  return [...data_current.items];
};

/**
 * Update application settings
 * @param {Object} settings - New settings to apply
 * @returns {Object} Updated settings object
 */
const data_settings_update = (settings) => {
  if (!data_current) data_load();
  
  data_current.settings = {
    ...data_current.settings,
    ...settings
  };
  
  data_save();
  return {...data_current.settings};
};

// Export all functions
export {
  data_init,
  data_load,
  data_save,
  data_get,
  data_item_add,
  data_item_update,
  data_item_delete,
  data_items_get,
  data_settings_update
}; 