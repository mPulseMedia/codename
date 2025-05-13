prompt_5_ui           - Develop vanilla DOM manipulation and CSS for codename application

--------------------------------------------------------------------------------

prompt_5a_layouts        - Create responsive layouts with CSS Grid/Flexbox

5a0_ layout_base        - Implement foundational layout structure for application
   a app_container      - Create main container element for entire application
   b app_title          - Design title header section for application identity
   c app_content        - Implement main content area container for UI components
   d app_columns        - Create two-column layout structure for index and lookup

5a1_ column_layout      - Implement responsive column-based layout organization
   a app_column_left    - Create left column for filter and index components
   b app_column_right   - Design right column for lookup and placeholder elements
   c column_responsive  - Implement responsive behavior for different screen sizes
   d column_proportions - Define appropriate width ratios for balanced interface

5a2_ filter_layout      - Design filter panel layout with intuitive organization
   a filter_container   - Create container element for all filtering controls
   b filter_top_row     - Design horizontal row for primary filter interface
   c filter_search_area - Implement search input area with efficient space usage
   d filter_buttons     - Create button array layout with flexbox for filter toggles
   e filter_reset_area  - Design reset controls area for clear functionality

5a3_ index_layout       - Create scrollable index layout for codename display
   a index_container    - Implement scrollable container for codename index
   b root_group_layout  - Design collapsible group structure for organized display
   c root_header_layout - Implement header layout for root group with caret
   d root_content_layout - Create content layout for codenames within groups
   e index_scroll       - Design smooth scrolling behavior for navigation

5a4_ lookup_layout      - Implement code snippet lookup panel layout
   a lookup_container   - Create container for code snippet display
   b lookup_header      - Design header section with title and controls
   c lookup_content     - Implement content area for formatted code snippets
   d placeholder_layout - Design initial placeholder message layout
   e lookup_responsive  - Create responsive behavior for different screen widths

--------------------------------------------------------------------------------

prompt_5b_components     - Develop reusable DOM creation functions

5b0_ element_factory    - Create core DOM element factory functions
   a element_create     - Implement versatile function for creating DOM elements
   b element_configure  - Create utility for configuring element properties
   c element_append     - Implement child appending with efficient batch operations
   d element_remove     - Create utility for safely removing elements from DOM

5b1_ component_system   - Develop functional component system for UI elements
   a component_create   - Implement base component factory with lifecycle hooks
   b component_update   - Create controlled update mechanism for components
   c component_mount    - Implement mounting process for component insertion
   d component_unmount  - Create clean unmounting with event listener cleanup

5b2_ filter_components  - Implement filter interface components
   a filter_button_create - Create function for filter toggle button components
   b search_input_create - Implement search input field with clear functionality
   c reset_button_create - Create reset button component with confirmation
   d filter_group_create - Implement container component for filter controls

5b3_ index_components   - Develop codename index display components
   a root_group_create  - Create collapsible root group component function
   b root_header_create - Implement interactive header component for groups
   c cn_element_create  - Create codename element component with styling
   d term_container_create - Implement term container for visual term separation
   e term_element_create - Create styled term element for codename parts

5b4_ lookup_components  - Implement code snippet lookup components
   a lookup_window_create - Create lookup window component function
   b lookup_header_create - Implement header component with controls
   c code_display_create - Create code snippet display with formatting
   d placeholder_create - Implement placeholder component for initial state
   e close_button_create - Create button component for dismissing lookup

--------------------------------------------------------------------------------

prompt_5c_theming        - Implement theme system with CSS variables

5c0_ theme_system       - Create foundational theming system architecture
   a variable_setup     - Implement CSS variable system for theme properties
   b theme_switch       - Create theme switching functionality for user preference
   c theme_persist      - Implement theme preference persistence in localStorage
   d color_functions    - Create utility functions for color manipulation

5c1_ color_palette      - Define comprehensive color system with semantic roles
   a primary_colors     - Define primary brand color palette with variations
   b secondary_colors   - Create complementary secondary color palette
   c neutral_colors     - Implement neutral grayscale palette for structure
   d semantic_colors    - Define purpose-based colors (success, warning, error)
   e syntax_colors      - Create syntax highlighting color scheme for code

5c2_ type_colors        - Implement codename type-specific color system
   a func_color         - Define function codename color (yellow) with variations
   b var_color          - Create variable codename color (white) with variations
   c class_color        - Implement class codename color (purple) with variations
   d param_color        - Define parameter codename color (blue) with variations
   e const_color        - Create constant codename color (green) with variations
   f event_color        - Implement event codename color (red) with variations
   g prop_color         - Define property codename color (orange) with variations

5c3_ dark_theme         - Implement dark theme color scheme
   a dark_background    - Create dark background colors for UI elements
   b dark_surface       - Define darker surface colors for components
   c dark_text          - Implement text colors optimized for dark mode
   d dark_syntax        - Create syntax highlighting scheme for dark background
   e dark_filter        - Implement filter button styling for dark theme

5c4_ light_theme        - Create light theme color scheme
   a light_background   - Define light background colors for UI elements
   b light_surface      - Create lighter surface colors for components
   c light_text         - Implement text colors optimized for light mode
   d light_syntax       - Create syntax highlighting scheme for light background
   e light_filter       - Implement filter button styling for light theme

--------------------------------------------------------------------------------

