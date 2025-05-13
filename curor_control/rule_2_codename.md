rule_2a_word                - Rules for selecting clear, consistent terms in codename identifiers

2a_ word_choice          - Rules for selecting words and terms in codename identifiers

   a case_format         - All codenames in snake_case (variables, functions, CSS, 
                           constants, parameters, file names, event names, properties, 
                           element IDs; use user_name not userName)
   b boolean_naming      - End with _is for boolean variables (example: visible_is, active_is, valid_is)
   c plurality           - Use singular+_list, never pluralize (name_list NOT names)
   d verb_form           - Use present tense base verbs without modifiers for clarity

2a4_ verb_form           - Use present tense base verbs without modifiers
   a simple_form         - use enable, not enabled for consistency and clarity
   b avoid_ing           - use load, not loading; create, not creating
   c examples            - filter_apply (not filter_applying)
                           data_save (not data_saving or data_saved)
                           user_authenticate (not user_authenticating)

2a5_ abr                 - Abbreviate terms that are long when there is a commonly 
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

2a6_ term_length         - Keep individual terms in codenames to 8 characters or less
   a readability         - long terms reduce readability and search effectiveness
   b abbreviate          - use abbreviations when appropriate (config, not configuration)
   c compounds           - break compound concepts into separate terms
   d examples            - data_save (not data_persistence)
                           user_add (not user_registration)

--------------------------------------------------------------------------------

rule_2b_structure           - Guidelines for organizing codenames in hierarchical structure

2b_ structural           - Rules for hierarchical structure of codenames

   a consistent          - Use consistent terms throughout the codebase, minimize 
                           different terms that refer to the same thing (ex: item vs 
                           element, get vs retrieve)
   b hierarchy           - Structure as objroot_objsub_attr_verb with objects/concepts first, 
                           verbs last (ex: user_profile_name_get not 
                           get_user_profile_name)
   c namespace           - Use namespaces to organize code into logical groups
   d readability         - Prioritize human readability over brevity where appropriate

2b3_ root                - Use approved general roots (prefixes) to organize code by domain:
   a app                 - entire application functionality
   b env                 - environment configuration and settings
   c dom                 - DOM operations and manipulations
   d ui                  - user interface components and visual elements
   e util                - utility functions for common operations
   f data                - data operations and management
   g auth                - authentication related functionality
   h error               - error handling and reporting

2b4_ root_new            - When a codename becomes too long (4 or more terms) then consider
   a simplification      - introducing a new root term for conceptual simplification
   b semantic_concept    - Each new root becomes its own semantic concept 
   c reference           - New roots can be referenced independently
   d example             - filter_search_button_clear → clear_filter_button

2b5_ project_root        - Use these codename2 project-specific prefixes:
   a index               - codename index functionality and navigation
   b codename            - specific "term of art" for functions and variables
   c term                - term components within a codename structure
   d root                - first term of a codename operations
   e search              - search-related functionality and interfaces
   f filter              - filtering functionality and controls
   g lookup              - code snippet retrieval and display
   h reveal              - HTML & CSS codename reveal functions
   i prompt_name         - identifier for prompt sections in documentation
   j rule_name           - identifier for rule sections in documentation

--------------------------------------------------------------------------------

rule_2c_format             - Standards for formatting code and documentation consistently

2c_ format               - Rules for code and documentation formatting

   a naming_convention   - Codename conventions and code appearance rules
   b alignment           - Align code elements for readability and consistency
   c organization        - Organize code in consistent, logical structures

2c2_ align               - Align symbols (=, :) in sequences for readability if not 
   a assignment          - breaking code (ex: align assignments in related variable 
                           declarations)
   b readability         - Enhance code readability through consistent alignment
   c columns             - Maintain columnar alignment for similar elements
   d spacing             - Use consistent spacing around operators and punctuation

2c3_ order               - Sort the codenames in .js files by their name, 
   a alphabetical        - alphabetically (ex: group by domain prefix, then 
                           alphabetically)
   b grouping            - Group related functions and variables together
   c consistency         - Maintain consistent ordering patterns across files

2c4_ compact             - In js files, no blank lines between functions, but blank 
   a js_spacing          - lines within function is ok.
   b css_spacing         - In css files, no blank spaces between class definitions.
   c readability         - Balance compactness with readability
   d sections            - Use comments to delineate logical sections

2c5_ rule_format         - Use standardized rule formatting:
   a rule_numbers        - use single-digit rule numbers (1, 2, 3, etc.)
   b title_align         - align rule titles at column 13
   c colon_align         - align colons at column 18
   d wrap_indent         - indent wrapped lines to align with text (19 spaces)
   e sub_indent          - indent sublists consistently (add 1 level/19 spaces)

-------------------------------------------------------------------------------- 