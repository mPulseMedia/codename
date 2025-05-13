================================================================================

prompt_name: prompt_3a_schema

3a1_ entity              - Define core data entities for application data model
   a create_structures   - JavaScript object structures for primary data entities
   b define_relations    - relationships between different entities in the data system
   c establish_types     - property formats and validation rules for data fields
   d document_design     - schema design decisions and architectural approach

3a2_ types               - Create shared type documentation for consistent data handling
   a define_common       - data structures used across multiple functions and modules
   b create_utils        - utility functions for generic operations on data structures
   c implement_checks    - runtime validation for all data structures and properties

3a3_ validate            - Implement data validation for application integrity
   a define_rules        - validation rules for each entity to ensure data quality
   b create_validators   - validation utilities for form inputs and data submission
   c implement_checks    - runtime data checking where needed during execution
   d document_requirements - validation requirements for each entity type

3a4_ schema_review       - Review data schema design for completeness and usability
   a validate_schema     - schema against application requirements and use cases
   b check_consistency   - consistency across all entity definitions and references
   c ensure_data_safety  - proper data validation throughout the application

================================================================================

prompt_name: prompt_3b_storage

3b1_ local_store         - Implement localStorage persistence for offline capability
   a create_utils        - utilities for saving data to localStorage with versioning
   b implement_serialization - data serialization and deserialization for storage
   c add_versioning      - versioning for schema compatibility and data migration
   d handle_limits       - storage limits and fallbacks when browser limits reached

3b2_ state_sync          - Synchronize application state with storage for data consistency
   a create_sync         - utilities to sync JS variables with storage automatically
   b implement_updates   - optimistic updates for better UX during save operations
   c handle_events       - storage events for multi-tab support across browser windows
   d add_error_handling  - error handling for storage operations with user feedback

3b3_ cache               - Implement caching mechanisms for performance optimization
   a create_memory       - in-memory cache for frequently accessed data structures
   b implement_invalidation - cache invalidation strategies based on data changes
   c add_ttl             - TTL (time-to-live) for cached items to prevent stale data
   d optimize_perf       - performance through strategic caching of expensive operations

3b4_ store_test          - Test storage functionality for reliability and edge cases
   a verify_persistence  - data persistence across page refreshes and browser sessions
   b test_limits         - storage limit handling with graceful degradation
   c validate_sync       - storage sync mechanisms under various network conditions
   d measure_perf        - performance of storage operations under typical load

================================================================================

prompt_name: prompt_3c_access

3c1_ functions           - Create data access functions for consistent data handling
   a implement_entity_funcs - functions for each data entity with CRUD operations
   b create_operation_funcs - functions for common data operations across entities
   c add_states          - loading and error states to functions for UI feedback
   d ensure_consistency  - consistent API across all data functions for usability

3c2_ modules             - Implement module pattern for data access and organization
   a create_modules      - data module organization with proper encapsulation
   b implement_accessors - accessors for optimized retrieval of structured data
   c add_memoization     - memoization for performance on expensive computations
   d provide_access      - global data access patterns with proper security controls

3c3_ mutation            - Create data mutation utilities with validation and history
   a implement_crud      - CRUD operations for all entities with proper validation
   b add_optimistic      - optimistic updates for UI responsiveness during saves
   c create_undo         - undo/redo functionality for user data manipulation
   d implement_validation - data validation before mutations to maintain integrity

3c4_ accessor            - Optimize data selection for efficient data retrieval
   a create_getters      - methods for derived data that compute from base entities
   b implement_memo      - memoization for expensive computations with dependencies
   c establish_patterns  - patterns for view-specific data filtering and sorting

================================================================================

prompt_name: prompt_3d_review

3d1_ api_review          - Review data access API design for usability and completeness
   a ensure_consistency  - consistent API patterns across all data utilities
   b verify_errors       - proper error handling throughout the data layer
   c check_perf          - performance of data operations under various conditions
   d document_patterns   - API design patterns for developer reference

3d2_ data_check          - Verify data integrity across application components
   a test_persistence    - data persistence across different scenarios and edge cases
   b verify_consistency  - data consistency across views and application states
   c check_corruption    - for potential data corruption issues and recovery paths
   d implement_recovery  - data recovery mechanisms for handling damaged data

3d3_ perform             - Optimize data performance for responsive user experience
   a measure_optimize    - and optimize data operation performance with benchmarks
   b implement_monitoring - performance monitoring to identify bottlenecks
   c add_benchmarks      - for critical data operations with performance thresholds

3d4_ docs                - Complete data system documentation for maintainability
   a document_entities   - all data entities and their properties with diagrams
   b create_examples     - usage examples for data functions and utilities
   c document_flow       - data flow throughout the application architecture

================================================================================
