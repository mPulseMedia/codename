prompt_3_data         - Design core data structures and persistence for codename application

--------------------------------------------------------------------------------

prompt_3a_schema        - Define JavaScript object structures and prototypes for codename data

3a0_ schema_base        - Create foundational data structures for codename management
   a cn_object          - Define base codename object structure with essential properties
   b cn_type_enum       - Establish enumeration for codename types (function, variable, etc.)
   c cn_group           - Create grouping structure for related codenames under roots
   d cn_term            - Define term structure for codename component representation

3a1_ cn_list_define     - Implement core data collections for codename categorization
   a cn_func_list       - Define function name collection for all application functions
   b cn_var_list        - Define variable name collection for all application state variables
   c cn_class_dom_list  - Define CSS class name collection for all DOM elements
   d cn_param_list      - Define parameter name collection for function parameters
   e cn_const_list      - Define constant name collection for application constants
   f cn_event_list      - Define event type collection for all application events
   g cn_prop_list       - Define property name collection for object properties
   h cn_file_list       - Define file name collection for application files

3a2_ term_schema        - Design data structures for term extraction and management
   a term_object        - Create term object structure with position and styling information
   b term_extractor     - Implement parser for breaking down codenames into component terms
   c term_comparator    - Define algorithm for comparing terms between different codenames
   d term_style_map     - Create mapping between term types and their visual styling

3a3_ root_schema        - Create structures for root-based codename organization
   a root_extract       - Implement utility to extract first term from any codename
   b root_group_object  - Define collapsible root group structure with state management
   c root_relation_map  - Create mapping between roots and related semantic concepts
   d root_state_tracker - Design state tracking object for group expansion status

3a4_ snippet_schema     - Define structures for code snippet storage and retrieval
   a snippet_object     - Create snippet data structure with language and formatting metadata
   b snippet_collection - Design collection structure for organizing multiple snippets
   c snippet_source_map - Implement mapping between codenames and their source snippets
   d snippet_formatter  - Define utilities for snippet formatting and syntax highlighting

--------------------------------------------------------------------------------

prompt_3b_storage       - Implement localStorage persistence layer for codename application

3b0_ storage_utils      - Create utility functions for localStorage interaction
   a storage_available  - Implement detection function for localStorage availability
   b storage_serialize  - Create utilities for JSON serialization and deserialization
   c storage_keys       - Define consistent key naming pattern for stored items
   d storage_size_check - Implement utility to check available storage space

3b1_ cn_storage         - Implement persistence for codename data collections
   a cn_save            - Create function to save full codename collections to localStorage
   b cn_load            - Implement function to load codename data from localStorage
   c cn_update          - Create selective update function for modifying stored codenames
   d cn_version_track   - Implement versioning for stored data to manage schema changes

3b2_ filter_storage     - Create persistence for filter and search preferences
   a filter_state_save  - Implement save function for filter button states
   b filter_state_load  - Create loading function to restore filter configuration
   c search_history     - Implement persistence for recent search queries
   d view_preferences   - Create storage for UI view preferences and configurations

3b3_ snippet_storage    - Develop persistence for code snippet caching
   a snippet_cache_save - Implement save function for code snippet caching
   b snippet_cache_load - Create loading function for retrieving cached snippets
   c snippet_cache_clear - Implement cache clearing functionality for refresh
   d snippet_version    - Create versioning system for snippet cache validity

3b4_ storage_fallback   - Design fallback mechanisms for when storage is unavailable
   a in_memory_fallback - Implement in-memory storage when localStorage is unavailable
   b storage_limit_handling - Create handlers for storage quota exceeded scenarios
   c data_recovery      - Implement recovery mechanisms for corrupted stored data
   d default_data       - Design system for loading default data when storage is empty

--------------------------------------------------------------------------------

prompt_3c_access        - Create data access functions and module patterns for codename data

3c0_ module_pattern     - Establish module pattern for encapsulated data access
   a module_namespace   - Define consistent namespace pattern for data modules
   b private_scope      - Implement private scope for internal data protection
   c public_interface   - Create public interfaces for controlled data access
   d dependency_inject  - Design dependency injection pattern for module connections

3c1_ cn_access          - Implement codename data access and management functions
   a cn_get_by_type     - Create function to retrieve codenames filtered by type
   b cn_get_by_root     - Implement function to get codenames organized by root term
   c cn_search          - Create search function with term matching capabilities
   d cn_filter          - Implement combined filtering function with multiple criteria
   e cn_sort            - Create sorting utilities for different codename display orders

3c2_ term_access        - Create term extraction and manipulation utilities
   a term_extract_all   - Implement function to extract all terms from codename collections
   b term_frequency     - Create function to analyze term usage frequency
   c term_relation      - Implement utilities to identify related terms
   d term_stem          - Create stemming function to identify term variations

3c3_ snippet_access     - Develop code snippet retrieval and management functions
   a snippet_get        - Create function to retrieve snippets for a specific codename
   b snippet_format     - Implement snippet formatting with syntax highlighting
   c snippet_search     - Create search function for finding text within snippets
   d snippet_context    - Implement context extraction for showing relevant code sections

3c4_ event_system       - Create event management system for data changes
   a event_publish      - Implement event publishing for data state changes
   b event_subscribe    - Create subscription mechanism for data change notifications
   c event_unsubscribe  - Implement cleanup function for event listener management
   d event_throttle     - Create throttling utility for high-frequency data events

--------------------------------------------------------------------------------

prompt_3d_review        - Review and refine data model and codename conventions

3d1_ data_audit         - Conduct comprehensive review of data model implementation
   a schema_verify      - Verify schema compliance with application requirements
   b naming_check       - Review consistency of property and method naming
   c access_patterns    - Evaluate effectiveness of data access patterns
   d performance_review - Assess data structure performance with realistic data loads

3d2_ cn_convention      - Review codename convention implementation and consistency
   a cn_pattern_audit   - Verify consistent pattern usage across all codenames
   b term_extraction_test - Test term extraction with various codename formats
   c root_grouping_verify - Verify correct root term grouping functionality
   d naming_guideline_doc - Document codename construction guidelines and patterns

3d3_ storage_test       - Evaluate persistence layer functionality and reliability
   a storage_size_test  - Test storage with varying data sizes to assess limits
   b serialization_verify - Verify correct serialization and deserialization
   c recovery_test      - Test data recovery mechanisms with corrupted data
   d persistence_verify - Verify data persistence across page reloads and sessions

3d4_ access_review      - Review data access patterns for efficiency and security
   a module_pattern_verify - Verify proper implementation of module pattern
   b interface_clean    - Ensure clean and consistent public interfaces
   c dependency_check   - Review module dependencies for proper separation
   d security_review    - Assess data access for potential security issues

||||||||||||||||||||||||||||||||| YOU ARE HERE |||||||||||||||||||||||||||||||||

--------------------------------------------------------------------------------
