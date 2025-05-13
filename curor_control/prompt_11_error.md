prompt_11_error         - Implement error handling with try/catch for codename system

--------------------------------------------------------------------------------

prompt_11a_capture        - Add error logging with native JS

11a0_ error_types        - Define error types and categories for the system
   a validation_errors   - Define errors related to input validation
   b runtime_errors      - Identify potential runtime errors
   c network_errors      - Define errors related to network operations
   d state_errors        - Identify errors related to application state

11a1_ error_structure    - Design error object structure
   a message_format      - Define standardized error message format
   b metadata_capture    - Identify relevant metadata to capture
   c stack_trace         - Include stack trace information
   d error_context       - Capture contextual information about errors

11a2_ try_catch_implementation - Implement try/catch blocks in critical code
   a critical_paths      - Identify critical code paths requiring try/catch
   b error_transformation - Transform native errors to application errors
   c scope_management    - Define appropriate scope for try/catch blocks
   d performance_considerations - Balance error handling with performance

11a3_ async_error_handling - Handle errors in asynchronous code
   a promise_errors      - Implement error handling for Promises
   b async_await_errors  - Handle errors in async/await code
   c event_errors        - Capture errors in event handlers
   d timeout_errors      - Handle errors in setTimeout/setInterval

11a4_ logging_system     - Implement error logging system
   a console_logging     - Create console-based logging for development
   b level_based_logging - Implement log levels (error, warn, info, debug)
   c log_formatting      - Define standard log format for consistency
   d log_storage         - Consider storage options for error logs

--------------------------------------------------------------------------------

prompt_11b_display        - Create error notification elements with DOM manipulation

11b0_ notification_design - Design error notification components
   a visual_style        - Create visual styling for error notifications
   b severity_indicators - Design visual indicators for error severity
   c animation_effects   - Add subtle animations for notification appearance
   d responsive_layout   - Ensure notifications work across screen sizes

11b1_ notification_placement - Determine optimal placement for notifications
   a context_sensitive   - Place notifications near relevant UI elements
   b global_notifications - Create global notification area for system errors
   c stacking_behavior   - Define behavior for multiple notifications
   d z_index_management  - Ensure proper layering with other UI elements

11b2_ notification_components - Implement notification UI components
   a message_display     - Create component for displaying error message
   b action_buttons      - Add action buttons for error response
   c dismiss_controls    - Implement controls for dismissing notifications
   d expandable_details  - Add expandable section for error details

11b3_ notification_lifecycle - Manage notification appearance and dismissal
   a display_timing      - Define timing for automatic notification display
   b persistence_rules   - Determine which notifications persist
   c dismissal_behavior  - Implement automatic and manual dismissal
   d animation_transitions - Create smooth transitions for appearing/disappearing

11b4_ notification_accessibility - Ensure notifications are accessible
   a screen_reader_announcements - Create appropriate announcements
   b keyboard_focus      - Manage focus for interactive notifications
   c aria_live_regions   - Implement ARIA live regions for notifications
   d color_contrast      - Ensure sufficient color contrast for readability

--------------------------------------------------------------------------------

prompt_11c_recovery       - Implement error recovery mechanisms

11c0_ recovery_strategies - Define strategies for error recovery
   a retry_mechanism     - Implement automatic retry for transient errors
   b fallback_options    - Create fallback behaviors for critical operations
   c graceful_degradation - Design graceful degradation paths
   d state_rollback      - Implement state rollback for failed operations

11c1_ user_guided_recovery - Create user-guided recovery options
   a action_suggestions  - Provide suggested actions for recovery
   b user_instructions   - Create clear instructions for error resolution
   c confirmation_dialogs - Implement confirmation for recovery actions
   d progress_indication - Show progress during recovery operations

11c2_ data_integrity     - Ensure data integrity during error recovery
   a validation_checks   - Implement validation before recovery actions
   b consistency_enforcement - Ensure state consistency after recovery
   c transaction_model   - Consider transaction-like approach for operations
   d backup_restoration  - Support restoration from backup data if available

11c3_ prevention_measures - Implement error prevention mechanisms
   a input_validation    - Add thorough input validation to prevent errors
   b state_validation    - Validate application state before operations
   c defensive_programming - Use defensive programming techniques
   d predictive_alerts   - Add warnings for potential error conditions

11c4_ learning_system    - Implement system improvements based on errors
   a error_analysis      - Analyze error patterns for systemic issues
   b adaptive_behavior   - Create adaptive behavior based on error history
   c self_correction     - Implement self-correction mechanisms where possible
   d telemetry_collection - Consider collecting anonymized error telemetry

-------------------------------------------------------------------------------- 