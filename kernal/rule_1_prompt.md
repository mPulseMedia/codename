////////////////////////////////////////////////////////////////////////////////

rule_1_prompt              - Prompt rules processing

1a1_ prompt_codenames   - Standard prompt terminology
   a prompt_file        - Physical markdown file containing prompts (e.g., prompt_1_start.md)
   b prompt_group       - Collection of related prompts within a prompt_file
   c prompt             - Individual instruction unit within a prompt_group with specific function
   d summary            - First line short description of what the prompt does (defined in rule_2_codename.md)
   e task_name          - Short word after outline number identifying the task type (defined in rule_2_codename.md)
   f task               - Detailed implementation instructions within a prompt (defined in rule_2_codename.md)
   g marker             - Position indicator (defined in rule_2_codename.md)
   h rule               - Established constraint or guideline (defined in rule_2_codename.md)
   i separator          - Visual divider between document sections (defined in rule_3_format.md)
   j file               - Physical document containing structured content (defined in rule_2_codename.md)
   k alignment          - Visual arrangement for readability and structure (defined in rule_3_format.md)

1a_ prompt_process      - Process for prompts
   a do_command         - When "do" is typed in chat, locate the /// YOU ARE HERE /// marker
   b sync               - if they are are out of sync then first ask me what to do -- because it isn't clear which one to choose.
   b marker_tracking    - Find the marker in prompt_files to determine next actions
   c prompt_process     - Retrieve and process the next prompt or prompt_group for execution
   d prompt_control     - Only execute one prompt or prompt_group at a time for controlled progress
   e scope_limit        - Maintain clear boundaries around the current execution scope
   f strict_adherence   - Implement only features explicitly specified in the prompts
   g no_assumptions     - Don't create features, files, or functionality not directly requested

1a2_ marker_movement    - Movement of markers
   a initial_position   - At project start, the /// YOU ARE HERE /// marker appears at the TOP of 
                          both the prompt_outline.md file and the prompt_1_start.md file, before 
                          any prompt content.
   b position_update    - IMPORTANT: After processing a prompt, move the /// YOU ARE HERE /// marker 
                          to the BOTTOM of the prompt that was just processed as the final step.
                          Never place the marker before or in the middle of a prompt.
   c marker_sync        - Always update the marker in both the active prompt_file AND in the 
                          prompt_outline.md file to ensure they remain synchronized.
   d one_only           - The marker should only appear in a prompt_file and a prompt_outline file, and nowhere else.
   e file_progress      - Progress to next file when current file is fully processed
   f visual_indicator   - Use the marker as a visual indicator of execution progress
   g next_task          - Clearly identify the next prompt based on marker position

1a3_ prompt_execution   - Executing prompts efficiently
   a isolation          - Execute only the relevant prompt rather than entire prompt_group or files
   b focus_maintenance  - Keep implementation focused on current task without scope creep
   c completion_verify  - Complete one prompt before moving to the next
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

1a6_ outline_format     - Outline prompt format
   a top_level          - Only include the summaries of each prompt in prompt_groups
   b past               - Make sure the summaries in each place match
   c future             - Populate future prompt summaries
   d marker_include     - Also include /// YOU ARE HERE /// marker in outline prompt_file

//////////////////////////////////////////////////////////////////////////////// 