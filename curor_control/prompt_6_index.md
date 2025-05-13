prompt_6_index         - Build the primary index viewing feature for codename management

--------------------------------------------------------------------------------

prompt_6a_list           - Create index listing with vanilla JS sorting

6a0_ index_setup        - Implement foundational index structure for codename listing
   a index_container     - Create container element for the entire codename index
   b index_structure     - Define layout structure with proper hierarchy 
   c index_root_groups   - Implement root-based grouping for codename organization
   d index_sorting       - Add sorting mechanisms for different codename attributes

6a1_ group_interface    - Create expandable group interface for organizing codenames
   a group_container     - Implement container elements for grouped codenames
   b group_header        - Create interactive header for expanding/collapsing groups
   c group_content       - Design content area for displaying codenames within groups
   d group_animation     - Add smooth animations for group expansion and collapse

6a2_ sorting_system     - Implement sorting functionality for codename organization
   a sort_parameters     - Define sorting parameters (alphabetical, type, frequency)
   b sort_ui             - Create interface controls for changing sort order
   c sort_algorithm      - Implement efficient sorting with vanilla JS array methods
   d sort_persistence    - Add localStorage persistence for sort preferences

6a3_ visual_hierarchy   - Design clear visual hierarchy for codename display
   a visual_levels       - Create distinct styling for different hierarchy levels
   b nesting_indicators  - Implement visual indicators for nested relationships
   c emphasis_system     - Create emphasis system for highlighting importance
   d spacing_rhythm      - Implement consistent spacing for better readability

6a4_ lazy_loading       - Add lazy loading for better performance with large datasets
   a scroll_detection    - Implement scroll position detection for lazy loading
   b chunk_rendering     - Create chunked rendering approach for large codename lists
   c placeholder_system  - Design placeholder elements during loading process
   d scroll_performance  - Optimize scroll performance with throttled event handlers

--------------------------------------------------------------------------------

prompt_6b_details         - Implement DOM-based detail view for codename items

6b0_ detail_layout      - Create layout structure for codename detail display
   a detail_container    - Implement container for codename details
   b detail_header       - Create header section with codename and actions
   c detail_content      - Design content area for detailed information
   d detail_sections     - Organize information into logical sections

6b1_ term_breakdown     - Implement visual breakdown of codename terms
   a term_extraction     - Create term extraction from codename strings
   b term_visualization  - Design visual representation of component terms
   c term_meanings       - Display explanations for each term component
   d term_reference      - Add reference to related terms and conventions

6b2_ usage_examples     - Provide code examples and usage guidelines
   a example_display     - Create code example display with syntax highlighting
   b example_tabs        - Design tabbed interface for multiple examples
   c example_context     - Add contextual information for each example
   d example_copy        - Implement code copying functionality

6b3_ codename_metadata  - Display additional metadata for selected codename
   a type_indication     - Clearly indicate codename type (function, variable, etc.)
   b usage_frequency     - Show usage frequency metrics if available
   b related_codenames   - Display related codenames based on shared terms
   c convention_rules    - Reference relevant naming convention rules

6b4_ action_buttons     - Implement action buttons for codename management
   a copy_button         - Create button for copying codename to clipboard
   b reference_button    - Add button for generating reference links
   c example_add         - Implement functionality for adding new examples
   d feedback_button     - Create mechanism for providing feedback on codenames

--------------------------------------------------------------------------------

prompt_6c_actions         - Add core DOM event handlers for interaction

6c0_ selection_handling - Implement selection handling for codename list
   a click_selection     - Create click event handlers for selecting codenames
   b keyboard_selection  - Add keyboard navigation for accessibility
   c selection_highlight - Implement visual highlighting for selected item
   d multi_selection     - Consider support for selecting multiple codenames

6c1_ keyboard_shortcuts - Add keyboard shortcuts for efficient navigation
   a shortcut_definition - Define useful keyboard shortcuts for common actions
   b shortcut_handling   - Implement event handlers for keyboard shortcuts
   c shortcut_feedback   - Provide visual feedback when shortcuts are used
   d shortcut_help       - Create help overlay for available shortcuts

6c2_ drag_interactions  - Consider drag interactions for enhanced usability
   a drag_selection      - Implement drag to select multiple codenames
   b drag_grouping       - Consider drag to group or categorize codenames
   c drag_reordering     - Add drag functionality for custom sorting
   d touch_support       - Ensure proper support for touch interactions

6c3_ context_menu       - Implement context menu for additional actions
   a menu_creation       - Create custom context menu with relevant actions
   b menu_positioning    - Handle proper positioning based on click location
   c menu_actions        - Implement handlers for context menu actions
   d menu_keyboard       - Add keyboard support for context menu navigation

6c4_ event_delegation   - Optimize event handling with delegation patterns
   a delegation_setup    - Implement event delegation for better performance
   b event_bubbling      - Use proper event bubbling for efficient handling
   c memory_management   - Ensure proper cleanup to prevent memory leaks
   d performance_check   - Verify event handling performance with large datasets

--------------------------------------------------------------------------------

prompt_6d_review          - Assess index feature functionality and codename conventions

6d0_ feature_review     - Review index feature functionality and user experience
   a feature_checklist   - Create checklist of required functionality
   b interaction_test    - Test all interaction paths for proper behavior
   c edge_case_handling  - Verify handling of edge cases and errors
   d performance_review  - Assess performance with varying data sizes

6d1_ convention_audit   - Audit codebase for consistent codename conventions
   a naming_consistency  - Verify consistent use of snake_case conventions
   b term_usage          - Check consistent use of terms across the codebase
   c abbreviation_usage  - Review appropriate use of abbreviations
   d boolean_naming      - Verify proper use of _is suffix for booleans

6d2_ code_quality       - Evaluate code quality and maintainability
   a organization        - Review logical organization of code
   b modularity          - Assess proper separation of concerns
   c comment_quality     - Check quality and usefulness of comments
   d reusability         - Evaluate reusability of components and functions

6d3_ documentation      - Ensure proper documentation of index functionality
   a api_documentation   - Document public API methods and parameters
   b usage_examples      - Provide clear examples of feature usage
   c implementation_notes - Document key implementation decisions
   d future_improvements - Note potential areas for future enhancement

-------------------------------------------------------------------------------- 