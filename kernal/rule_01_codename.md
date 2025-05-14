////////////////////////////////////////////////////////////////////////////////

rule_01_codename

_1a__ _choice             - Choose words carefully
_1a_1    _everything     - IMPORTANT: apply codename convention to every single identifier that 
                           you generate: variables, functions, CSS classnames, 
                           constants, parameters, file names, event names, properties, 
                           element IDs; . Don't leave anything out that you can name!
_1a_2    _case           - All codenames in snake_case (user_name not userName) 
_1a_3    _boolean        - End with _is for boolean variables (example: visible_is, active_is, valid_is)
_1a_4    _plurality      - Use singular+_list, never pluralize (name_list NOT names)
_1a_5    _verb           - Use present tense base verbs without modifiers for clarity
 
_1b__ _form              - Form verbs properly
_1b_1    _simple         - Use enable, not enabled for consistency and clarity
_1b_2    _avoid          - Use load, not loading; create, not creating
_1b_3    _example        - filter_apply (not filter_applying)
                           data_save (not data_saving or data_saved)
                           user_authenticate (not user_authenticating)

_1c__ _abr                - Abbreviate appropriately
_1c_1    _preferred       - understood abbreviation (ex: config, param)
_1c_2    _ele             - element (HTML/DOM element)
_1c_3    _prev            - previous (prior item in sequence)
_1c_4    _str             - string (text data type)
_1c_5    _var             - variable (named data container)
_1c_6    _msg             - message (communication or display text)
_1c_7    _tab             - tablet (device type context)
_1c_8    _mob             - mobile (device type context)
_1c_9    _func            - function (callable code block)
_1c10    _var             - variable (named value holder) 
_1c11    _cn              - codename (project-specific term)

_1d__ _length             - Length of terms
_1d_1    _readability     - long terms reduce readability and search effectiveness
_1d_2    _abbreviate      - use abbreviations when appropriate (config, not configuration)
_1d_3    _compound        - break compound concepts into separate terms
_1d_4    _example         - data_save (not data_persistence)
                           user_add (not user_registration)

////////////////////////////////////////////////////////////////////////////////

_1e__ _structure          - Structure fundamentals
_1e_1    _consistent      - Use consistent terms throughout the codebase, minimize 
                           different terms that refer to the same thing (ex: item vs 
                           element, get vs retrieve)
_1e_2    _hierarchy       - Structure as objroot_objsub_attr_verb with objects/concepts first, 
                           verbs last (ex: user_profile_name_get not 
                           get_user_profile_name)
_1e_3    _namespace       - Use namespaces to organize code into logical groups
_1e_4    _readability     - Prioritize human readability over brevity where appropriate

_1f__ _root               - Root naming guide
_1f_1    _app             - Entire application functionality
_1f_2    _env             - Environment configuration and settings
_1f_3    _dom             - DOM operations and manipulations
_1f_4    _ui              - User interface components and visual elements
_1f_5    _util            - Utility functions for common operations
_1f_6    _data            - Data operations and management
_1f_7    _auth            - Authentication related functionality
_1f_8    _error           - Error handling and reporting
_1f_9    _index           - Codename index functionality and navigation
_1f10    _codename        - Specific "term of art" used by a set of project files
_1f11    _term            - Single word used within a codename, and used to refer to a consistent concept
_1f12    _root            - First term of a codename operations
_1f13    _search          - Search-related functionality and interfaces
_1f14    _filter          - Filtering functionality and controls
_1f15    _lookup          - Code snippet retrieval and display
_1f16    _prompt          - Written prompts that were or will be entered to an AI copilot
_1f17    _rule            - Established guidelines and constraints for project workflow
_1f18    _kernal          - Core files from which the codename methodology occurs
_1f19    _marker          - Indicator showing current execution position within prompt files
_1f20    _task            - Detailed implementation instruction within a prompt
_1f21    _separator       - Visual divider between sections in files
_1f22    _file            - Digital document containing structured content

_1g__ _new                - New root creation
_1g_1    _simplification  - Introducing a new root term for conceptual simplification
_1g_2    _semantic        - Each new root becomes its own semantic concept 
_1g_3    _reference       - New roots can be referenced independently
_1g_4    _example         - filter_search_button_clear → clear_filter_button

_1h__ _roots              - Fundamental app root terms
_1h_1    _index           - Codename index functionality and navigation
_1h_2    _codename        - Specific "term of art" used by a set of project files
_1h_3    _term            - Single word used within a codename, and used to refer to a consistent concept across codenames
_1h_4    _root            - First term of a codename operations
_1h_5    _search          - Search-related functionality and interfaces
_1h_6    _filter          - Filtering functionality and controls
_1h_7    _lookup          - Code snippet retrieval and display
_1h_8    _prompt          - Written prompts that were or will be entered to an AI copilot
_1h_9    _rulename        - Identifier for the rule
_1h10    _kernal          - Core files from which the codename methodology occurs
_1h11    _marker          - Indicator showing current execution position within prompt files
_1h12    _rule            - Established guidelines and constraints for project workflow
_1h13    _summary         - Short description of what the prompt does and appears as the first line in the prompt
_1h14    _task            - Detailed implementation instruction within a prompt
_1h15    _taskname        - Identifier for a task
_1h16    _separator       - Visual divider between sections in files
_1h17    _file            - Digital document containing structured content
_1h18    _alignment       - Visual arrangement for readability and structure

////////////////////////////////////////////////////////////////////////////////

_1i__ _format             - Format guidelines
_1i_1    _naming          - Codename conventions and code appearance rules
_1i_2    _alignment       - Align code elements for readability and consistency
_1i_3    _organization    - Organize code in consistent, logical structures

_1j__ _align              - Align symbol usage
_1j_1    _assignment      - Breaking code (ex: align assignments in related variable 
                           declarations)
_1j_2    _readability     - Enhance code readability through consistent alignment
_1j_3    _columns         - Maintain columnar alignment for similar elements
_1j_4    _spacing         - Use consistent spacing around operators and punctuation

_1k__ _order              - Order codenames logically
_1k_1    _alphabetical    - alphabetically (ex: group by domain prefix, then 
                           alphabetically)
_1k_2    _grouping        - Group related functions and variables together
_1k_3    _consistency     - Maintain consistent ordering patterns across files

_1l__ _compact            - Compact code layout
_1l_1    _js              - lines within function is ok.
_1l_2    _css             - In css files, no blank spaces between class definitions.
_1l_3    _readability     - Balance compactness with readability
_1l_4    _sections        - Use comments to delineate logical sections

_1m__ _format             - Format rules properly
_1m_1    _numbers         - use single-digit rule numbers (1, 2, 3, etc.)
_1m_2    _title           - align rule titles at column 13
_1m_3    _colon           - align colons at column 18
_1m_4    _wrap            - indent wrapped lines to align with text (19 spaces)
_1m_5    _indent          - indent sublists consistently (add 1 level/19 spaces)

//////////////////////////////////////////////////////////////////////////////// 