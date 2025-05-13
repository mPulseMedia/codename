/**
 * Data Module Index - Central export point for all data modules
 */

// Export schema definitions
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
} from './cn_schema.js';

// Export data collections
export { 
    cn_func_list,
    cn_var_list,
    cn_class_dom_list,
    cn_param_list,
    cn_const_list,
    cn_event_list,
    cn_prop_list,
    cn_file_list,
    cn_all_list,
    cn_by_root_create
} from './cn_data.js';

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
} from './storage.js';

// Export data access modules
import CodenameDM from './cn_access.js';
import SnippetDM from './snippet_access.js';

export { CodenameDM, SnippetDM }; 