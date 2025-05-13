rule_2b_convention

2b_ convention           - Conventions for using prompts in the development process

   a intro_format        - Start each prompt file with a brief sentence explaining purpose
   b exec_flow           - Execute prompts sequentially, documenting implementation notes
   c name_rule           - Use consistent identifiers (e.g., prompt_1b_struct) as references
   d desc_style          - Write instructions in present tense imperative form for clarity
   e prompt_reuse        - Allow revisiting and modifying prompts as needed during development

2b1_ intro_format        - Start each prompt file with a brief sentence explaining
   a overview            - Include overview of sections with clear organizational structure
   b purpose             - State clear purpose statement at the beginning of each file 
   c concise             - Keep introduction brief while providing necessary context
   d scannable           - Format for easy scanning with consistent visual hierarchy

2b2_ exec_flow           - Execute prompts sequentially, documenting implementation
   a sequence            - Follow established order when executing prompt sections
   b document            - Record implementation notes and modifications after execution
   c iterate             - Revisit and refine implementations as needed during development
   d track               - Maintain history of executed prompts for project documentation
   e backtrack           - Document any need to revisit previous steps in the sequence

2b3_ name_rule           - Use consistent identifiers (e.g., prompt_1b_struct)
   a reference           - Create identifiers that serve as both plan references and history
   b hierarchy           - Follow established numbering convention for hierarchical structure
   a consistency         - Maintain naming consistency across all project documentation
   b snake_case          - Use snake_case for all identifiers with meaningful component parts

2b4_ desc_style          - Write instructions in present tense imperative form
   a omit_you            - Omit "You" when AI assistant is implied subject in instructions
   b action_verbs        - Use action verbs (create, implement, design) for clear direction
   c we_review           - Use "we" for collaborative review steps to indicate partnership
   d specificity         - Be specific about expected outcomes for each instruction point

2b5_ prompt_reuse        - Prompts may be revisited, modified, and resubmitted as needed
   a iteration           - Allow for iterative refinement of prompts throughout development
   b modification        - Make targeted modifications to address changing requirements
   c documentation       - Document changes to prompts with clear rationale for adjustments
   d versioning          - Indicate version changes when modifying previously executed prompts

2b6_ impl                - When executing a prompt, submit only that specific prompt section
   a focus               - Submit only the relevant section rather than the entire file
   b isolation           - Keep implementation focused on current task without scope creep
   c completion          - Complete one prompt section before moving to the next for clarity
   d verification        - Verify implementation meets requirements before proceeding further

2b7_ docs                - After execution, add implementation notes directly below the prompt
   a notes_section       - Document in a designated notes section for reference and tracking
   b outcomes            - Record specific outcomes, changes, and decisions made during execution
   c challenges          - Note any challenges encountered and how they were resolved
   d next_steps          - Include recommendations for next steps or future considerations
   e dependencies        - Document any dependencies created or affected by implementation

2b8_ version             - When modifying a previously executed prompt, indicate version change
   a reason              - Document reason for modification to maintain implementation history
   b tracking            - Enable tracking of evolution of prompts throughout development
   c clarity             - Provide clear versioning to avoid confusion about current state
   d reference           - Include references to previous versions for complete documentation

2b9_ here_mark           - Place the "YOU ARE HERE" marker within the file for tracking
   a marker_movement     - Move the marker down after each prompt is executed for clarity
   b visual_indicator    - Use marker to indicate which prompts have been completed
   c progress_tracking   - Maintain clear visual indication of project execution progress
   d next_task           - Clearly identify next task to be executed in the sequence

--------------------------------------------------------------------------------

rule_2c_format

2c_ format               - Formatting rules for all prompt files in the project codebase

   a consistency         - Maintain consistent formatting across all project documents
   b readability         - Ensure high readability with clear visual hierarchy and spacing
   c structure           - Follow structured approach to organization of prompt content
   d alignment           - Use proper alignment for enhanced visual scanning and navigation

2c1_ format_parts        - Components of prompt files in visual order (top to bottom)
   a separator           - Horizontal line of equals signs (====) for major section breaks
   b prompt_section      - Area between separator lines containing related instructions
   c prompt_name         - Identifier with format: prompt_name: prompt_#_name for reference
   d outline_num         - Hierarchical identifier (e.g., 1a2) following numbering convention
   e keyword             - Short word after outline number (e.g., "env") for quick reference
   f desc                - Text to right of dash after keyword containing actual instructions
   g sub_items           - Indented points under main description with relevant details

2c2_ numbering           - Use number without period for main sections (1 env)
   a consistency         - Maintain consistent numbering scheme throughout documentation
   b underscore          - Add underscore after section number (e.g., "2a1_" instead of "2a1")
   c spacing             - Ensure proper spacing between number and description text
   d hierarchy           - Use numbering to indicate hierarchical relationships between items

