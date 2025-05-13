rule_1_prompt              - Rules for retrieving and processing prompt instructions

1a_ prompt_process      - Core rules for processing prompt instructions and commands
   a go_command         - When "go" is typed in chat, locate the << YOU ARE HERE >> marker
   b marker_tracking    - Find the marker in prompt files to determine next actions
   c segment_process    - Retrieve and process the next prompt segment for execution
   d step_control       - Only execute one step of the prompt at a time for controlled progress
   e scope_limit        - Maintain clear boundaries around the current execution scope
   f no_skip            - Don't jump ahead or execute steps beyond the << YOU ARE HERE >> marker

1a2_ marker_movement    - Rules for marker position tracking and updates
   a position_update    - IMPORTANT: After processing a prompt segment, move the << YOU ARE HERE >> marker to the BOTTOM of the prompt segment that was just processed. Never place the marker before or in the middle of a segment.
   b file_progress      - Progress to next file when current file is fully processed
   c visual_indicator   - Use the marker as a visual indicator of execution progress
   d next_task          - Clearly identify the next task based on marker position

1a3_ prompt_execution   - Rules for executing prompt commands efficiently
   a isolation          - Execute only the relevant section rather than entire files
   b focus_maintenance  - Keep implementation focused on current task without scope creep
   c completion_verify  - Complete one prompt section before moving to the next
   d requirement_check  - Verify implementation meets requirements before proceeding

1a4_ documentation      - Rules for documenting prompt execution and progress
   a notes_addition     - Add implementation notes directly after executing a prompt
   b outcome_record     - Document specific outcomes, changes, and decisions made
   c challenge_note     - Note any challenges encountered and their resolutions
   d next_step_include  - Include recommendations for next steps after completion

-------------------------------------------------------------------------------- 