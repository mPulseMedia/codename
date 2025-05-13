# Codename Project

A tool for maintaining consistent naming conventions in code, providing an interactive index of code naming patterns.

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
   This will start the app at http://localhost:3000

## Development Guide

### Key Commands
- **Go**: Type "go" to advance through development steps. The system locates the `<< YOU ARE HERE >>` marker and processes the next prompt.

### Documentation Files
- **Prompt Files** (`prompt_#_name.md`): Step-by-step development tasks. Start with `prompt_1_start.md`.
- **Rule Files** (`rule_#_name.md`): Conventions and formatting standards. See `rule_2_codename.md` and `rule_3_format.md`.
- **Requirement Files** (`req_#_name.md`): Detailed feature specifications.

## Project Structure

- `/` - Root directory with main HTML entry point
  - `index.html` - Main entry point
  - `src/` - Source code directory
    - `main.js` - Core application initialization
    - `components/` - UI components
    - `lib/` - Utility functions and helpers
  - `assets/` - Static resources
    - `styles/` - CSS styles
    - `images/` - Image resources
    - `fonts/` - Font files
  - `docs/` - Documentation
    - `codename_conventions.md` - General naming conventions
    - `component_naming.md` - Component-specific naming guidelines
    - `code_style.md` - Code style and formatting guidelines
    - `codename_reference.md` - Quick reference for common patterns
    - `project_review.md` - Comprehensive project structure review
    - `improvement_roadmap.md` - Future enhancement recommendations

## Codename Conventions

All identifiers in this project follow our codename conventions:
- Variables: `descriptive_name`
- Booleans: end with `_is` (e.g., `visible_is`, `active_is`)
- Lists: singular + `_list` (e.g., `user_list`, not `users`)
- Functions: `verb_noun` format (e.g., `element_create`, not `createElement`)

For detailed documentation on naming conventions, see the files in the `docs/` directory.
