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

## Project Setup

This project is a vanilla JavaScript application with a modular structure.

### Development Environment

1. Clone the repository:
   ```
   git clone <repository-url>
   cd codename
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Project Structure

- **public/** - Static files served directly to the browser
  - **css/** - CSS stylesheets
  - **js/** - JavaScript files
    - **modules/** - Modular JavaScript components
  - **assets/** - Images, fonts, and other static resources

- **src/** - Source files for development
  - **components/** - Component templates and logic
  - **lib/** - Library code for core functionality
  - **utils/** - Utility functions and helpers
  - **assets/** - Source assets before optimization

### Coding Standards

This project follows strict naming conventions based on the codename system:

- Use snake_case for all identifiers (variables, functions, files)
- Function names should follow the pattern: `domain_action_target`
- Boolean variables should end with `_is`
- Arrays should use the singular form with `_list` suffix

For more details on coding standards, see the rule files in the curor_control directory.

### Commands

- `npm start` - Start the development server
- `npm run lint` - Run ESLint to check code quality

## Project Status

The project has been reviewed for structure, functionality, and compliance with naming conventions. The review found:

- ✅ Directory structure follows best practices with clear separation of concerns
- ✅ Naming conventions are consistently applied across all files and functions
- ✅ Component architecture is well-structured and follows accessibility guidelines
- ✅ Documentation is comprehensive and includes detailed guides and examples
- ⚠️ Some areas identified for future improvement (testing, build process)

For a complete project review, see [Review Document](src/docs/review.md).

## Future Improvements

Based on the project review, the following improvements are planned:

1. Add automated testing infrastructure
2. Implement build process for production optimization
3. Enhance documentation with more complex examples
4. Add performance optimizations
5. Extend functionality with more advanced components

## Contributing

Contributions are welcome! Please review the [Documentation](src/docs/README.md) to understand the project standards and conventions before submitting code. 