<< YOU ARE HERE >> 

--------------------------------------------------------------------------------

prompt_1_start          - Define core workflow rules for project execution

1a_ go                  - When I type "go" in chat, locate the << YOU ARE HERE >> marker 
  1 locate_marker      - Find the marker in prompt files to determine next actions
  2 retrieve_segment   - Retrieve and process the next prompt segment for execution

1b_ step                - Only execute one step of the prompt at a time for controlled progress
  1 single_execution   - Execute just one prompt segment before awaiting further instruction
  2 bounded_scope      - Maintain clear boundaries around the current execution scope

1c_ wait                - For this prompt, don't execute anything beyond updating marker position
  1 marker_update      - But do update the << YOU ARE HERE >> marker position

1d_ here                - Track progress through prompt files using marker positioning
  1 marker_movement    - Move the marker lower in the prompt file to track progress
  2 file_progression   - Progress to next file when current file is fully processed

1g_ codename            - Use rule_codename files to understand naming conventions and structures
  1 naming_standard    - Reference codename rules for term selection and formatting standards
   b hierarchy          - Follow prescribed term hierarchies from codename rule files
   c consistent_naming  - Adhere to established project naming standards during implementation

1j_ format              - Use rule_format files to understand documentation and code formatting
   a format_standard    - Reference format rules for documentation and code appearance
   b alignment          - Follow prescribed alignment and spacing conventions from format files
   c consistent_format  - Maintain consistent formatting according to established standards

1e_ prompt              - Use prompt_ files to retrieve and manage development instructions
   a next_prompt        - Retrieve the next prompt to process based on marker position
   b preview_upcoming   - Preview and understand upcoming prompt segments for context
   c modify_prompts     - Modify upcoming prompts if needed to adapt to project changes

1f_ req                 - Use req_ files to understand application requirements and specifications
   a requirements       - Refer to requirement files for functional specifications
   b feature_details    - Review detailed feature requirements before implementation
   c compliance_check   - Ensure implementations comply with documented requirements


1h_ roles               - Understand the project roles and responsibilities clearly
   a assistant_role     - You: AI assistant skilled in app development following PM direction
   b manager_role       - Me: Product manager who defines requirements and reviews your work
   c collaboration      - Work together through structured development and feedback cycles

1i_ project             - Help develop complete application following structured methodology
   a complete_app       - Build fully functional application meeting all requirements
   b structured_approach - Follow the defined process and architectural approaches
   c incremental_dev    - Develop incrementally through defined prompt sequence

--------------------------------------------------------------------------------