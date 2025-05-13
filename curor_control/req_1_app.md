req_1a_layout             - Core layout structure and primary UI containers for application

1a1_ app_container       - Primary layout container with structure for the application
   a app_title           - Section containing main heading and application identity
   b app_content         - Area with main user interface elements and functionality
   c app_main_container  - Container holding the left and right column structure
   d app_column_left     - Section with filter_container and index_container elements
   e app_column_right    - Section with lookup_container and placeholder_panel components

1a2_ filter_container    - Control panel for filtering and searching functionality
   a filter_group        - Container element grouping all filtering interface components
   b filter_top_row      - Row containing search and primary filter controls
   c filter_search_controls - Container with search input field and clear button
   d filter_buttons      - Collection of buttons for toggling type visibility
   e filter_reset_controls - Container with filter_reset_all_button for clearing filters
   f root_open_all_button - Control element for toggling all root group expansion

1a3_ index_container     - Scrollable list displaying all codenames in organized structure
   a index_element       - Main container element for the codename index
   b root_group          - Organizational structure for semantically related codenames
   c root_header         - Collapsible section header for each root group
   d root_content        - Container element for grouped codenames within a root
   e cn_element          - Individual codename display with appropriate type styling
   f term_container      - Element containing term components for visual distinction
   g root_extract        - Function determining appropriate group organization

1a4_ lookup_container    - Panel showing code examples when codename is selected
   a lookup_window       - Main container element for the lookup interface
   b lookup_header       - Top section containing the lookup_title and controls
   c lookup_close_button - Interactive element for dismissing the lookup panel
   d lookup_content      - Content area displaying relevant code snippets
   e lookup_selected_cn  - Text element showing the currently selected codename
   f lookup_result       - Text area containing formatted code display

----------

req_1b_features          - Core application features for codename filtering and organization

1b1_ filter_on_list      - Toggle buttons for showing/hiding specific codename types
   a filter_func_on      - Toggle control for function codenames (styled in yellow)
   b filter_var_on       - Toggle control for variable codenames (styled in white)
   c filter_class_on     - Toggle control for class codenames (styled in purple)
   d filter_param_on     - Toggle control for parameter codenames (styled in blue)
   e filter_const_on     - Toggle control for constant codenames (styled in green)
   f filter_event_on     - Toggle control for event codenames (styled in red)
   g filter_propt_on     - Toggle control for property codenames (styled in orange)
   h filter_file_on      - Toggle control for file codenames (styled in green)
   i filter_window_on    - Toggle control for window objects with custom styling

1b2_ search_apply        - Text filtering functionality for codename search operations
   a filter_search_input - Control field for entering search text with real-time filtering
   b search_query_validate - Function to normalize and sanitize search input text
   c search_matches      - Function for pattern matching and highlighting results
   d search_delay_ms     - Timeout period (300ms) for debouncing rapid input
   e search_root_previous_state - State storage to restore view after search completion
   f search_root_match   - Tracking mechanism for matches to control group expansion

1b3_ root_group          - Collapsible organization of semantically related codenames
   a root_extract        - Function to determine appropriate grouping logic
   b root_header         - Element containing collapsed view with visual indicators
   c root_header_hidden  - CSS class applied when group is in expanded state
   d root_content        - Element containing all grouped codenames within a root
   e root_caret          - Visual indicator using ▶/▼ symbols to show current state
   f root_open_state     - Data structure tracking open/closed state of all groups
   g root_open_all       - Function to expand all groups simultaneously
   h root_close_all      - Function to collapse all groups for simplified view

1b4_ cn_copied           - Visual feedback system for clipboard copying operations
   a copy_animation      - Visual effect triggered when codename is clicked for copying
   b copy_feedback       - "Copied!" text confirmation that appears after successful copy
   c clipboard_write     - Browser API used for copying text content to clipboard
   d cn_copied           - CSS class applied for styling clicked state during animation
   e copy_reset          - Automatic reset mechanism after 1000ms delay

----------

req_1c_interaction       - User interaction handling and event management systems

1c1_ filter_cn_apply     - Implementation of comprehensive filtering functionality
   a filter_state_toggle - Function to change button states and update visibility
   b filter_exclusive_set - System for enabling single-type filtering mode
   c filter_all_reset    - Function to clear all active filters at once
   d filter_visible_count_check - Utility to update UI state based on visible items
   e filter_cn_visible_is - Function to check visibility status of individual codenames
   f filter_dblclick     - Double-click handler for activating exclusive view mode

1c2_ root_connect        - Root group expansion and collapse interaction mechanisms
   a root_group_toggle   - Function to change expanded/collapsed state of groups
   b root_header_create  - Factory function for generating group headers
   c root_content_create - Factory function for generating group content containers
   d root_caret_toggle   - Function for switching between ▶ and ▼ indicator states
   e event_handling      - System with event_propagation_stop for clean interactions
   f root_open_state_update - State management function called when groups are toggled

1c3_ cn_list_dom_render  - Codename element creation and interactive event handling
   a element_create      - Factory function for clickable codename elements
   b handler_attach      - System to attach click handlers for copy and lookup actions
   c cn_type_determine   - Logic for determining appropriate styling based on type
   d term_container_create - Factory function for containers with individual terms
   e term_list_extract   - Utility function to split codenames into component terms
   f term_style_get      - Function for determining appropriate styling for terms

