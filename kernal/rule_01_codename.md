////////////////////////////////////////////////////////////////////////////////

rule_01_codename

r_1a__ choice             - Choose words carefully
r_1a_1    everything     - IMPORTANT: apply codename convention to every single identifier that 
                           you generate: variables, functions, CSS classnames, 
                           constants, parameters, file names, event names, properties, 
                           element IDs; . Don't leave anything out that you can name!
r_1a_2    case           - All codenames in snake_case (user_name not userName) 
r_1a_3    boolean        - End with _is for boolean variables (example: visible_is, active_is, valid_is)
r_1a_4    plurality      - Use singular+_list, never pluralize (name_list NOT names)
r_1a_5    verb           - Use present tense base verbs without modifiers for clarity
 
r_1b__ form              - Form verbs properly
r_1b_1    simple         - Use enable, not enabled for consistency and clarity
r_1b_2    avoid          - Use load, not loading; create, not creating
r_1b_3    example        - filter_apply (not filter_applying)
                           data_save (not data_saving or data_saved)
                           user_authenticate (not user_authenticating)

r_1c__ abbr              - Abbreviate appropriately
r_1c_1    preferred      - understood abbreviation (ex: config, param)
r_1c_2    ele            - element (HTML/DOM element)
r_1c_3    prev           - previous (prior item in sequence)
r_1c_4    str            - string (text data type)
r_1c_5    var            - variable (named data container)
r_1c_6    msg            - message (communication or display text)
r_1c_7    tab            - tablet (device type context)
r_1c_8    mob            - mobile (device type context)
r_1c_9    func           - function (callable code block)
r_1c10    var            - variable (named value holder) 
r_1c11    cn             - codename (project-specific term)
r_1c12    id             - alphanumeric id pattern used in documentation (r_1a__, p_2b_3)

r_1d__ length             - Length of terms
r_1d_1    readability     - long terms reduce readability and search effectiveness
r_1d_2    abbreviate      - use abbreviations when appropriate (config, not configuration)
r_1d_3    compound        - break compound concepts into separate terms
r_1d_4    example         - data_save (not data_persistence)
                           user_add (not user_registration)

r_1e__ structure          - Structure fundamentals
r_1e_1    consistent      - Use consistent terms throughout the codebase, minimize 
                           different terms that refer to the same thing (ex: item vs 
                           element, get vs retrieve)
r_1e_2    hierarchy       - Structure as objroot_objsub_attr_verb with objects/concepts first, 
                           verbs last (ex: user_profile_name_get not 
                           get_user_profile_name)
r_1e_3    namespace       - Use namespaces to organize code into logical groups
r_1e_4    readability     - Prioritize human readability over brevity where appropriate

r_1f__ roots              - Fundamental app root terms
r_1f_1    align           - Visual arrangement for readability and structure
r_1f_2    codename        - Specific "term of art" used by a set of project files
r_1f_3    file            - Digital document containing structured content
r_1f_4    file_kernal     - Collection of core files that implement the codename methodology
r_1f_5    filter          - Filtering functionality and controls
r_1f_6    id              - Alphanumeric id pattern for documentation sections (r_1a__, p_2b_3)
r_1f_7    index           - Codename index functionality and navigation
r_1f_8    kernal          - Core files from which the codename methodology occurs
r_1f_9    lookup          - Code snippet retrieval and display
r_1f10    marker          - Indicator showing current execution position within prompt files
r_1f11    outline         - Summary file containing group entries from related files
r_1f12    prompt          - Written prompts that were or will be entered to an AI copilot
r_1f13    root            - First term of a codename operations
r_1f14    rule            - Established guidelines and constraints for project workflow
r_1f15    rulename        - Name for a rule section
r_1f16    search          - Search-related functionality and interfaces
r_1f17    separator       - Visual divider between sections in files
r_1f18    summary         - Short description of what the prompt does and appears as the first line in the prompt
r_1f19    task            - Detailed implementation instruction within a prompt
r_1f20    task_name       - Name for a task
r_1f21    term            - Single word used within a codename, and used to refer to a consistent concept across codenames

r_1g__ new                - New root creation
r_1g_1    simplify        - Introducing a new root term for conceptual simplification
r_1g_2    semantic        - Each new root becomes its own semantic concept 
r_1g_3    reference       - New roots can be referenced independently
r_1g_4    example         - filter_search_button_clear → clear_filter_button

r_1h__ format             - Format and alignment guidelines
r_1h_1    naming          - Codename conventions and code appearance rules
r_1h_2    align           - Align code elements for readability and consistency
r_1h_3    organize        - Organize code in consistent, logical structures
r_1h_4    numbers         - Use single-digit rule numbers (1, 2, 3, etc.)
r_1h_5    title           - Align rule titles at column 13
r_1h_6    colon           - Align colons at column 18
r_1h_7    wrap            - Indent wrapped lines to align with text (19 spaces)
r_1h_8    indent          - Indent sublists consistently (add 1 level/19 spaces)

r_1i__ align              - Align symbol usage
r_1i_1    assignment      - Breaking code (ex: align assignments in related variable 
                           declarations)
r_1i_2    readability     - Enhance code readability through consistent alignment
r_1i_3    columns         - Maintain columnar alignment for similar elements
r_1i_4    spacing         - Use consistent spacing around operators and punctuation

r_1j__ order              - Order codenames logically
r_1j_1    alpha           - alphabetically (ex: group by domain prefix, then 
                           alphabetically)
r_1j_2    group           - Group related functions and variables together
r_1j_3    consistency     - Maintain consistent ordering patterns across files

r_1k__ compact            - Compact code layout
r_1k_1    js              - lines within function is ok.
r_1k_2    css             - In css files, no blank spaces between class definitions.
r_1k_3    readability     - Balance compactness with readability
r_1k_4    sections        - Use comments to delineate logical sections

//////////////////////////////////////////////////////////////////////////////// 