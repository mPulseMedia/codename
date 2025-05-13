# Codename Conventions

This document outlines the naming conventions and standards for the Codename project.

## File Naming

- All file names should use `snake_case` (lowercase with underscores)
- Follow domain-based organization (e.g., `dom_element.js`, `ui_component.js`)
- Test files should be named with a `_test` suffix (e.g., `dom_element_test.js`)
- Configuration files follow common conventions (.eslintrc.json, package.json)

### File Categories

- **Components**: UI-related files in `src/components/` 
  - Example: `layout.js`, `form.js`, `nav.js`
- **Library**: Core functionality in `src/lib/`
  - Example: `dom.js`, `router.js`
- **Utilities**: Helper functions in `src/utils/`
  - Example: `format.js`, `storage.js`
- **Assets**: Static resources in `src/assets/`
  - Organize by type (images, fonts, icons)

## Function Naming

Functions follow a consistent pattern of `domain_action_target` in snake_case:

```javascript
// Format: domain_action_target
const dom_element_create = (tag, options) => { /* ... */ };
const form_input_validate = (input) => { /* ... */ };
const data_item_update = (id, data) => { /* ... */ };
```

### Naming Patterns

- **Create functions**: Use `_create` suffix (e.g., `dom_element_create`, `form_input_create`)
- **Update functions**: Use `_update` suffix (e.g., `data_item_update`)
- **Get functions**: Use `_get` suffix (e.g., `storage_keys_get`, `data_items_get`)
- **Boolean functions**: Use `_is` suffix (e.g., `storage_available_is`, `form_valid_is`) 
- **Collection variables**: Use singular + `_list` suffix (e.g., `item_list`, `user_list`)

## Variable Naming

- Use `snake_case` for all variables and constants
- Be descriptive but concise (max 3-4 terms)
- Follow consistent patterns by domain

### Specific Variable Types

- **Constants**: All uppercase with underscores (e.g., `DEFAULT_TIMEOUT`, `MAX_ITEMS`)
- **DOM elements**: Include element type (e.g., `submit_button`, `search_input`)
- **Collections**: Use singular noun + `_list` (e.g., `user_list`, `item_list`)
- **Booleans**: Use `_is` suffix (e.g., `valid_is`, `loading_is`)
- **Temporary variables**: Short but descriptive (e.g., `i`, `temp`, `result`)

## Parameter Naming

- Use descriptive names that indicate the parameter's purpose
- When similar to internal variables, follow the same naming pattern
- For optional parameters, use consistent naming in documentation

## Module Organization

- Import statements at the top, grouped by source
- Constants and state variables next
- Functions organized by domain and importance
- Export statements at the bottom, using named exports

## Documentation

- Use JSDoc comments for functions and complex objects
- Document parameters with types and descriptions
- Include return value type and description
- Add examples for complex functions or APIs

## Examples

### Function Definition
```javascript
/**
 * Creates a DOM element with specified attributes
 * @param {string} tag - HTML tag name
 * @param {Object} options - Element attributes and properties
 * @returns {HTMLElement} The created DOM element
 */
const dom_element_create = (tag, options = {}) => {
  // Implementation
};
```

### Variable Naming
```javascript
// Good examples
const user_list = [];
const active_tab_id = 'home';
const loading_is = true;

// Bad examples (avoid)
const users = []; // Should be user_list
const activeTab = 'home'; // Should be active_tab
const isLoading = true; // Should be loading_is
``` 