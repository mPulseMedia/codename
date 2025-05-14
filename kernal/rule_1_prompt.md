rule_1_prompt              - Prompt rules processing

1a_ prompt_process      - Process for prompts
   a do_command         - When "do" is typed in chat, locate the << YOU ARE HERE >> marker
   b marker_tracking    - Find the marker in prompt files to determine next actions
   c segment_process    - Retrieve and process the next prompt segment for execution
   d step_control       - Only execute one step of the prompt at a time for controlled progress
   e scope_limit        - Maintain clear boundaries around the current execution scope
   f no_skip            - Don't jump ahead or execute steps beyond the << YOU ARE HERE >> marker
   g strict_adherence   - Implement only features explicitly specified in the prompts
   h no_assumptions     - Don't create features, files, or functionality not directly requested

1a2_ marker_movement    - Movement of markers
   a position_update    - IMPORTANT: After processing a prompt segment, move the << YOU ARE HERE >> marker to the BOTTOM of the prompt segment that was just processed. Never place the marker before or in the middle of a segment.
   b one_only           - The market should only appear in one place in the prompt files.
   c file_progress      - Progress to next file when current file is fully processed
   d visual_indicator   - Use the marker as a visual indicator of execution progress
   e next_task          - Clearly identify the next task based on marker position

1a3_ prompt_execution   - Executing prompts efficiently
   a isolation          - Execute only the relevant section rather than entire files
   b focus_maintenance  - Keep implementation focused on current task without scope creep
   c completion_verify  - Complete one prompt section before moving to the next
   d requirement_check  - Verify implementation meets requirements before proceeding
   e explicit_only      - Only implement what is explicitly requested, nothing more
   f minimal_approach   - Use the simplest implementation that satisfies requirements

1a4_ documentation      - Documenting process
   a notes_addition     - Add implementation notes directly after executing a prompt
   b outcome_record     - Document specific outcomes, changes, and decisions made
   c challenge_note     - Note any challenges encountered and their resolutions
   d next_step_include  - Include recommendations for next steps after completion

1a5_ chat_brevity       - Brief chat messages
   a concise_replies    - Keep chat responses approximately half the typical length
   b direct_answers     - Provide direct, to-the-point answers without excessive explanations
   c essential_only     - Include only essential information needed to address the query
   d reduced_context    - Minimize contextual explanations unless specifically requested
   e action_focus       - Focus on actions taken rather than explaining process details
   f example_light      - Include minimal examples only when necessary for clarity

-------------------------------------------------------------------------------- 