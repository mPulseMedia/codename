rule_3b_convention

3b_ convention           - Prompt convention usage

   a intro_format        - Start each prompt group with a brief summary explaining purpose
   b summary_format      - Use consistent format for all prompt summaries
   c name_rule           - Use consistent identifiers (e.g., prompt_1b_struct) as references
   d desc_style          - Write tasks in present tense imperative form for clarity
   e prompt_reuse        - Allow revisiting and modifying prompts as needed during development

3b1_ intro_format        - Format introductions
   a overview            - Include overview of prompts with clear organizational structure
   b purpose             - State clear purpose summary at the beginning of each prompt group 
   c concise             - Keep summary brief while providing necessary context
   d scannable           - Format for easy scanning with consistent visual hierarchy

3b3_ name_rule           - Rule for naming
   a reference           - Create identifiers that serve as both plan references and history
   b hierarchy           - Follow established numbering convention for hierarchical structure
   c consistency         - Maintain naming consistency across all project documentation
   d snake_case          - Use snake_case for all identifiers with meaningful component parts

3b4_ summary_style       - Style summaries
   a omit_you            - Omit "You" when AI assistant is implied subject in summaries
   b action_verbs        - Use action verbs (create, implement, design) for clear direction
   c we_review           - Use "we" for collaborative review steps to indicate partnership
   d specificity         - Be specific about expected outcomes for each instruction point

3b5_ prompt_reuse        - Reuse prompts
   a iteration           - Allow for iterative refinement of prompts throughout development
   b modification        - Make targeted modifications to address changing requirements
   c documentation       - Document changes to prompts with clear rationale for adjustments
   d versioning          - Indicate version changes when modifying previously executed prompts

3b6_ impl                - Implementation focus
   a focus               - Submit only the relevant prompt rather than the entire prompt group
   b isolation           - Keep implementation focused on current task without scope creep
   c completion          - Complete one prompt before moving to the next for clarity
   d verification        - Verify implementation meets requirements before proceeding further

3b7_ docs                - Documentation notes
   a notes_section       - Document in a designated notes section for reference and tracking
   b outcomes            - Record specific outcomes, changes, and decisions made during execution
   c challenges          - Note any challenges encountered and how they were resolved
   d next_steps          - Include recommendations for next steps or future considerations
   e dependencies        - Document any dependencies created or affected by implementation

3b8_ version             - Version control
   a reason              - Document reason for modification to maintain implementation history
   b tracking            - Enable tracking of evolution of prompts throughout development
   c clarity             - Provide clear versioning to avoid confusion about current state
   d reference           - Include references to previous versions for complete documentation

3b9_ here_mark           - Mark location
   a marker_movement     - Move the marker down after each prompt is executed for clarity
   b visual_indicator    - Use marker to indicate which prompts have been completed
   c progress_tracking   - Maintain clear visual indication of project execution progress
   d next_task           - Clearly identify next task to be executed in the sequence

--------------------------------------------------------------------------------

rule_3c_format

3c_ format               - Formatting files

   a consistency         - Maintain consistent formatting across all project documents
   b readability         - Ensure high readability with clear visual hierarchy and spacing
   c structure           - Follow structured approach to organization of prompt content
   d alignment           - Use proper alignment for enhanced visual scanning and navigation

3c1_ format_parts        - Format structure
   a separator           - Horizontal line of equals signs (====) for major section breaks
   b prompt_structure    - Follow prompt terminology defined in rule_1_prompt.md (1a1_prompt_codenames)
   c spacing             - Maintain consistent spacing between structural elements
   d alignment           - Align related elements (task_name, summary, etc.) for clarity
   e visual_hierarchy    - Create clear visual distinction between different prompt levels

3c2_ numbering           - Format numbers
   a consistency         - Maintain consistent numbering scheme throughout documentation
   b underscore          - Add underscore after section number (e.g., "2a1_" instead of "2a1")
   c spacing             - Ensure proper spacing between number and description text
   d hierarchy           - Use numbering to indicate hierarchical relationships between items

3c3_ hierarchy           - Hierarchical levels
   a level_indicators    - Follow established level indicators for consistent hierarchy:
                            1 First level: Numbers (1, 2, 3)
                            2 Second level: Lowercase letters (a, b, c)
                            3 Third level: Numbers (1, 2, 3)
                            4 Fourth level: Lowercase letters (a, b, c, d)
   b format_identifiers  - Format identifiers without periods between or after levels
   c consistent_spacing  - Apply consistent spacing with 3 spaces before letter identifiers
   d separator_alignment - Align all dashes consistently within each section grouping

