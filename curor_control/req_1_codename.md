req_1a_index             - Core system for codename indexing, categorization, and visualization

1a1_ cn_list_define      - Codename categorization and storage system for application
   a cn_func_list        - Function name collection for lookup and reference operations
   b cn_var_list         - Variable name collection for lookup and organization
   c cn_class_dom_list   - CSS class name collection for DOM element identification

1a2_ cn_list_dom_render  - Codename visualization component system for user interface
   a cn_list_dom_render  - Core function to render codename as interactive DOM element
   b cn_list_get         - Utility to retrieve stored codenames for display operations
   c cn_type_determine   - Service to identify codename type (function, variable, etc.)

1a3_ term                - Term extraction and styling system for codename components
   a term_list_extract   - Parser function for breaking down underscore-separated terms
   b term_list_compare   - Comparator for analyzing similarity between term lists
   c term_style_get      - Styling utility to determine visual presentation of terms

1a4_ root                - Root term grouping functionality for hierarchical organization
   a root_extract        - Utility function to extract first term from any codename
   b root_group_create   - Factory function for generating collapsible root term groups
   c root_toggle         - Controller for toggling expansion state of root group elements

----------

req_1b_filter           - Filtering mechanisms for dynamic codename visibility control

1b1_ filter_on_list      - Type-based filtering controls for selective codename display
   a filter_func_on      - Function type filter toggle button (styled in yellow)
   b filter_var_on       - Variable type filter toggle button (styled in white)
   c filter_class_on     - Class/CSS type filter toggle button (styled in purple)

1b2_ filter_action       - Filter action functionality for managing filter states
   a filter_on_list      - State tracker for enabled/disabled filter configurations
   b filter_state_toggle - Toggle function for switching filter states on/off
   c filter_all_reset    - Reset utility to clear all active filters (reset button)

1b3_ search              - Text-based filtering system for codename discovery
   a filter_search_input - Search input field component in DOM for user text entry
   b search_query        - Current search text tracker in filter_on_list object
   c search_apply        - Processing function to apply search query against names

1b4_ filter_event        - Filter event handling system for user interactions
   a filter_type_func_event_add - Event attachment for function filter interactions
   b filter_type_var_event_add - Event attachment for variable filter interactions 
   c filter_active       - CSS class definition for styling active filter buttons

----------

req_1c_lookup           - Code snippet viewer for displaying and inspecting codename implementations

1c1_ lookup_container    - Code snippet viewing panel for displayed examples
   a lookup_container    - Main container element for the entire lookup feature
   b lookup_window       - Content window component within the main container
   c lookup_content      - Content area element for displaying formatted code snippets

1c2_ lookup_state        - Lookup state management system for UI coordination
   a lookup_state        - Global state object for tracking lookup component state 
   b lookup_active_cn    - Reference to currently selected codename for context
   c lookup_visible      - Boolean tracking visibility state of the lookup panel

1c3_ lookup_action       - Lookup operations for snippet display functionality
   a lookup_init         - Initialization function for lookup system setup
   b lookup_show         - Display controller for showing lookup with selected codename
   c lookup_hide         - Display controller for hiding lookup panel when dismissed

1c4_ placeholder         - Initial state interface before any lookup is performed
   a placeholder_panel   - Panel component shown before first lookup operation
   b placeholder_content - Content container within the placeholder interface
   c placeholder_text    - Instructional text element to guide user interaction

----------

req_1d_reveal           - Element inspection tools for debugging and development workflows

1d1_ reveal_mode         - Element inspection functionality for debugging and development
   a reveal_toggle       - Controller to enable/disable the reveal inspection mode
   b reveal_show_panel   - Display function to show the element inspection panel
   c reveal_hide_panel   - Display function to hide the inspection panel when inactive

1d2_ reveal_util         - Reveal support utilities for enhanced functionality
   a reveal_copy_to_clipboard - Utility for copying element selector to clipboard 
   b reveal_show_copy_feedback - Visual confirmation system showing "copied" feedback
   c reveal_hover_threshold - Timing parameter controlling delay before showing info (600ms)

1d3_ debug               - Debugging utilities for development and troubleshooting
   a debug               - Color-coded console logging utility for categorized output
   b diag_log            - Diagnostic logging system for critical issues and errors
   c log_groups          - Logging control flags organized by functional category

1d4_ error               - Error handling system for graceful failure management
   a showerror           - Display function for showing error messages in the UI
   b error               - CSS class definition for styling error message elements
   c error_log           - Capture utility for recording error details in logs

----------

req_1e_frontend         - Client-side implementation of UI components and interactions

