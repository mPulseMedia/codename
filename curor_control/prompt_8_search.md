||||||||||||||||||||||||||||||||| YOU ARE HERE |||||||||||||||||||||||||||||||||

prompt_8_search         - Implement search using JS array methods for codename lookup

--------------------------------------------------------------------------------

prompt_8a_search_ui       - Build search input and results interface with HTML/CSS

8a0_ search_controls    - Create search input controls for codename search
   a input_field         - Design search input field with proper styling
   b clear_button        - Add clear button for resetting search input
   c search_button       - Create optional search button for explicit searches
   d input_feedback      - Provide visual feedback during input interactions

8a1_ search_results     - Design results display area for search matches
   a results_container   - Create container for displaying search results
   b result_item         - Design individual result item presentation
   c no_results          - Implement empty state for no search matches
   d results_count       - Add counter displaying number of matches

8a2_ results_navigation - Implement navigation controls for search results
   a pagination          - Add pagination for large result sets
   b scroll_position     - Maintain scroll position during result navigation
   c keyboard_navigation - Implement keyboard shortcuts for result traversal
   d result_focus        - Create clear focus indicators for current result

8a3_ search_suggestions - Add search suggestions for enhanced usability
   a suggestion_display  - Create dropdown for displaying suggestions
   b recent_searches     - Show recently used search terms
   c popular_terms       - Display commonly searched terms
   d autocomplete        - Implement autocomplete from existing codenames

8a4_ responsive_design  - Ensure search interface works across device sizes
   a mobile_layout       - Optimize layout for mobile screen sizes
   b tablet_layout       - Create appropriate layout for tablet devices
   c desktop_layout      - Ensure efficient use of space on larger screens
   d input_adaptations   - Adapt input behavior for different input methods

--------------------------------------------------------------------------------

prompt_8b_search_state    - Track search parameters with JS variables

8b0_ state_definition   - Define state structure for search functionality
   a query_state         - Create state for current search query
   b results_state       - Define structure for search results
   c pagination_state    - Track pagination state for result navigation
   d history_state       - Define structure for search history

8b1_ state_management   - Implement state manipulation functions
   a state_initialization - Create initialization with default values
   b getter_functions    - Implement accessor functions for state properties
   c setter_functions    - Create setter functions with proper validation
   d state_reset         - Add functions for resetting to initial state

8b2_ state_persistence  - Add localStorage persistence for search state
   a save_mechanism      - Implement functions to save state to localStorage
   b load_mechanism      - Create loading mechanism for previously saved state
   c expiration_handling - Add expiration for stored search data
   d quota_management    - Handle localStorage quota limitations gracefully

8b3_ state_synchronization - Keep UI and state synchronized
   a change_detection    - Implement detection of state changes
   b ui_updates          - Create functions to update UI based on state
   c event_handling      - Connect event handlers to state changes
   d debounce_mechanism  - Add debouncing for high-frequency state changes

8b4_ url_integration    - Integrate search state with browser URL
   a query_parameters    - Reflect search state in URL query parameters
   b history_api         - Use History API for state navigation
   c deep_linking        - Support deep linking to specific search results
   d state_restoration   - Restore search state from URL parameters

--------------------------------------------------------------------------------

||||||||||||||||||||||||||||||||| YOU ARE HERE |||||||||||||||||||||||||||||||||

prompt_8c_search_logic    - Implement search algorithms with native JS

8c0_ basic_search       - Implement fundamental text search functionality
   a exact_matching      - Create exact matching for complete terms
   b substring_matching  - Implement substring matching within terms
   c case_sensitivity    - Add options for case-sensitive searching
   d term_boundary       - Support word boundary matching

8c1_ advanced_search    - Add advanced search capabilities
   a multi_term_search   - Support searching for multiple terms
   b boolean_operators   - Implement AND/OR/NOT logical operators
   c phrase_search       - Add support for exact phrase matching
   d wildcard_support    - Implement wildcard character matching

