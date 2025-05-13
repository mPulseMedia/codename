# Codename Project

A tool for maintaining consistent naming conventions in code, providing an interactive index of code naming patterns.

## Prompt Processing System

This project uses a structured prompt system for guiding AI development:

1. **Command-Based Navigation**: Type "go" in the chat to advance through development steps
   - The system locates the `<< YOU ARE HERE >>` marker and processes the next prompt segment

2. **File Structure**:
   - **Prompt Files** (`prompt_#_name.md`): Step-by-step development tasks
   - **Rule Files** (`rule_#_name.md`): Conventions and formatting standards
     - `rule_1_prompt.md`: Rules for prompt processing
     - `rule_2_codename.md`: Naming conventions and standards
     - `rule_3_format.md`: Format and documentation standards
   - **Requirement Files** (`req_#_name.md`): Detailed feature specifications

3. **Key Rules**:
   - Follow one step at a time
   - Update marker position after each step
   - Document implementation notes
   - Follow naming and formatting conventions

## Development Process

The AI assistant follows these structured prompts to build out the application incrementally, with each "go" command moving to the next development task.

For detailed processing rules, see `rule_1_prompt.md` which documents how prompts should be received and processed. 