2c3_ hierarchy           - Use alphanumeric characters for hierarchical levels
   a level_indicators    - Follow established level indicators for consistent hierarchy:
                            1 First level: Numbers (1, 2, 3)
                            2 Second level: Lowercase letters (a, b, c)
                            3 Third level: Numbers (1, 2, 3)
                            4 Fourth level: Lowercase letters (a, b, c, d)
   b format_identifiers  - Format identifiers without periods between or after levels
   c consistent_spacing  - Apply consistent spacing with 3 spaces before letter identifiers
   d separator_alignment - Align all dashes consistently within each section grouping

2c4_ id                  - Use descriptive one-word identifiers for each line in documentation
   a meaningful_terms    - Choose meaningful terms that reflect content purpose and function
   b nouns_descriptive   - Use nouns for descriptive items (e.g., "format", "spacing")
   c verbs_action        - Use verbs for action items (e.g., "create", "define")
   d snake_case_lower    - Follow snake_case convention with lowercase for multi-word identifiers

2c5_ align               - Align all descriptions and dashes for consistent visual layout
   a hierarchy_levels    - Apply alignment rules to all hierarchy levels and bullet points
   b dash_position       - Position dashes consistently with proper spacing before description
   c section_consistency - Maintain consistent alignment across the entire document
   d parent_child        - Align dashes in parent and child items for clean visual hierarchy

2c6_ wrapping            - Wrap ALL long descriptions at or before 80 chars for readability
   a text_length         - Never allow text to exceed 80 characters per line for visibility
   b break_points        - Break at logical points (after commas, before conjunctions)
   c wrapped_alignment   - Align wrapped text with the first letter of the description text
   d consistent_rules    - Apply wrapping rules consistently across ALL prompt files
   e readability         - Prioritize readability over strict adherence to character count

2c7_ separator           - Use 80-character separator lines (----------------) between sections
   a section_boundaries  - Place before and after each prompt section for clear separation
   b visual_boundaries   - Create clear visual boundaries between major content sections
   c exact_width         - Ensure separators are exactly 80 characters wide for consistency
   d complete_separation - Include separator at beginning and end of document for completeness

2c8_ bullets             - Use bullet points for descriptive content when appropriate
   a dash_format         - Use dash (-) for all bullet points with consistent formatting
   b indent_spaces       - Indent 5 spaces from the start of parent text for proper hierarchy
   c alternating_usage   - Use as alternative to alphanumeric hierarchy when reference not needed
   d descriptive_content - Apply bullets for descriptive content rather than sequential actions

2c9_ file_name           - Use descriptive file names with format: type_#_name.md for clarity
   a naming_convention   - Follow established naming convention for all project documentation
   b descriptive_names   - Choose descriptive names that reflect file content and purpose
   c numbering_sequence  - Use numbers to indicate sequence and organization of files
   d consistent_format   - Maintain consistent file naming format across project documentation

2c10_ desc_length        - Keep prompt descriptions concise yet detailed within character limits
   a one_line_ideal      - Ideally fit descriptions on one line while providing necessary detail
   b complex_breakdown   - Break complex concepts into multiple steps for clarity and focus
   c sub_bullet_detail   - Use sub-bullet points for detail when additional explanation needed
   d scannable_clarity   - Ensure all descriptions are clear, scannable, and actionable

2c11_ align_symbol       - Apply symbol alignment rules for enhanced readability
   a colon_alignment     - Align colons and other symbols in lists for visual consistency
   b documentation_lists - In documentation lists, align symbols at consistent positions
   c code_examples       - Align assignment operators and other symbols in code examples
   d section_consistency - Maintain consistent alignment within related documentation sections

2c12_ prompt_name        - Include prompt_name identifier at the start of each prompt section
   a format_standard     - Format: prompt_name: prompt_#x_name for clear identification
   b section_header      - Use same identifier as the section header for consistency
   c reference_tracking  - Enable tracking and history of prompt execution through naming
   d execution_history   - Support documentation of execution history through consistent naming

2c13_ desc_case          - Apply consistent capitalization to all description text
   a capital_first       - Start all descriptions with a capital letter for readability
   b sentence_style      - Write descriptions in sentence-style capitalization
   c consistency         - Maintain consistent capitalization across all documentation
   d examples            - "Create file structure" not "create file structure"
                           "Define variables" not "define variables"

--------------------------------------------------------------------------------

rule_2d_comm

2d_ chat_comm            - Rules for chat communication about prompts and documentation

   a clarity             - Ensure clear communication about changes and updates
   b specificity         - Be specific about which sections or elements are being referenced
   c consistency         - Maintain consistent terminology in communications about files
   d efficiency          - Keep communications focused and efficient for productive work

2d1_ use_code            - Reference established codenames in chat updates for clarity
   a reference_format    - Format references consistently for easy identification
   b example_clarity     - Example: applied rule_2_format 2c11_align_symbol to document
   c specific_references - Reference specific line numbers or sections when applicable
   d tracking_support    - Support tracking of changes through clear reference usage

2d2_ concise             - Keep chat updates brief and to the point for efficient communication
   a bullet_usage        - Use bullet points for multiple changes to enhance readability
   b minimal_explanation - Minimize explanatory text to focus on actual changes made
   c change_focus        - Focus on what changed rather than explaining rationale
   d actionable_updates  - Ensure updates provide actionable information for next steps

-------------------------------------------------------------------------------- 