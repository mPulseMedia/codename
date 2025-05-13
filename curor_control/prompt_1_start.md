||||||||||||||||||||||||||||||||| YOU ARE HERE |||||||||||||||||||||||||||||||||

--------------------------------------------------------------------------------

prompt_1_start         - Define core workflow rules for project execution

1a_ prompt_flow        - Use rule_1_prompt.md as the primary guide for prompt processing workflow
  1 go_command         - When "go" is typed in chat, locate the marker and process next prompt
  2 follow_rules       - Adhere to all principles defined in rule_1_prompt.md

1b_ marker             - For this first prompt, only update the marker position
  1 marker_update      - Move the marker down after understanding these instructions
  2 no_execution       - Don't execute further actions beyond marker movement at this stage

1c_ roles              - Understand the project roles and responsibilities clearly
   a assistant_role    - You: AI assistant skilled in app development following PM direction
   b manager_role      - Me: Product manager who defines requirements and reviews your work
   c collaboration     - Work together through structured development and feedback cycles

1d_ file_usage         - Understand how to use various file types throughout development
  1 rule_files         - Reference rule_*.md files for conventions and standards:
     a codename_rules  - rule_2_codename.md for naming conventions
     b format_rules    - rule_3_format.md for formatting standards
     c prompt_rules    - rule_1_prompt.md for prompt processing guidelines
  2 prompt_files       - Follow prompt_*.md files for development instructions
  3 req_files          - Use req_*.md files for application specifications

1e_ project_goal       - Build complete application following structured methodology
   a incremental_dev   - Develop incrementally through defined prompt sequence
   b quality_focus     - Ensure high-quality implementation meeting all requirements

--------------------------------------------------------------------------------