8c2_ search_optimization - Optimize search for better performance
   a indexing            - Consider creating search indexes for faster lookup
   b throttling          - Implement search throttling for input events
   c early_termination   - Use early termination for efficiency
   d incremental_search  - Support incremental search for large datasets

8c3_ relevance_scoring  - Implement relevance scoring for search results
   a match_location      - Consider match location in relevance calculation
   b match_frequency     - Use match frequency for scoring
   c term_importance     - Weight terms differently based on importance
   d recency_factor      - Consider recency in result ordering

8c4_ specialized_search - Add codename-specific search capabilities
   a root_term_search    - Support searching within specific term positions
   b type_specific_search - Add searching within specific codename types
   c structure_search    - Implement searching by codename structure
   d semantic_search     - Consider basic semantic matching for related terms

--------------------------------------------------------------------------------

prompt_8d_search_highlight - Create highlighted search results

8d0_ match_detection    - Implement algorithms for detecting search matches
   a exact_matches       - Create detection for exact matches
   b partial_matches     - Implement partial match detection
   c multi_term_matches  - Support highlighting for multiple search terms
   d match_boundaries    - Properly identify match boundaries

8d1_ highlight_rendering - Create DOM-based highlighting for matches
   a text_wrapping       - Implement text node wrapping for highlights
   b styling_application - Apply appropriate styling to highlighted text
   c nested_highlights   - Handle nested or overlapping highlights
   d performance_opt     - Optimize DOM operations for better performance

8d2_ highlight_styling  - Design visual appearance for highlighted matches
   a color_selection     - Choose appropriate highlight colors
   b contrast_checking   - Ensure sufficient contrast for readability
   c theme_compatibility - Make highlights work with light/dark themes
   d animation_effects   - Consider subtle animations for highlight emphasis

8d3_ highlight_interaction - Add interactive features to highlights
   a click_behavior      - Implement click handling for highlighted text
   b hover_effects       - Add hover effects for additional information
   c keyboard_navigation - Support keyboard navigation between highlights
   d context_display     - Show additional context around highlighted matches

8d4_ highlight_accessibility - Ensure highlights are accessible
   a screen_reader       - Make highlights perceivable by screen readers
   b keyboard_focus      - Ensure highlights can receive keyboard focus
   c color_contrast      - Verify sufficient color contrast for visibility
   d alternative_indication - Provide non-color indicators for highlights

--------------------------------------------------------------------------------

prompt_8e_search_review   - Review search system compliance and performance

8e0_ functionality_review - Assess search feature completeness
   a feature_checklist   - Create checklist of required features
   b user_flow_testing   - Test complete user flows for search functionality
   c edge_case_handling  - Verify handling of edge cases and unusual inputs
   d error_handling      - Check error handling for invalid searches

8e1_ performance_assessment - Evaluate search performance metrics
   a response_time       - Measure and optimize search response time
   b memory_usage        - Monitor memory consumption during searches
   c scaling_behavior    - Test performance with increasing dataset size
   d browser_compatibility - Verify performance across different browsers

8e2_ code_quality_review - Review search code quality and structure
   a naming_conventions  - Verify adherence to codename conventions
   b modularity          - Assess proper separation of concerns
   c reusability         - Evaluate component reusability
   d maintainability     - Check overall code maintainability

8e3_ usability_testing  - Evaluate search system usability
   a input_ergonomics    - Assess ease of use for search input
   b results_clarity     - Evaluate clarity of search results presentation
   c feedback_adequacy   - Check quality of user feedback during search
   d learning_curve      - Assess intuitiveness of search features

--------------------------------------------------------------------------------

prompt_8f_search_cache    - Implement search result caching for better performance

8f0_ cache_structure    - Design caching system for search results
   a cache_data_model    - Define data structure for cached results
   b key_generation      - Create mechanism for generating cache keys
   c size_limitations    - Implement limits for cache size
   d expiration_policy   - Define cache entry expiration strategy

8f1_ cache_operations   - Implement core cache manipulation functions
   a set_operation       - Create function for storing items in cache
   b get_operation       - Implement retrieval function with fallback
   c invalidate_function - Add mechanism for invalidating cache entries
   d clear_function      - Create function to clear entire cache

