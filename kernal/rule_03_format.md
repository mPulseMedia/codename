////////////////////////////////////////////////////////////////////////////////

rule_03_format

_3a__ _convention        - Prompt convention usage
_3a_1    _everything     - Start each prompt_group with a brief summary explaining purpose
_3a_2    _summary        - Use consistent format for all prompt_summaries
_3a_3    _name           - Use consistent identifiers (e.g., prompt_struct) as references
_3a_4    _style          - Write tasks in present tense imperative form for clarity
_3a_5    _reuse          - Allow revisiting and modifying prompts as needed during development

_3b__ _introduction      - Format introductions
_3b_1    _overview       - Include overview of prompts with clear organizational structure
_3b_2    _purpose        - State clear purpose summary at the beginning of each prompt_group 
_3b_3    _concise        - Keep summary brief while providing necessary context
_3b_4    _scannable      - Format for easy scanning with consistent visual hierarchy

_3c__ _naming            - Rule for naming
_3c_1    _reference      - Create identifiers that serve as both plan references and history
_3c_2    _hierarchy      - Follow established numbering convention for hierarchical structure
_3c_3    _consistency    - Maintain naming consistency across all project documentation
_3c_4    _snake          - Use snake_case for all identifiers with meaningful component parts

_3d__ _style              - Style summaries
_3d_1    _omit            - Omit "You" when AI assistant is implied subject in prompt_summaries
_3d_2    _action          - Use action verbs (create, implement, design) for clear direction
_3d_3    _we              - Use "we" for collaborative review steps to indicate partnership
_3d_4    _specificity     - Be specific about expected outcomes for each instruction point

_3e__ _reuse              - Reuse prompts
_3e_1    _iteration       - Allow for iterative refinement of prompts throughout development
_3e_2    _modification    - Make targeted modifications to address changing requirements
_3e_3    _documentation   - Document changes to prompts with clear rationale for adjustments
_3e_4    _versioning      - Indicate version changes when modifying previously executed prompts

_3f__ _implementation     - Implementation focus
_3f_1    _focus           - Submit only the relevant prompt rather than the entire prompt_group
_3f_2    _isolation       - Keep implementation focused on current task without scope creep
_3f_3    _completion      - Complete one prompt before moving to the next for clarity
_3f_4    _verification    - Verify implementation meets requirements before proceeding further

_3g__ _documentation      - Documentation notes
_3g_1    _notes           - Document in a designated notes section for reference and tracking
_3g_2    _outcomes        - Record specific outcomes, changes, and decisions made during execution
_3g_3    _challenges      - Note any challenges encountered and how they were resolved
_3g_4    _next            - Include recommendations for next steps or future considerations
_3g_5    _dependencies    - Document any dependencies created or affected by implementation

_3h__ _version            - Version control
_3h_1    _reason          - Document reason for modification to maintain implementation history
_3h_2    _tracking        - Enable tracking of evolution of prompts throughout development
_3h_3    _clarity         - Provide clear versioning to avoid confusion about current state
_3h_4    _reference       - Include references to previous versions for complete documentation

_3i__ _mark               - Mark location
_3i_1    _movement        - Move the marker down after each prompt is executed for clarity
_3i_2    _indicator       - Use marker to indicate which prompts have been completed
_3i_3    _progress        - Maintain clear visual indication of project execution progress
_3i_4    _next            - Clearly identify next task to be executed in the sequence

////////////////////////////////////////////////////////////////////////////////

_3j__ _format             - Formatting files
_3j_1    _consistency     - Maintain consistent formatting across all project documents
_3j_2    _readability     - Ensure high readability with clear visual hierarchy and spacing
_3j_3    _structure       - Follow structured approach to organization of content
_3j_4    _alignment       - Use proper alignment for enhanced visual scanning and navigation

_3k__ _structure          - Format structure
_3k_1    _separator       - Horizontal line of forward slashes for major section breaks
_3k_2    _terminology     - Follow prompt terminology defined in rule_02_prompt
_3k_3    _spacing         - Maintain consistent spacing between structural elements
_3k_4    _alignment       - Align related elements (task_name, summary, etc.) for clarity
_3k_5    _hierarchy       - Create clear visual distinction between different levels

_3l__ _display            - Group display format
_3l_1    _position        - Display group identifier on a separate line after separator
_3l_2    _format          - Format as "filename group" without dash or summary
_3l_3    _standalone      - Keep group identifier on its own line, separate from content
_3l_4    _hierarchy       - Use this placement to establish clear parent-child relationship

_3m__ _file_naming        - File naming conventions
_3m_1    _convention      - Follow established naming convention for all documentation
_3m_2    _descriptive     - Choose descriptive names that reflect file content and purpose
_3m_3    _numbering       - Use two-digit numbers to indicate sequence and organization
_3m_4    _consistent      - Maintain consistent file naming format across documentation
_3m_5    _extension       - Use .md extension for all documentation files
_3m_6    _structure       - Organize files logically in directory structure

