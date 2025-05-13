/**
 * Codename Data Collections - Core data structures for codename categorization
 */
import { cn_type_enum, cn_object_create, root_group_object_create } from './cn_schema.js';

// Function name collection
const cn_func_list = [
    cn_object_create('element_create', cn_type_enum.FUNCTION, 'Creates a DOM element with attributes and children'),
    cn_object_create('element_append', cn_type_enum.FUNCTION, 'Appends a child element to a parent element'),
    cn_object_create('element_remove', cn_type_enum.FUNCTION, 'Removes an element from the DOM'),
    cn_object_create('event_add', cn_type_enum.FUNCTION, 'Adds an event listener to an element'),
    cn_object_create('event_remove', cn_type_enum.FUNCTION, 'Removes an event listener from an element'),
    cn_object_create('data_fetch', cn_type_enum.FUNCTION, 'Fetches data from a specified URL'),
    cn_object_create('data_save', cn_type_enum.FUNCTION, 'Saves data to localStorage'),
    cn_object_create('data_load', cn_type_enum.FUNCTION, 'Loads data from localStorage'),
    cn_object_create('filter_apply', cn_type_enum.FUNCTION, 'Applies filters to codename display'),
    cn_object_create('filter_reset', cn_type_enum.FUNCTION, 'Resets all active filters'),
    cn_object_create('search_execute', cn_type_enum.FUNCTION, 'Executes search based on input query'),
    cn_object_create('root_toggle', cn_type_enum.FUNCTION, 'Toggles expansion of root groups'),
    cn_object_create('term_extract', cn_type_enum.FUNCTION, 'Extracts terms from a codename string'),
    cn_object_create('term_compare', cn_type_enum.FUNCTION, 'Compares terms for similarity')
];

// Variable name collection
const cn_var_list = [
    cn_object_create('app_container', cn_type_enum.VARIABLE, 'Main container for the application'),
    cn_object_create('current_filter', cn_type_enum.VARIABLE, 'Current active filter configuration'),
    cn_object_create('search_query', cn_type_enum.VARIABLE, 'Current search query text'),
    cn_object_create('selected_codename', cn_type_enum.VARIABLE, 'Currently selected codename'),
    cn_object_create('root_state', cn_type_enum.VARIABLE, 'Expansion state of root groups'),
    cn_object_create('theme_current', cn_type_enum.VARIABLE, 'Current application theme (light/dark)'),
    cn_object_create('data_loaded_is', cn_type_enum.VARIABLE, 'Whether data has been loaded'),
    cn_object_create('loading_is', cn_type_enum.VARIABLE, 'Whether app is in loading state'),
    cn_object_create('error_message', cn_type_enum.VARIABLE, 'Current error message if any'),
    cn_object_create('debug_mode_is', cn_type_enum.VARIABLE, 'Whether debug mode is enabled')
];

// CSS class name collection
const cn_class_dom_list = [
    cn_object_create('app_container', cn_type_enum.CLASS, 'Main application container'),
    cn_object_create('app_header', cn_type_enum.CLASS, 'Application header section'),
    cn_object_create('app_content', cn_type_enum.CLASS, 'Main content area'),
    cn_object_create('filter_panel', cn_type_enum.CLASS, 'Filter controls panel'),
    cn_object_create('filter_button', cn_type_enum.CLASS, 'Filter toggle button'),
    cn_object_create('filter_active', cn_type_enum.CLASS, 'State class for active filter'),
    cn_object_create('search_input', cn_type_enum.CLASS, 'Search input field'),
    cn_object_create('search_clear', cn_type_enum.CLASS, 'Search clear button'),
    cn_object_create('codename_item', cn_type_enum.CLASS, 'Individual codename element'),
    cn_object_create('codename_function', cn_type_enum.CLASS, 'Style class for function codenames'),
    cn_object_create('codename_variable', cn_type_enum.CLASS, 'Style class for variable codenames'),
    cn_object_create('term_container', cn_type_enum.CLASS, 'Container for term elements'),
    cn_object_create('term_root', cn_type_enum.CLASS, 'First term in a codename'),
    cn_object_create('root_group', cn_type_enum.CLASS, 'Root grouping container'),
    cn_object_create('root_header', cn_type_enum.CLASS, 'Clickable root group header'),
    cn_object_create('root_expanded', cn_type_enum.CLASS, 'State class for expanded root group'),
    cn_object_create('lookup_panel', cn_type_enum.CLASS, 'Code lookup panel'),
    cn_object_create('theme_dark', cn_type_enum.CLASS, 'Dark theme class')
];

// Parameter name collection
const cn_param_list = [
    cn_object_create('element_tag', cn_type_enum.PARAMETER, 'HTML tag for element creation'),
    cn_object_create('element_attr', cn_type_enum.PARAMETER, 'Attributes for element creation'),
    cn_object_create('element_children', cn_type_enum.PARAMETER, 'Child elements to append'),
    cn_object_create('event_type', cn_type_enum.PARAMETER, 'Type of event to listen for'),
    cn_object_create('event_callback', cn_type_enum.PARAMETER, 'Callback function for events'),
    cn_object_create('filter_config', cn_type_enum.PARAMETER, 'Filter configuration object'),
    cn_object_create('search_text', cn_type_enum.PARAMETER, 'Text to search for'),
    cn_object_create('codename_type', cn_type_enum.PARAMETER, 'Type of codename (function, variable, etc.)'),
    cn_object_create('root_name', cn_type_enum.PARAMETER, 'Name of root group'),
    cn_object_create('theme_name', cn_type_enum.PARAMETER, 'Name of theme to apply')
];