prompt_5d_elements       - Build core UI elements (buttons, inputs, cards)

5d0_ form_elements      - Implement styled form control elements
   a input_text         - Create styled text input with consistent appearance
   b input_checkbox     - Implement custom checkbox component with animation
   c input_radio        - Create radio button component with visual feedback
   d input_select       - Implement dropdown select with styled appearance
   e button_style       - Create consistent button styling with states

5d1_ filter_elements    - Build styled filter interface elements
   a filter_button      - Implement toggle button with active/inactive states
   b search_input       - Create search input with clear button functionality
   c reset_button       - Implement reset button with confirmation interaction
   d filter_group       - Create styled container for filter control groups

5d2_ index_elements     - Develop styled codename index elements
   a root_group_style   - Implement collapsible group styling with animations
   b root_header_style  - Create interactive header with hover and active states
   c cn_element_style   - Implement codename element with appropriate type styling
   d term_container_style - Create container styling for terms with spacing
   e root_caret_style   - Implement animated caret for expansion indicator

5d3_ lookup_elements    - Build code snippet lookup UI elements
   a lookup_window_style - Create styled window component with shadow and border
   b lookup_header_style - Implement header styling with title and controls
   c code_display_style - Create code snippet display with syntax highlighting
   d placeholder_style  - Implement styled placeholder with instructional text
   e close_button_style - Create dismiss button with hover and active states

5d4_ state_indicators   - Implement visual state indicators
   a loading_indicator  - Create loading spinner or progress indicator
   b empty_state        - Implement empty state visual for no results
   c error_indicator    - Create error state visual for operation failures
   d success_indicator  - Implement success confirmation visual feedback
   e copied_indicator   - Create "Copied!" feedback indicator for clipboard

--------------------------------------------------------------------------------

prompt_5e_accessibility  - Ensure keyboard navigation and screen reader support

5e0_ keyboard_nav       - Implement comprehensive keyboard navigation system
   a focus_management   - Create focus management system for logical tab order
   b keyboard_shortcuts - Implement application shortcuts for power users
   c focus_trap         - Create focus trapping for modal dialogs and overlays
   d focus_style        - Implement visible focus indicators for all interactive elements

5e1_ aria_attributes    - Add appropriate ARIA attributes for screen readers
   a role_assignment    - Implement correct ARIA roles for custom components
   b aria_labels        - Add descriptive aria-label for unlabeled controls
   b aria_live          - Implement aria-live regions for dynamic content updates
   c aria_expanded      - Add appropriate aria-expanded state for collapsible content
   d aria_controls      - Implement aria-controls for relationship indication

5e2_ screen_reader      - Ensure comprehensive screen reader compatibility
   a alt_text           - Add appropriate alt text for all non-text content
   b sr_only_text       - Implement visually hidden text for context when needed
   c semantic_structure - Create proper heading structure for document outline
   d meaningful_sequence - Ensure logical reading order in document flow
   e announcement       - Implement screen reader announcements for state changes

5e3_ input_alternatives - Provide alternative input methods for accessibility
   a touch_target       - Ensure adequately sized touch targets for motor control
   b pointer_control    - Implement pointer event handling with fallbacks
   c input_fallbacks    - Create alternative input methods where appropriate
   d speech_recognition - Add optional speech input for search functionality
   e gesture_support    - Implement standard gesture support for touch devices

5e4_ color_accessibility - Ensure color scheme meets accessibility requirements
   a contrast_ratio     - Verify all text meets WCAG AA contrast requirements
   b color_blindness    - Test and adapt design for color blindness compatibility
   c high_contrast      - Implement high contrast mode for enhanced visibility
   d non_color_indicators - Add redundant non-color indicators for state changes
   e themeable_focus    - Create focus indicators that work in all themes

--------------------------------------------------------------------------------

prompt_5f_review         - Evaluate UI functionality and usability

5f1_ ui_audit           - Conduct comprehensive UI functionality audit
   a component_verify   - Test all UI components for correct functionality
   b responsive_test    - Verify responsive layout behavior across screen sizes
   c style_consistency  - Review visual consistency across application
   d theme_toggle_test  - Verify theme switching and persistence functionality
   e animation_review   - Evaluate animation performance and appropriateness

5f2_ accessibility_test - Conduct thorough accessibility evaluation
   a keyboard_test      - Verify complete keyboard navigation functionality
   b screen_reader_test - Test screen reader compatibility and announcements
   c color_contrast     - Verify contrast ratios meet WCAG AA requirements
   d focus_indicator    - Ensure visible focus indicators are available
   e semantic_review    - Verify proper document semantics and structure

5f3_ performance_audit  - Evaluate UI rendering and interaction performance
   a render_time        - Measure initial rendering performance metrics
   b interaction_perf   - Test interaction responsiveness and fluidity
   c memory_usage       - Measure memory consumption during extended use
   d paint_metrics      - Analyze browser paint and layout operations
   e animation_perf     - Verify animation performance on lower-end devices

5f4_ documentation      - Create comprehensive UI documentation
   a component_docs     - Document all UI components and their usage
   b style_guide        - Create visual style guide with design patterns
   c theme_docs         - Document theming system and customization options
   d accessibility_guide - Create accessibility guidelines for future development
   e improvement_plan   - Develop prioritized improvement roadmap for UI

-------------------------------------------------------------------------------- 