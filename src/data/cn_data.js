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
    cn_object_create('term_compare', cn_type_enum.FUNCTION, 'Compares terms for similarity'),
    cn_object_create('element_configure', cn_type_enum.FUNCTION, 'Configures an element with attributes'),
    cn_object_create('codename_register', cn_type_enum.FUNCTION, 'Registers a new codename in the system'),
    cn_object_create('highlight_create', cn_type_enum.FUNCTION, 'Creates a highlight for text content'),
    cn_object_create('tooltip_show', cn_type_enum.FUNCTION, 'Shows a tooltip with information'),
    cn_object_create('tooltip_hide', cn_type_enum.FUNCTION, 'Hides the active tooltip'),
    cn_object_create('search_result_display', cn_type_enum.FUNCTION, 'Displays search results to the user'),
    cn_object_create('filter_toggle', cn_type_enum.FUNCTION, 'Toggles a specific filter on or off'),
    cn_object_create('detail_view_show', cn_type_enum.FUNCTION, 'Shows detailed information for a selected item'),
    cn_object_create('theme_apply', cn_type_enum.FUNCTION, 'Applies theme settings to the UI'),
    cn_object_create('snippet_format', cn_type_enum.FUNCTION, 'Formats code snippets for display'),
    cn_object_create('position_calculate', cn_type_enum.FUNCTION, 'Calculates position for floating elements'),
    cn_object_create('notification_display', cn_type_enum.FUNCTION, 'Displays a notification to the user')
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
    cn_object_create('debug_mode_is', cn_type_enum.VARIABLE, 'Whether debug mode is enabled'),
    cn_object_create('reveal_state', cn_type_enum.VARIABLE, 'State of the reveal component'),
    cn_object_create('tooltip_visible', cn_type_enum.VARIABLE, 'Whether tooltip is currently visible'),
    cn_object_create('active_tooltip', cn_type_enum.VARIABLE, 'Reference to active tooltip element'),
    cn_object_create('search_results', cn_type_enum.VARIABLE, 'Current search results array'),
    cn_object_create('filter_active_is', cn_type_enum.VARIABLE, 'Whether filtering is currently active'),
    cn_object_create('visible_count', cn_type_enum.VARIABLE, 'Number of visible items after filtering'),
    cn_object_create('snippet_current', cn_type_enum.VARIABLE, 'Currently displayed code snippet'),
    cn_object_create('cache_data', cn_type_enum.VARIABLE, 'Cached data for performance'),
    cn_object_create('toast_timeout', cn_type_enum.VARIABLE, 'Timeout reference for toast notifications'),
    cn_object_create('scroll_position', cn_type_enum.VARIABLE, 'Current scroll position in container'),
    cn_object_create('resizing_is', cn_type_enum.VARIABLE, 'Whether window is currently being resized'),
    cn_object_create('animation_frame', cn_type_enum.VARIABLE, 'Animation frame request reference')
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
    cn_object_create('theme_dark', cn_type_enum.CLASS, 'Dark theme class'),
    cn_object_create('reveal_control_panel', cn_type_enum.CLASS, 'Control panel for reveal functionality'),
    cn_object_create('reveal_toggle_button', cn_type_enum.CLASS, 'Button to toggle reveal mode'),
    cn_object_create('reveal_icon', cn_type_enum.CLASS, 'Icon inside reveal toggle button'),
    cn_object_create('reveal_text', cn_type_enum.CLASS, 'Text inside reveal toggle button'),
    cn_object_create('reveal_info', cn_type_enum.CLASS, 'Information text about reveal mode'),
    cn_object_create('reveal_active', cn_type_enum.CLASS, 'State class for active reveal mode'),
    cn_object_create('codename_highlight', cn_type_enum.CLASS, 'Highlighted codename in content'),
    cn_object_create('codename_tooltip', cn_type_enum.CLASS, 'Tooltip showing codename information'),
    cn_object_create('tooltip_title', cn_type_enum.CLASS, 'Title in codename tooltip'),
    cn_object_create('tooltip_badge', cn_type_enum.CLASS, 'Type badge in tooltip'),
    cn_object_create('tooltip_description', cn_type_enum.CLASS, 'Description in tooltip'),
    cn_object_create('tooltip_actions', cn_type_enum.CLASS, 'Action buttons container in tooltip'),
    cn_object_create('tooltip_button', cn_type_enum.CLASS, 'Button in tooltip actions'),
    cn_object_create('tooltip_details', cn_type_enum.CLASS, 'Details button in tooltip'),
    cn_object_create('tooltip_close', cn_type_enum.CLASS, 'Close button in tooltip'),
    cn_object_create('badge_function', cn_type_enum.CLASS, 'Badge style for function type'),
    cn_object_create('badge_variable', cn_type_enum.CLASS, 'Badge style for variable type'),
    cn_object_create('badge_class', cn_type_enum.CLASS, 'Badge style for class type'),
    cn_object_create('highlight_function', cn_type_enum.CLASS, 'Highlight style for functions'),
    cn_object_create('highlight_variable', cn_type_enum.CLASS, 'Highlight style for variables'),
    cn_object_create('highlight_class', cn_type_enum.CLASS, 'Highlight style for classes')
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
    cn_object_create('theme_name', cn_type_enum.PARAMETER, 'Name of theme to apply'),
    cn_object_create('container', cn_type_enum.PARAMETER, 'Container element to render into'),
    cn_object_create('expanded_is', cn_type_enum.PARAMETER, 'Whether an element is initially expanded'),
    cn_object_create('active_is', cn_type_enum.PARAMETER, 'Whether a component is initially active'),
    cn_object_create('options', cn_type_enum.PARAMETER, 'Configuration options object'),
    cn_object_create('callback', cn_type_enum.PARAMETER, 'General callback function'),
    cn_object_create('initial_data', cn_type_enum.PARAMETER, 'Initial data to populate with'),
    cn_object_create('target_element', cn_type_enum.PARAMETER, 'Target element for an operation'),
    cn_object_create('query', cn_type_enum.PARAMETER, 'Query string for search operations'),
    cn_object_create('limit', cn_type_enum.PARAMETER, 'Limit value for pagination'),
    cn_object_create('offset', cn_type_enum.PARAMETER, 'Offset value for pagination'),
    cn_object_create('codename_info', cn_type_enum.PARAMETER, 'Codename information object'),
    cn_object_create('position', cn_type_enum.PARAMETER, 'Position information for elements')
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
    cn_object_create('storage_key_roots', cn_type_enum.CONSTANT, 'Storage key for root group states'),
    cn_object_create('max_search_history', cn_type_enum.CONSTANT, 'Maximum items in search history'),
    cn_object_create('default_theme', cn_type_enum.CONSTANT, 'Default theme setting'),
    cn_object_create('animation_duration', cn_type_enum.CONSTANT, 'Default animation duration in ms'),
    cn_object_create('api_endpoint', cn_type_enum.CONSTANT, 'Base API endpoint for data fetching'),
    cn_object_create('tooltip_delay', cn_type_enum.CONSTANT, 'Delay before showing tooltips'),
    cn_object_create('version_current', cn_type_enum.CONSTANT, 'Current application version'),
    cn_object_create('max_snippet_size', cn_type_enum.CONSTANT, 'Maximum size for code snippets'),
    cn_object_create('default_page_size', cn_type_enum.CONSTANT, 'Default items per page'),
    cn_object_create('cache_duration', cn_type_enum.CONSTANT, 'Duration to cache data in seconds'),
    cn_object_create('max_recent_items', cn_type_enum.CONSTANT, 'Maximum recent items to track')
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
    cn_object_create('storage_event', cn_type_enum.EVENT, 'LocalStorage change event'),
    cn_object_create('submit_event', cn_type_enum.EVENT, 'Form submit event'),
    cn_object_create('change_event', cn_type_enum.EVENT, 'Element change event'),
    cn_object_create('focus_event', cn_type_enum.EVENT, 'Element focus event'),
    cn_object_create('blur_event', cn_type_enum.EVENT, 'Element blur event'),
    cn_object_create('keyup_event', cn_type_enum.EVENT, 'Key up event'),
    cn_object_create('scroll_event', cn_type_enum.EVENT, 'Element scroll event'),
    cn_object_create('touchstart_event', cn_type_enum.EVENT, 'Touch start event'),
    cn_object_create('touchend_event', cn_type_enum.EVENT, 'Touch end event'),
    cn_object_create('dragstart_event', cn_type_enum.EVENT, 'Drag start event'),
    cn_object_create('dragend_event', cn_type_enum.EVENT, 'Drag end event'),
    cn_object_create('drop_event', cn_type_enum.EVENT, 'Element drop event'),
    cn_object_create('transitionend_event', cn_type_enum.EVENT, 'CSS transition end event')
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
    cn_object_create('snippet_loaded_is', cn_type_enum.PROPERTY, 'Whether code snippets are loaded'),
    cn_object_create('tooltip_visible_is', cn_type_enum.PROPERTY, 'Whether tooltip is visible'),
    cn_object_create('highlight_active_is', cn_type_enum.PROPERTY, 'Whether highlighting is active'),
    cn_object_create('search_active_is', cn_type_enum.PROPERTY, 'Whether search is active'),
    cn_object_create('animation_running_is', cn_type_enum.PROPERTY, 'Whether animation is running'),
    cn_object_create('data_dirty_is', cn_type_enum.PROPERTY, 'Whether data has unsaved changes'),
    cn_object_create('cache_valid_is', cn_type_enum.PROPERTY, 'Whether cache is valid'),
    cn_object_create('initialized_is', cn_type_enum.PROPERTY, 'Whether component is initialized'),
    cn_object_create('expanded_is', cn_type_enum.PROPERTY, 'Whether element is expanded'),
    cn_object_create('selected_is', cn_type_enum.PROPERTY, 'Whether item is selected'),
    cn_object_create('overflow_is', cn_type_enum.PROPERTY, 'Whether content is overflowing')
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
    cn_object_create('theme_js', cn_type_enum.FILE, 'Theme management'),
    cn_object_create('reveal_component_js', cn_type_enum.FILE, 'Reveal component implementation'),
    cn_object_create('lookup_component_js', cn_type_enum.FILE, 'Lookup component implementation'),
    cn_object_create('search_component_js', cn_type_enum.FILE, 'Search component implementation'),
    cn_object_create('filter_component_js', cn_type_enum.FILE, 'Filter component implementation'),
    cn_object_create('detail_view_js', cn_type_enum.FILE, 'Detail view implementation'),
    cn_object_create('index_view_js', cn_type_enum.FILE, 'Index view implementation'),
    cn_object_create('interaction_handler_js', cn_type_enum.FILE, 'Interaction handler implementation'),
    cn_object_create('reveal_css', cn_type_enum.FILE, 'Reveal component styles'),
    cn_object_create('search_css', cn_type_enum.FILE, 'Search component styles'),
    cn_object_create('lookup_css', cn_type_enum.FILE, 'Lookup component styles'),
    cn_object_create('filter_css', cn_type_enum.FILE, 'Filter component styles'),
    cn_object_create('cn_access_js', cn_type_enum.FILE, 'Codename access module implementation'),
    cn_object_create('snippet_access_js', cn_type_enum.FILE, 'Snippet access module implementation')
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