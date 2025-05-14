////////////////////////////////////////////////////////////////////////////////

rule_2a_word                - Word selection rules

2a_ word_choice          - Choose words carefully
   a everything          - IMPORTANT: apply codename convention to every single identifier that 
                           you generate: variables, functions, CSS classnames, 
                           constants, parameters, file names, event names, properties, 
                           element IDs; . Don't leave anything out that you can name!
   b case_format         - All codenames in snake_case (user_name not userName) 
   c boolean_naming      - End with _is for boolean variables (example: visible_is, active_is, valid_is)
   d plurality           - Use singular+_list, never pluralize (name_list NOT names)
   e verb_form           - Use present tense base verbs without modifiers for clarity

2a4_ verb_form           - Form verbs properly
   a simple_form         - use enable, not enabled for consistency and clarity
   b avoid_ing           - use load, not loading; create, not creating
   c examples            - filter_apply (not filter_applying)
                           data_save (not data_saving or data_saved)
                           user_authenticate (not user_authenticating)

2a5_ abr                 - Abbreviate appropriately
   a preferred           - understood abbreviation (ex: config, param)
   b ele                 - element (HTML/DOM element)
   c prev                - previous (prior item in sequence)
   d str                 - string (text data type)
   e var                 - variable (named data container)
   f msg                 - message (communication or display text)
   g tab                 - tablet (device type context)
   h mob                 - mobile (device type context)
   i func                - function (callable code block)
   j var                 - variable (named value holder) 
   k cn                  - codename (project-specific term)

2a6_ term_length         - Length of terms
   a readability         - long terms reduce readability and search effectiveness
   b abbreviate          - use abbreviations when appropriate (config, not configuration)
   c compounds           - break compound concepts into separate terms
   d examples            - data_save (not data_persistence)
                           user_add (not user_registration)

////////////////////////////////////////////////////////////////////////////////

rule_2b_structure           - Structure codenames well

2b_ structural           - Structure fundamentals
   a consistent          - Use consistent terms throughout the codebase, minimize 
                           different terms that refer to the same thing (ex: item vs 
                           element, get vs retrieve)
   b hierarchy           - Structure as objroot_objsub_attr_verb with objects/concepts first, 
                           verbs last (ex: user_profile_name_get not 
                           get_user_profile_name)
   c namespace           - Use namespaces to organize code into logical groups
   d readability         - Prioritize human readability over brevity where appropriate

2b3_ root                - Root naming guide
   a app                 - entire application functionality
   b env                 - environment configuration and settings
   c dom                 - DOM operations and manipulations
   d ui                  - user interface components and visual elements
   e util                - utility functions for common operations
   f data                - data operations and management
   g auth                - authentication related functionality
   h error               - error handling and reporting

2b4_ root_new            - New root creation
   a simplification      - introducing a new root term for conceptual simplification
   b semantic_concept    - Each new root becomes its own semantic concept 
   c reference           - New roots can be referenced independently
   d example             - filter_search_button_clear → clear_filter_button

2b5_ app_root            - Fundamental app root terms
   a index               - codename index functionality and navigation
   b codename            - specific "term of art" for functions and variables
   c term                - term components within a codename structure
   d root                - first term of a codename operations
   e search              - search-related functionality and interfaces
   f filter              - filtering functionality and controls
   g lookup              - code snippet retrieval and display
   h reveal              - HTML & CSS codename reveal functions
   i prompt              - identifier for prompts in documentation
   j rule_name           - identifier for rule sections in documentation
   k kernal              - methodology structure and processing rules
   l marker              - indicator showing current execution position
   m rule                - established guidelines and constraints for project workflow
   n summary             - brief description of functionality for reference
   o task                - detailed implementation instruction within a prompt
   p task_name           - identifier word for type of task being performed
   q separator           - visual divider between document sections
   r file                - digital document containing structured content
   s alignment           - visual arrangement for readability and structure

////////////////////////////////////////////////////////////////////////////////

rule_2c_format             - Format codenames consistently

2c_ format               - Format guidelines
   a naming_convention   - Codename conventions and code appearance rules
   b alignment           - Align code elements for readability and consistency
   c organization        - Organize code in consistent, logical structures

2c2_ align               - Align symbol usage
   a assignment          - breaking code (ex: align assignments in related variable 
                           declarations)
   b readability         - Enhance code readability through consistent alignment
   c columns             - Maintain columnar alignment for similar elements
   d spacing             - Use consistent spacing around operators and punctuation

2c3_ order               - Order codenames logically
   a alphabetical        - alphabetically (ex: group by domain prefix, then 
                           alphabetically)
   b grouping            - Group related functions and variables together
   c consistency         - Maintain consistent ordering patterns across files

2c4_ compact             - Compact code layout
   a js_spacing          - lines within function is ok.
   b css_spacing         - In css files, no blank spaces between class definitions.
   c readability         - Balance compactness with readability
   d sections            - Use comments to delineate logical sections

2c5_ rule_format         - Format rules properly
   a rule_numbers        - use single-digit rule numbers (1, 2, 3, etc.)
   b title_align         - align rule titles at column 13
   c colon_align         - align colons at column 18
   d wrap_indent         - indent wrapped lines to align with text (19 spaces)
   e sub_indent          - indent sublists consistently (add 1 level/19 spaces)

//////////////////////////////////////////////////////////////////////////////// 