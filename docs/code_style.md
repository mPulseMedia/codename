# Code Style Guidelines

This document outlines the code style guidelines for the Codename project to ensure consistency and readability across the codebase.

## Indentation and Formatting

- Use 4 spaces for indentation, not tabs
- Place opening braces on the same line as the statement
- End all statements with semicolons
- Limit line length to 80 characters
- Use single quotes for strings unless escaping is necessary

```javascript
// Good
const func_example = (param_one, param_two) => {
    const result = param_one + param_two;
    return result;
};

// Avoid
const func_example = (param_one, param_two) =>
{
    const result = param_one + param_two
    return result
}
```

## Variable Declarations

- Declare variables with `const` when the value won't change
- Use `let` when the variable value will be reassigned
- Avoid using `var`
- Declare each variable on its own line
- Group related variables together

```javascript
// Good
const user_name = 'John';
const user_age = 30;

let counter = 0;
counter += 1;

// Avoid
var user_name = 'John', user_age = 30;

const counter = 0;
counter = 1; // Error: Assignment to constant variable
```

## Function Definitions

- Use arrow functions for anonymous functions
- Use function declarations for named functions
- Include parentheses around parameters even if there's only one
- Keep functions concise and focused on a single responsibility

```javascript
// Arrow function
const array_sum = (num_list) => {
    return num_list.reduce((total, num) => total + num, 0);
};

// Function declaration
function array_sum(num_list) {
    return num_list.reduce((total, num) => total + num, 0);
}
```

## Whitespace

- Add spaces around operators (`+`, `-`, `*`, `/`, `=`, etc.)
- Add a space after commas in arrays and objects
- Add a space before and after curly braces in objects
- No space between function name and parentheses
- Add a space before opening curly brace in control structures

```javascript
// Good
const x = y + z;
const obj = { key: value };
const arr = [1, 2, 3];
if (condition) {
    // code
}

// Avoid
const x=y+z;
const obj={key:value};
const arr=[1,2,3];
if(condition){
    // code
}
```

## Comments

- Use `//` for single-line comments
- Use `/* */` for multi-line comments
- Add a space after the comment syntax
- Write comments in complete sentences with proper capitalization
- Use comments to explain "why" not "what"

```javascript
// Good: This explains why we're using a specific approach
// Calculate price with tax because the API returns prices without tax
const price_total = price_base + (price_base * tax_rate);

// Avoid: This just restates what the code does
// Add tax to price
const price_total = price_base + (price_base * tax_rate);
```

## Import/Export

- Import modules at the top of the file
- Group imports by type (standard library, third-party, local)
- Use named exports for multiple functions/classes
- Use default export only when a module exports a single item

```javascript
// Good
import { dom_element_create } from '../lib/dom_util.js';
import { data_fetch } from '../services/api.js';

export const component_create = () => {
    // Implementation
};

export const component_update = () => {
    // Implementation
};

// Default export (use sparingly)
const main_component = {
    // Implementation
};
export default main_component;
```

## Error Handling

- Use try/catch blocks for code that might throw exceptions
- Always include error handling for asynchronous operations
- Provide meaningful error messages
- Consider the user experience when showing errors

```javascript
// Good
const data_fetch = async (url) => {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Data fetch error:', error);
        // Handle the error appropriately
        return null;
    }
};
```

## Alignment

- Align assignment operators when declaring multiple related variables
- Align object properties for better readability
- Maintain consistent indentation within blocks

```javascript
// Good alignment for related variables
const first_name  = 'John';
const last_name   = 'Doe';
const user_email  = 'john.doe@example.com';
const user_status = 'active';

// Good alignment for object properties
const user_config = {
    name:     'John Doe',
    email:    'john.doe@example.com',
    role:     'admin',
    active_is: true
};
```

## Naming Specifics

- Follow the project's codename conventions (snake_case)
- Use descriptive names that reveal intent
- Avoid abbreviations unless they're well-known
- Name boolean variables with an `_is` suffix
- Name arrays with a singular item name followed by `_list`

## File Organization

- Group related functions together
- Order functions alphabetically when possible
- Place initialization code at the bottom of the file
- Keep files focused on a single responsibility
- Split large files into smaller, more manageable pieces 