_3n__ _rule_display       - Rule format standards
_3n_1    _file_structure  - Organize rules in hierarchical structure with consistent levels
_3n_2    _identifiers     - Format rule identifiers with file number, letter, and double underscore
_3n_3    _wrapped_text    - Align wrapped text with the starting position of the description
_3n_4    _task_name       - Begin task names with single underscore (_example)
_3n_5    _spacing         - Maintain consistent indentation for all hierarchy levels
_3n_6    _section_headers - Use prominent headers for major rule sections
_3n_7    _separator       - Use separators between major rule sections
_3n_8    _alignment       - Align all descriptions to a consistent column position

_3o__ _numbering          - Rule numbering system
_3o_1    _file_number     - Use file number from filename as prefix (e.g., "_1" for rule_01_codename.md)
_3o_2    _letter_sequence - Use lowercase letters in alphabetical sequence for main sections
_3o_3    _double_under    - Use double underscore (__) for main section indicators (_1a__)
_3o_4    _subsections     - Use single-digit numbers with underscore for subsections (_1a_1)
_3o_5    _double_digit    - Omit underscore before double-digit numbers (_1c10 not _1c_10)
_3o_6    _spacing         - Align all identifiers consistently with proper spacing
_3o_7    _subsections     - Indent subsections consistently (4 spaces from section identifiers)
_3o_8    _alignment       - Align all task names at consistent position
_3o_9    _consistency     - Maintain consistent numbering pattern throughout document

_3p__ _task_format        - Task name formatting
_3p_1    _underscore      - Begin task names with single underscore (_example)
_3p_2    _lowercase       - Use lowercase letters for all task names
_3p_3    _snake_case      - Use snake_case for multi-word task names
_3p_4    _alignment       - Align all task names consistently (column position 15)
_3p_5    _brevity         - Keep task names concise and descriptive (1-2 words preferred)
_3p_6    _consistency     - Use consistent terminology across all task names
_3p_7    _descriptive     - Choose meaningful terms that reflect content purpose
_3p_8    _nouns           - Use nouns for descriptive items (_format, _spacing)
_3p_9    _verbs           - Use verbs for action items (_create, _define)

_3q__ _dash_format        - Dash and description formatting
_3q_1    _position        - Place dash at column position 25 for all entries
_3q_2    _capitalization  - Start all descriptions with capital letter
_3q_3    _punctuation     - No ending punctuation for description lines
_3q_4    _spacing         - Use consistent spacing between dash and description
_3q_5    _alignment       - Align all descriptions at column position 27
_3q_6    _wrapping        - Align wrapped text with the starting position of the description
_3q_7    _indentation     - Maintain consistent indentation in wrapped lines (29 spaces)

_3r__ _header_format      - File header format
_3r_1    _first_line      - Begin file with separator line (80 forward slashes)
_3r_2    _blank_line      - Include blank line after separator 
_3r_3    _file_name       - Display file name on third line without "rule_group" suffix
_3r_4    _simplicity      - Keep header simple: separator, blank line, file name
_3r_5    _consistency     - Use identical header format across all rule files

_3s__ _separator          - Visual divider between sections
_3s_1    _boundaries      - Place before and after each major section for clear separation
_3s_2    _visual          - Create clear visual boundaries between major content sections
_3s_3    _width           - Ensure separators are exactly 80 characters wide for consistency
_3s_4    _complete        - Include separator at beginning and end of document
_3s_5    _format          - Use forward slashes (/) for separator lines
_3s_6    _consistency     - Apply the same separator style across all documentation files

_3t__ _marker_display     - Marker formatting
_3t_1    _format          - Use triple-slash format: /// YOU ARE HERE ///
_3t_2    _placement       - Position marker on its own line with blank lines before and after
_3t_3    _consistency     - Use identical marker format in all prompt_files
_3t_4    _visibility      - Ensure marker stands out visually from surrounding content

////////////////////////////////////////////////////////////////////////////////

_3u__ _communication      - Communication guidelines
_3u_1    _clarity         - Ensure clear communication about changes and updates
_3u_2    _specificity     - Be specific about which sections or elements are being referenced
_3u_3    _consistency     - Maintain consistent terminology in communications about files
_3u_4    _efficiency      - Keep communications focused and efficient for productive work

_3v__ _code_reference     - Code references
_3v_1    _format          - Format references consistently for easy identification
_3v_2    _example         - Example: applied rule_03_format _3q_5 to document
_3v_3    _specific        - Reference specific line numbers or sections when applicable
_3v_4    _tracking        - Support tracking of changes through clear reference usage

_3w__ _updates            - Concise updates
_3w_1    _bullet_usage    - Use bullet points for multiple changes to enhance readability
_3w_2    _minimal         - Minimize explanatory text to focus on actual changes made
_3w_3    _change_focus    - Focus on what changed rather than explaining rationale
_3w_4    _actionable      - Ensure updates provide actionable information for next steps

//////////////////////////////////////////////////////////////////////////////// 