1c4_ lookup_show         - Code snippet display and management functionality
   a lookup_state_update - State management with lookup_active_cn reference
   b lookup_snippets_load - Function to load relevant code snippets for display
   c lookup_snippets_extract - Logic to find and extract appropriate code examples
   d lookup_snippets_render - Rendering system to display snippets with formatting
   e lookup_close_button_create - Factory function for dismiss control element
   f placeholder_panel_hide - Function to hide placeholder when showing actual content

----------

req_1d_data              - Data structures and retrieval systems for codename management

1d1_ cn_list_define      - Core data structures containing all codename collections
   a cn_func_list        - Function collection including app_event_listener_setup, etc.
   b cn_var_list         - Variable collection including cn_list_func and related items
   c cn_class_dom_list   - DOM class collection with app_container, app_title, etc.
   d cn_parameter_list   - Parameter collection with array_input, element_parent, etc.
   e cn_constant_list    - Constants collection with mime_types, port definitions, etc.
   f cn_event_list       - Event type collection with click, dblclick, input events, etc.
   g cn_property_list    - Property collection with filter_func_on, filter_var_on, etc.
   h cn_file_list        - File reference collection with app_js, index_html, etc.
   i cn_store_list       - Collection for local storage variables and persistence

1d2_ term_list_extract   - Term parsing system for breaking down codename components
   a underscore_split    - Core logic for standard underscore-delimited codenames
   b path_handling       - Specialized handling for file paths with different separators
   c term_array_return   - Function returning properly formatted array of terms
   d term_list_compare   - Utility for comparing term arrays for similarity analysis
   e term_style_support  - Helper functions for applying visual styling to terms
   f invalid_input_handling - Error handling returning empty array for invalid inputs

1d3_ cn_type_determine   - Type detection system for styling and behavior customization
   a func_check          - Lookup in cn_list_func for function identification
   b var_check           - Lookup in cn_list_var for variable identification
   c class_check         - Lookup in cn_list_class for class identification
   d param_check         - Lookup in cn_list_param for parameter identification
   e const_check         - Lookup in cn_list_const for constant identification
   f event_check         - Lookup in cn_list_event for event identification
   g prop_check          - Lookup in cn_list_propt for property identification
   h file_check          - Lookup in cn_list_file for file identification
   i default_type        - Fallback returning "variable" when no specific type is found

1d4_ lookup_snippets_extract - Retrieval system for code snippets associated with codenames
   a snippets_init       - Initialization via lookup_code_snippets_init when needed
   b storage_check       - Mechanism for checking snippets in data_storage_local
   c fallback            - Fallback system to data_code_cn_snippets when storage empty
   d type_generation     - Logic for generating appropriate snippets based on type
   e multi_snippet       - Support for multiple code examples for complex functions
   f format_code         - Formatting utility for proper indentation and presentation

----------

req_1e_responsive        - Responsive design adaptations for cross-device compatibility

1e1_ ui_filter_buttons_mobile_setup - Responsive adaptation system for mobile interfaces
   a button_clear        - Function to clear existing buttons in ui_filter_buttons_wrap
   b button_clone        - Mechanism for cloning controls from ui_filter_buttons_inline
   c id_mapping          - System mapping IDs to corresponding filter_on_list properties
   d handler_setup       - Initialization of click handlers with filter_state_toggle
   e dblclick_setup      - Configuration of double-click behavior for filter_exclusive_set
   f event_binding       - Comprehensive event binding during initialization and resize

1e2_ ui_media_992        - Tablet-specific layout adaptations for screens ≤992px wide
   a inline_hide         - Logic setting ui_filter_buttons_inline to display: none
   b wrap_show           - Logic setting ui_filter_buttons_wrap to display: flex
   c nowrap_maintain     - Preservation of ui_filter_top_row nowrap property
   d size_adjust         - System for elements with reduced font size and padding
   e justify_start       - Alignment change to justify-content: flex-start for buttons

1e3_ ui_media_576        - Mobile-specific layout adaptations for screens ≤576px wide
   a row_wrap            - Modification of ui_filter_top_row to flex-wrap: wrap
   b search_expand       - Expansion of ui_filter_search_controls to width: 100%
   c reset_reposition    - Repositioning of ui_filter_reset_controls to width: 100%
   d font_reduce         - Global reduction of element font-size to 12px
   e tiny_screen         - Special case handling for screens ≤360px wide
   f three_per_row       - Reconfiguration to 3-column filter layout for tiny screens

1e4_ reveal_mode         - Interactive element inspection and debugging functionality
   a shortcut_activate   - Keyboard shortcut system using Alt+R for activation
   b hover_track         - Hover detection with reveal_hover_threshold (600ms delay)
   c hierarchy_show      - System displaying parent elements and selector paths
   d selector_copy       - Utility for copying CSS selectors via reveal_clipboard_copy
   e feedback_display    - Visual confirmation through reveal_copy_feedback_show
   f overlay_create      - Protective overlay preventing normal interaction during inspection

----------