3c4_ id                  - Identify items
   a meaningful_terms    - Choose meaningful terms that reflect content purpose and function
   b nouns_descriptive   - Use nouns for descriptive items (e.g., "format", "spacing")
   c verbs_action        - Use verbs for action items (e.g., "create", "define")
   d snake_case_lower    - Follow snake_case convention with lowercase for multi-word identifiers

3c5_ align               - Alignment techniques
   a hierarchy_levels    - Apply alignment rules to all hierarchy levels and bullet points
   b dash_position       - Position dashes consistently with proper spacing before description
   c section_consistency - Maintain consistent alignment across the entire document
   d parent_child        - Align dashes in parent and child items for clean visual hierarchy

3c6_ wrapping            - Wrap text
   a text_length         - Never allow text to exceed 80 characters per line for visibility
   b break_points        - Break at logical points (after commas, before conjunctions)
   c wrapped_alignment   - Align wrapped text with the first letter of the description text
   d consistent_rules    - Apply wrapping rules consistently across ALL prompt files
   e readability         - Prioritize readability over strict adherence to character count

3c7_ separator           - Separate sections
   a section_boundaries  - Place before and after each prompt for clear separation
   b visual_boundaries   - Create clear visual boundaries between major content sections
   c exact_width         - Ensure separators are exactly 80 characters wide for consistency
   d complete_separation - Include separator at beginning and end of document for completeness

3c8_ bullets             - Bullet formatting
   a dash_format         - Use dash (-) for all bullet points with consistent formatting
   b indent_spaces       - Indent 5 spaces from the start of parent text for proper hierarchy
   c alternating_usage   - Use as alternative to alphanumeric hierarchy when reference not needed
   d descriptive_content - Apply bullets for descriptive content rather than sequential actions

3c9_ file_name           - Name files
   a naming_convention   - Follow established naming convention for all project documentation
   b descriptive_names   - Choose descriptive names that reflect file content and purpose
   c numbering_sequence  - Use numbers to indicate sequence and organization of files
   d consistent_format   - Maintain consistent file naming format across project documentation

3c10_ summary_length     - Length of summaries
   a one_line_ideal      - Ideally fit summaries on one line while providing necessary detail
   b complex_breakdown   - Break complex concepts into multiple tasks for clarity and focus
   c sub_bullet_detail   - Use sub-bullet points for detail when additional explanation needed
   d scannable_clarity   - Ensure all summaries are clear, scannable, and actionable
   e prompt_brevity      - Keep prompt summaries extremely short (3-4 words maximum)
   f task_name_match     - Use task_name words in the summary for clarity and consistency
   g codename_rules      - All codenames must follow the conventions in rule_2_codename.md
   h sub_detail          - Use more detailed descriptions for task items to provide context

3c11_ align_symbol       - Symbol alignment
   a colon_alignment     - Align colons and other symbols in lists for visual consistency
   b documentation_lists - In documentation lists, align symbols at consistent positions
   c code_examples       - Align assignment operators and other symbols in code examples
   d section_consistency - Maintain consistent alignment within related documentation sections

3c12_ prompt_naming      - Name prompt files and identifiers
   a standard_format     - Use standardized naming format as defined in rule_1_prompt.md
   b consistency         - Maintain consistent naming patterns across all prompt files
   c reference_tracking  - Enable tracking of prompt execution through systematic naming
   d versioning          - Include versioning when modifying existing prompt content

3c13_ summary_case       - Case summaries
   a capital_first       - Start all summaries with a capital letter for readability
   b sentence_style      - Write summaries in sentence-style capitalization
   c consistency         - Maintain consistent capitalization across all documentation
   d examples            - "Create file structure" not "create file structure"
                           "Define variables" not "define variables"

--------------------------------------------------------------------------------

rule_3d_comm

3d_ chat_comm            - Communication guidelines

   a clarity             - Ensure clear communication about changes and updates
   b specificity         - Be specific about which sections or elements are being referenced
   c consistency         - Maintain consistent terminology in communications about files
   d efficiency          - Keep communications focused and efficient for productive work

3d1_ use_code            - Code references
   a reference_format    - Format references consistently for easy identification
   b example_clarity     - Example: applied rule_3_format 3c11_align_symbol to document
   c specific_references - Reference specific line numbers or sections when applicable
   d tracking_support    - Support tracking of changes through clear reference usage

3d2_ concise             - Concise updates
   a bullet_usage        - Use bullet points for multiple changes to enhance readability
   b minimal_explanation - Minimize explanatory text to focus on actual changes made
   c change_focus        - Focus on what changed rather than explaining rationale
   d actionable_updates  - Ensure updates provide actionable information for next steps

-------------------------------------------------------------------------------- 