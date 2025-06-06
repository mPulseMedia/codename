--------------------------------------------------------------------------------

prompt_1_start         - Define core workflow rules for project execution

1a_ prompt_flow        - Use rule_1_prompt.md as the primary guide for prompt processing workflow
   1 do_command        - When I say "do prompt xxx", then grab that prompt or prompt section and do it
   2 follow_rules      - Follow all of the rules in rule_1_prompt.md closely
   3 stop              - After you execute the specific prompt indicated stop and don't execute more 
                          of the steps lower in the file

1b_ prompt_this        - For just this prompt
   1 read              - The main thing is to read in the prompt and really study the rule and 
                          requirement documents

1c_ methodology        - Follow the codename methodology strictly
   1 rule_file         - Reference rule_*.md files for strict conventions, standards and rules
      a rule_1_prompt  - rule_1_prompt.md for prompt strict processing guidelines and rules
      b rule_2_codename - rule_2_codename.md for strict naming conventions and rules
      c rule_3_format  - rule_3_format.md for strict formatting standards and rules
      d IMPORTANT      - Always follow these rules in absolutely every single added of a rule 
                          prompt or requirement file
   2 prompt_file       - Follow prompt_*.md files for development instructions
   3 req_file          - Use req_*.md files for application specifications

1d_ prompt_marker      - Move or create a marker is a line by itself that says << YOU ARE HERE >>
   1 marker_location   - Put the marker after the prompt or prompt segment that you just processed

1e_ role_list          - Understand the project roles and responsibilities clearly
   a you               - You: AI assistant skilled in app development who passionately follows the
                          codename methodology of developing projects
   b manager_role      - Me: Product manager who defines requirements and reviews your work

1f_ file_usage         - Understand how to use various file types throughout development

1g_ project_goal       - Build complete application following structured methodology
   a incremental_dev   - Develop incrementally through defined prompt sequence
   b quality_focus     - Ensure high-quality implementation meeting all requirements

--------------------------------------------------------------------------------