8f2_ cache_strategy     - Develop intelligent caching strategy
   a frequently_used     - Prioritize caching frequently used searches
   b predictive_caching  - Consider preemptive caching for related terms
   c partial_matches     - Cache partial results for incremental searches
   d cache_reuse         - Maximize reuse of cached results for similar queries

8f3_ cache_persistence  - Add persistence for cached search results
   a storage_mechanism   - Implement localStorage persistence
   b data_serialization  - Create efficient serialization for cache data
   c quota_management    - Handle storage quotas and limitations
   d cache_priming       - Consider cache priming on application startup

8f4_ cache_monitoring   - Add tools for monitoring cache performance
   a hit_rate_tracking   - Track and report cache hit/miss rates
   b memory_usage        - Monitor memory consumption of cache
   c performance_impact  - Measure performance improvements from caching
   d diagnostics         - Add diagnostic tools for cache behavior

--------------------------------------------------------------------------------

prompt_8g_search_history  - Add search history tracking functionality

8g0_ history_tracking   - Implement search history recording mechanism
   a history_structure   - Define data structure for search history
   b storage_mechanism   - Create persistent storage for history
   c privacy_controls    - Add options for controlling history recording
   d history_limits      - Implement appropriate size limits for history

8g1_ history_display    - Create interface for viewing search history
   a history_list        - Design list view for displaying history items
   b sorting_options     - Add options for different history sorting methods
   c filtering_options   - Implement filters for history display
   d clear_functionality - Add ability to clear history items

8g2_ history_interaction - Implement interaction with history items
   a history_reuse       - Allow reusing previous search terms
   b item_deletion       - Support deleting individual history items
   c item_annotation     - Consider adding notes or tags to history items
   d frequency_indicators - Show usage frequency for history items

8g3_ history_analytics  - Add basic analytics for search history
   a pattern_detection   - Identify patterns in search behavior
   b frequency_analysis  - Analyze term usage frequency
   c trend_visualization - Consider visualizing search trends
   d recommendation_engine - Use history for search suggestions

8g4_ history_sync       - Consider synchronization for search history
   a local_storage       - Implement reliable local storage
   b export_import       - Add functionality to export/import history
   c cross_device        - Consider options for cross-device sync
   d privacy_protection  - Ensure proper handling of potentially sensitive data

--------------------------------------------------------------------------------

prompt_8h_search_filter   - Create combined search and filter interactions

8h0_ integration_design - Design integration between search and filter systems
   a interface_unification - Create unified interface for search and filtering
   b state_coordination  - Coordinate state between search and filter systems
   c interaction_flow    - Define clear user flow for combined operations
   d visual_consistency  - Ensure visual consistency across components

8h1_ combined_operations - Implement logic for combined search and filtering
   a operation_sequence  - Define sequence for applying search and filters
   b result_management   - Handle results from combined operations
   c performance_optimization - Optimize for efficient combined operations
   d feedback_clarity    - Provide clear feedback about active constraints

8h2_ unified_controls   - Create unified controls for combined functionality
   a control_layout      - Design efficient layout for combined controls
   b state_indicators    - Add clear indicators for active constraints
   c reset_functionality - Implement unified reset for all constraints
   d saved_combinations  - Support saving search+filter combinations

8h3_ result_presentation - Optimize result display for combined operations
   a sorting_options     - Provide sorting options for combined results
   b highlight_integration - Integrate search highlighting with filtered results
   c empty_states        - Design appropriate empty states for no matches
   d result_analytics    - Add basic analytics about result distributions

8h4_ advanced_features  - Implement advanced combined features
   a keyboard_shortcuts  - Add keyboard shortcuts for efficient operation
   b url_persistence     - Support URL-based persistence of combined state
   c export_functionality - Add ability to export filtered search results
   d suggestion_system   - Provide intelligent suggestions based on current state

-------------------------------------------------------------------------------- 