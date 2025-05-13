# File Organization Standards

This document outlines the file organization and structure standards for the Codename project.

## Directory Structure

The project follows a modular, domain-based directory structure:

```
codename/
├── public/               # Static assets served directly
│   ├── css/              # Compiled CSS files
│   ├── js/               # Compiled JavaScript files
│   │   └── modules/      # JS modules
│   ├── assets/           # Static resources
│   └── index.html        # Main HTML entry point
│
├── src/                  # Source code
│   ├── components/       # UI components
│   ├── lib/              # Core library code
│   ├── utils/            # Utility functions
│   ├── assets/           # Source assets
│   └── docs/             # Project documentation
│
├── curor_control/        # Development workflow control
│   ├── prompt_*.md       # Development prompt files
│   └── rule_*.md         # Project rule files
│
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore rules
├── package.json          # Package configuration
└── README.md             # Project overview
```

## File Organization Principles

### Domain-Driven Organization

Files are grouped by domain and responsibility rather than by file type:

- **Components**: UI elements and patterns organized by feature
- **Library**: Core functionality used across the application
- **Utilities**: Helper functions and reusable utilities
- **Assets**: Static resources like images, fonts, and icons

### Module Structure

Each module should follow a consistent internal structure:

1. Import statements
2. Constants and configuration
3. Private helper functions
4. Main exported functionality
5. Export statements

## File Naming Conventions

- Use `snake_case` for all file names
- Group related files with consistent prefixes
- Follow domain-specific naming patterns

### Examples:

```
components/
├── layout.js           # Layout components
├── form.js             # Form input components
└── nav.js              # Navigation components

lib/
├── dom.js              # DOM manipulation utilities
└── router.js           # Client-side routing

utils/
├── format.js           # Formatting utilities
└── storage.js          # Storage utilities
```

## Import Organization

Imports should be grouped and ordered as follows:

1. External library imports
2. Internal module imports (from other directories)
3. Relative imports (from same directory)
4. Asset imports

Example:

```javascript
// External libraries
import { library } from 'external-lib';

// Internal modules from other directories
import { dom_element_create } from '../lib/dom.js';
import { format_date } from '../utils/format.js';

// Relative imports (same directory)
import { other_component } from './other_component.js';

// Assets
import { ICONS } from '../assets/icons.js';
```

## Module Dependencies

- Keep dependencies unidirectional to avoid circular references
- Higher-level modules can depend on lower-level modules, but not vice versa
- Dependency hierarchy: components → lib → utils

## Documentation Structure

Documentation files follow a consistent structure:

1. Title and overview
2. Major sections with clear headings
3. Code examples where appropriate
4. Cross-references to related documentation

## Development Workflow Files

The `curor_control` directory contains files that guide the development process:

- **Prompt Files**: Step-by-step development instructions
- **Rule Files**: Conventions and standards documentation

## Configuration Files

Configuration files are kept at the project root:

- **.eslintrc.json**: Code quality rules
- **.gitignore**: Files excluded from version control
- **package.json**: Project dependencies and scripts

## Asset Organization

Assets are organized by type:

```
assets/
├── images/             # Image files
│   ├── icons/          # Icon images
│   └── backgrounds/    # Background images
├── fonts/              # Font files
└── data/               # Static data files
```

## External Libraries

External dependencies are managed through package.json and kept minimal:

- Use vanilla JavaScript when possible
- Prefer smaller, focused libraries over large frameworks
- Document external dependencies clearly

## Build Output Structure

The build process organizes output files in the public directory:

```
public/
├── css/                # Compiled and optimized CSS
├── js/                 # Bundled JavaScript
│   └── modules/        # Modular JavaScript components
└── assets/             # Optimized assets
    ├── images/         # Compressed images
    └── fonts/          # Web-optimized font files
``` 