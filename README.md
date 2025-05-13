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

- `index.html` - Main entry point
- `main.js` - Core JavaScript functionality
- `style.css` - Styling for the application
- Additional files and folders will be added as the project evolves