// Constant name collection
const cn_const_list = [
    cn_object_create('color_function', cn_type_enum.CONSTANT, 'Color code for function codenames'),
    cn_object_create('color_variable', cn_type_enum.CONSTANT, 'Color code for variable codenames'),
    cn_object_create('color_class', cn_type_enum.CONSTANT, 'Color code for class codenames'),
    cn_object_create('log_level_debug', cn_type_enum.CONSTANT, 'Debug log level constant'),
    cn_object_create('log_level_info', cn_type_enum.CONSTANT, 'Info log level constant'),
    cn_object_create('log_level_warn', cn_type_enum.CONSTANT, 'Warning log level constant'),
    cn_object_create('log_level_error', cn_type_enum.CONSTANT, 'Error log level constant'),
    cn_object_create('storage_key_filter', cn_type_enum.CONSTANT, 'Storage key for filter settings'),
    cn_object_create('storage_key_theme', cn_type_enum.CONSTANT, 'Storage key for theme preference'),
    cn_object_create('storage_key_roots', cn_type_enum.CONSTANT, 'Storage key for root group states')
];

// Event type collection
const cn_event_list = [
    cn_object_create('click_event', cn_type_enum.EVENT, 'Mouse click event'),
    cn_object_create('dblclick_event', cn_type_enum.EVENT, 'Mouse double-click event'),
    cn_object_create('mouseover_event', cn_type_enum.EVENT, 'Mouse over event'),
    cn_object_create('mouseout_event', cn_type_enum.EVENT, 'Mouse out event'),
    cn_object_create('keydown_event', cn_type_enum.EVENT, 'Key down event'),
    cn_object_create('input_event', cn_type_enum.EVENT, 'Input value change event'),
    cn_object_create('load_event', cn_type_enum.EVENT, 'Page load event'),
    cn_object_create('resize_event', cn_type_enum.EVENT, 'Window resize event'),
    cn_object_create('storage_event', cn_type_enum.EVENT, 'LocalStorage change event')
];

// Property name collection
const cn_prop_list = [
    cn_object_create('filter_func_on', cn_type_enum.PROPERTY, 'Function filter toggle state'),
    cn_object_create('filter_var_on', cn_type_enum.PROPERTY, 'Variable filter toggle state'),
    cn_object_create('filter_class_on', cn_type_enum.PROPERTY, 'Class filter toggle state'),
    cn_object_create('filter_param_on', cn_type_enum.PROPERTY, 'Parameter filter toggle state'),
    cn_object_create('filter_const_on', cn_type_enum.PROPERTY, 'Constant filter toggle state'),
    cn_object_create('filter_event_on', cn_type_enum.PROPERTY, 'Event filter toggle state'),
    cn_object_create('filter_prop_on', cn_type_enum.PROPERTY, 'Property filter toggle state'),
    cn_object_create('root_expanded_is', cn_type_enum.PROPERTY, 'Whether a root group is expanded'),
    cn_object_create('dark_mode_is', cn_type_enum.PROPERTY, 'Whether dark mode is enabled'),
    cn_object_create('snippet_loaded_is', cn_type_enum.PROPERTY, 'Whether code snippets are loaded')
];

// File name collection
const cn_file_list = [
    cn_object_create('index_html', cn_type_enum.FILE, 'Main HTML entry point'),
    cn_object_create('style_css', cn_type_enum.FILE, 'Main CSS stylesheet'),
    cn_object_create('main_js', cn_type_enum.FILE, 'Main JavaScript entry point'),
    cn_object_create('cn_schema_js', cn_type_enum.FILE, 'Codename schema definitions'),
    cn_object_create('cn_data_js', cn_type_enum.FILE, 'Codename data collections'),
    cn_object_create('storage_js', cn_type_enum.FILE, 'LocalStorage persistence utilities'),
    cn_object_create('dom_util_js', cn_type_enum.FILE, 'DOM manipulation utilities'),
    cn_object_create('filter_js', cn_type_enum.FILE, 'Filtering functionality'),
    cn_object_create('search_js', cn_type_enum.FILE, 'Search functionality'),
    cn_object_create('theme_js', cn_type_enum.FILE, 'Theme management')
];

// Combined list of all codenames
const cn_all_list = [
    ...cn_func_list,
    ...cn_var_list,
    ...cn_class_dom_list,
    ...cn_param_list,
    ...cn_const_list,
    ...cn_event_list,
    ...cn_prop_list,
    ...cn_file_list
];

// Organize codenames by root term
const cn_by_root_create = () => {
    const root_map = {};
    
    cn_all_list.forEach(codename => {
        const root = codename.root;
        
        if (!root_map[root]) {
            root_map[root] = root_group_object_create(root);
        }
        
        root_map[root].codename_list.push(codename);
    });
    
    return root_map;
};

// Export all codename collections and utilities
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
}; 