1e1_ component           - Vanilla JavaScript UI component architecture
   a component_panel     - UI panel component implementations (filter_panel.js)
   b component_button    - Interactive button element implementations (filter_button.js)
   c component_card      - Card-style display components (cn_card.js)

1e2_ layout              - Application structure components for page organization
   a layout_main         - Main layout wrapper implementation (main_layout.js)
   b layout_sidebar      - Sidebar component implementation (sidebar_layout.js)
   c layout_split        - Split-view layout for index/details display (split_view.js)

1e3_ handlers            - DOM event handlers for user interaction processing
   a handler_filter      - Filter state management handlers (filter_handlers.js)
   b handler_cn          - Codename data interaction handlers (cn_data_handlers.js)
   c handler_theme       - Theme switching handler implementation (theme_handlers.js)

1e4_ style               - Styling and theming system for visual presentation
   a style_theme         - Theme definitions and variables (theme_dark.css)
   b style_component     - Component-specific style definitions (cn_panel.css)
   c style_animation     - Animation and transition definitions (transitions.css)

1e5_ state               - State management modules for application data flow
   a state_cn            - Codename data state management module (cn_state.js)
   b state_filter        - Filter state management implementation (filter_state.js)
   c state_theme         - Theme state management and persistence (theme_state.js)

----------

req_1f_backend          - Server-side functionality for data management and processing

1f1_ api                 - API endpoints and services for data operations
   a api_cn              - Codename data endpoints implementation (cn.js)
   b api_snippet         - Code snippet retrieval service (snippets.js)
   c api_search          - Search functionality service implementation (search.js)

1f2_ data_model          - Data structures and documentation for application entities
   a model_cn            - Codename entity definition and validation (cn.js)
   b model_snippet       - Code snippet model structure and methods (snippet.js)
   c model_filter        - Filter state model implementation (filter_state.js)

1f3_ service             - Backend services for business logic operations
   a service_parser      - Code parsing service for syntax analysis (parser_service.js)
   b service_storage     - Data persistence service implementation (storage_service.js)
   c service_index       - Indexing functionality for search operations (index_service.js)

1f4_ util                - Utility functions and helpers for common operations
   a util_string         - String manipulation utilities collection (string_utils.js)
   b util_array          - Array operations utility library (array_utils.js)
   c util_object         - Object manipulation helper functions (object_utils.js)

1f5_ middleware          - Request processing middleware for API operations
   a middleware_auth     - Authentication handling middleware layer (auth_middleware.js)
   b middleware_logging  - Request logging middleware implementation (logging_middleware.js)
   c middleware_cache    - Response caching middleware for performance (cache_middleware.js)

----------

req_1g_infrastructure   - Development, testing, and deployment configuration

1g1_ config              - Project configuration for development environment
   a config_eslint       - ESLint configuration for code quality (eslintrc.js)
   b config_server       - Server configuration implementation (server.js)
   c config_build        - Build process configuration settings (build.js)

1g2_ build               - Build and deployment automation systems
   a build_script        - Build automation scripts implementation (build.js)
   b build_docker        - Containerization configuration (Dockerfile)
   c build_ci            - Continuous integration workflow (.github/workflows/ci.yml)

1g3_ env                 - Environment configuration for different deployment contexts
   a env_development     - Development environment settings (.env.development)
   b env_production      - Production environment configuration (.env.production)
   c env_test            - Testing environment settings for CI (.env.test)

1g4_ test                - Testing infrastructure for quality assurance
   a test_unit           - Unit test implementation suite (index_panel.test.js)
   b test_util           - Test utility functions collection (test_helpers.js)
   c test_mock           - Mock data generation for testing (mock_cn.js)

1g5_ doc                 - Documentation files for project reference
   a doc_readme          - Project overview and setup guide (README.md)
   b doc_requirement     - Requirements documentation reference (req_cn.md)
   c doc_api             - API documentation and usage guides (api_docs.md)

----------

req_1h_log              - Diagnostic logging system for development and troubleshooting

1h1_ log_group           - Feature-based log grouping constants for categorization
   a log_groups          - Master object containing all defined log toggle groups
   b log_app             - APP group toggle flags (INIT, DOM, EVENT, STATE)
   c log_name            - NAME group toggle flags (RENDER, CLICK, FILTER)

1h2_ log_category        - Specific logging categories for focused diagnostics
   a log_init            - Initialization phase logging functionality (APP.INIT)
   b log_dom             - DOM manipulation operation logging (APP.DOM)
   c log_event           - Event handling and interaction logging (APP.EVENT)

1h3_ log_func            - Logging utility functions for development support
   a log                 - Main logging function with group filtering capability
   b debug               - Color-coded category logging system (CLICK, LOOKUP)
   c diag_log            - Critical diagnostic logging for errors (ERROR, INITIALIZE)

----------
