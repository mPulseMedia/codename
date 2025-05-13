prompt_9_lookup         - Create lookup functionality with DOM manipulation for codenames

--------------------------------------------------------------------------------

prompt_9a_lookup_ui       - Develop lookup DOM elements and styling

9a0_ lookup_container   - Design container for lookup functionality
   a container_layout    - Create flexible layout for lookup display
   b responsive_design   - Ensure lookup works across different screen sizes
   c position_management - Implement appropriate positioning system
   d close_mechanism     - Add clear mechanism for dismissing lookup

9a1_ lookup_header      - Create header section for lookup display
   a title_area          - Design title area with codename display
   b action_buttons      - Add buttons for common actions
   c navigation_controls - Implement controls for navigating between results
   d context_information - Display relevant context information

9a2_ content_area       - Design content area for lookup details
   a section_organization - Create logical sections for different content types
   b scrolling_behavior  - Implement appropriate scrolling behavior
   c variable_content    - Support different content types and lengths
   d responsive_layout   - Ensure content adapts to available space

9a3_ code_display       - Implement code example display
   a syntax_highlighting - Add syntax highlighting for code examples
   b line_numbers        - Include line numbers for code navigation
   b copy_functionality  - Implement copy-to-clipboard functionality
   c code_folding        - Consider code folding for longer examples

9a4_ related_items      - Create section for related codenames
   a relation_display    - Design visual presentation of related items
   b grouping_mechanism  - Group related items by relationship type
   c interactive_links   - Make related items interactive for navigation
   d relevance_indication - Show relevance or relationship strength

--------------------------------------------------------------------------------

prompt_9b_lookup_cache    - Implement caching for faster lookups

9b0_ cache_structure    - Define data structure for lookup cache
   a cache_model         - Create object model for cached lookup data
   b key_generation      - Implement mechanism for generating cache keys
   c metadata_tracking   - Add tracking for metadata like timestamp
   d size_management     - Define approach for managing cache size

9b1_ cache_operations   - Implement core cache manipulation functions
   a store_operation     - Create function for adding items to cache
   b retrieve_operation  - Implement function for retrieving cached items
   c update_operation    - Add function for updating existing cache entries
   d invalidate_operation - Create mechanism for invalidating cache entries

9b2_ cache_strategy     - Define intelligent caching strategy
   a prioritization      - Implement priority system for cache retention
   b preemptive_caching  - Add preemptive caching for likely lookups
   c partial_caching     - Support caching partial lookup data
   d cache_coordination  - Coordinate with other caches in the system

9b3_ persistence        - Implement cache persistence mechanisms
   a storage_mechanism   - Use localStorage for persistent caching
   b serialization       - Create efficient serialization approach
   c deserialization     - Implement robust deserialization with validation
   d error_handling      - Add proper error handling for persistence failures

9b4_ cache_management   - Create tools for managing cache health
   a monitoring_tools    - Implement functions for monitoring cache usage
   b cleanup_routines    - Create cleanup procedures for stale entries
   c manual_controls     - Add manual controls for cache management
   d diagnostics         - Implement diagnostic tools for cache issues

--------------------------------------------------------------------------------

prompt_9c_lookup_logic    - Implement lookup algorithms with direct DOM access

9c0_ lookup_triggers    - Create trigger mechanisms for lookup activation
   a click_triggers      - Implement click-based lookup activation
   b keyboard_triggers   - Add keyboard shortcuts for lookup
   c programmatic_api    - Create API for programmatic lookup activation
   d contextual_triggers - Support context-based automatic lookups

9c1_ data_retrieval     - Implement data retrieval for lookup content
   a direct_access       - Create direct data access for local codenames
   b dynamic_loading     - Implement dynamic loading for additional data
   c fallback_strategy   - Add fallback strategy for missing data
   d error_handling      - Implement proper error handling for data retrieval

9c2_ content_generation - Create dynamic content generation for lookup display
   a template_system     - Implement template-based content generation
   b dynamic_sections    - Support dynamic sections based on available data
   c lazy_rendering      - Add lazy rendering for performance optimization
   d content_sanitization - Ensure proper sanitization of dynamic content

9c3_ interaction_handling - Implement interaction handlers for lookup components
   a click_handling      - Create handlers for click interactions
   b keyboard_navigation - Implement keyboard navigation within lookup
   c touch_handling      - Support touch interactions for mobile devices
   d focus_management    - Create proper focus management system

9c4_ performance_optimization - Optimize lookup performance
   a render_optimization - Optimize DOM rendering operations
   b dom_reuse           - Implement DOM element reuse strategies
   c animation_performance - Ensure smooth animations for lookup display
   d memory_management   - Add proper memory management and cleanup

--------------------------------------------------------------------------------

prompt_9d_lookup_review   - Review lookup feature usability and performance

9d0_ usability_assessment - Evaluate lookup feature usability
   a interaction_flow    - Review complete user interaction flow
   b discoverability     - Assess feature discoverability
   c feedback_quality    - Evaluate quality of user feedback
   d error_recovery      - Test error handling and recovery paths

9d1_ performance_evaluation - Assess lookup feature performance
   a response_time       - Measure lookup activation response time
   b rendering_speed     - Evaluate content rendering performance
   c memory_consumption  - Monitor memory usage during lookup operations
   d cache_effectiveness - Assess cache hit rate and effectiveness

9d2_ convention_compliance - Review compliance with codename conventions
   a naming_conventions  - Verify consistent use of snake_case
   b function_signatures - Review function parameter naming and order
   c boolean_naming      - Check proper use of _is suffix for booleans
   d term_consistency    - Ensure consistent terminology throughout

9d3_ documentation      - Ensure comprehensive documentation
   a function_docs       - Review documentation of public functions
   b usage_examples      - Verify existence of clear usage examples
   c implementation_notes - Check for notes on important implementation details
   d troubleshooting     - Include troubleshooting information for common issues

-------------------------------------------------------------------------------- 