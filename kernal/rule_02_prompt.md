////////////////////////////////////////////////////////////////////////////////

rule_02_prompt

_2a__ _terminology      - Standard prompt terminology
_2a_1    _prompt_file   - Physical markdown file containing prompts
_2a_2    _prompt_group  - Collection of related prompts within a prompt_file
_2a_3    _prompt        - Written prompts that were or will be entered to an AI copilot
_2a_4    _summary       - Short description of what the prompt does and appears as the first line in the prompt
_2a_5    _task_name     - Identifier for a task
_2a_6    _task          - Detailed implementation instruction within a prompt
_2a_7    _marker        - Indicator showing current execution position within prompt files
_2a_8    _rule          - Established guidelines and constraints for project workflow
_2a_9    _separator     - Visual divider between sections in files
_2a10    _file          - Digital document containing structured content
_2a11    _alignment     - Visual arrangement for readability and structure

_2b__ _process          - Process for prompts
_2b_1    _command       - When "do" is typed in chat, locate the /// YOU ARE HERE /// marker
_2b_2    _sync          - If markers are out of sync then first ask what to do -- because it isn't clear which one to choose
_2b_3    _tracking      - Find the marker in prompt_files to determine next actions
_2b_4    _retrieval     - Retrieve and process the next prompt or prompt_group for execution
_2b_5    _control       - Only execute one prompt or prompt_group at a time for controlled progress
_2b_6    _scope         - Maintain clear boundaries around the current execution scope
_2b_7    _limits        - Don't create features, files, or functionality not directly requested

_2c__ _movement         - Movement of markers
_2c_1    _initial       - At project start, the /// YOU ARE HERE /// marker appears at the TOP of 
                           both the prompt_00_outline.md file and the prompt_01_start.md file, before 
                           any prompt content.
_2c_2    _update        - IMPORTANT: After processing a prompt, move the /// YOU ARE HERE /// marker 
                           to the BOTTOM of the prompt that was just processed as the final step.
                           Never place the marker before or in the middle of a prompt.
_2c_3    _sync          - Always update the marker in both the active prompt_file AND in the 
                           prompt_00_outline file to ensure they remain synchronized.
_2c_4    _unique        - The marker should only appear in a prompt_file and a prompt_00_outline file, and nowhere else.
_2c_5    _progress      - Progress to next file when current file is fully processed
_2c_6    _indicator     - Use the marker as a visual indicator of execution progress
_2c_7    _next          - Clearly identify the next prompt based on marker position

_2d__ _execution        - Executing prompts efficiently
_2d_1    _isolation     - Execute only the relevant prompt rather than entire prompt_group or files
_2d_2    _focus         - Keep implementation focused on current task without scope creep
_2d_3    _completion    - Complete one prompt before moving to the next
_2d_4    _verify        - Verify implementation meets requirements before proceeding
_2d_5    _explicit      - Only implement what is explicitly requested, nothing more
_2d_6    _minimal       - Use the simplest implementation that satisfies requirements

_2e__ _documentation    - Documenting process
_2e_1    _notes         - Add implementation notes directly after executing a prompt
_2e_2    _outcomes      - Document specific outcomes, changes, and decisions made
_2e_3    _challenges    - Note any challenges encountered and their resolutions
_2e_4    _next          - Include recommendations for next steps after completion

_2f__ _brevity          - Brief chat messages
_2f_1    _concise       - Keep chat responses approximately half the typical length
_2f_2    _direct        - Provide direct, to-the-point answers without excessive explanations
_2f_3    _essential     - Include only essential information needed to address the query
_2f_4    _minimal       - Minimize contextual explanations unless specifically requested
_2f_5    _action        - Focus on actions taken rather than explaining process details
_2f_6    _examples      - Include minimal examples only when necessary for clarity

_2g__ _outline          - Outline prompt format
_2g_1    _toplevel      - Only include the summaries of each prompt in prompt_groups
_2g_2    _past          - Make sure the summaries in each place match
_2g_3    _future        - Populate future prompt summaries
_2g_4    _marker        - Also include /// YOU ARE HERE /// marker in outline prompt_file

//////////////////////////////////////////////////////////////////////////////// 