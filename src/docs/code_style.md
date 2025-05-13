# Code Style Guidelines

This document outlines the code style and formatting guidelines for the Codename project.

## Indentation and Whitespace

- Use 2 spaces for indentation (no tabs)
- Add a space after keywords (`if`, `for`, `while`, etc.)
- Add spaces around operators (`=`, `+`, `-`, etc.)
- No trailing whitespace at the end of lines
- End files with a single newline

```javascript
// Good
if (condition) {
  doSomething();
}

// Bad
if(condition){
  doSomething();
}
```

## Line Length and Wrapping

- Keep lines under 100 characters when possible
- When wrapping lines, indent continuation lines
- Break at logical places (after operators, commas)

```javascript
// Good line wrapping
const longFunctionCall = veryLongFunctionName(
  firstArgument,
  secondArgument,
  thirdArgument
);

// Good object wrapping
const config = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  settings: {
    theme: 'dark',
    notifications: true
  }
};
```

## Braces and Blocks

- Opening braces on the same line as the statement
- Always use braces for blocks, even for single statements
- Add a space before the opening brace

```javascript
// Good
if (condition) {
  doSomething();
} else {
  doSomethingElse();
}

// Bad (avoid)
if (condition) doSomething();
else doSomethingElse();
```

## Comments

- Use JSDoc style for documenting functions and classes
- Add inline comments for complex logic
- Keep comments current with code changes
- Comment the "why", not the "what" (code should be self-explanatory)

```javascript
/**
 * Calculates the average of an array of numbers
 * @param {number[]} numbers - Array of numbers to average
 * @returns {number} The average value or 0 for empty arrays
 */
const calculateAverage = (numbers) => {
  if (!numbers.length) return 0;
  
  // Sum all numbers using reduce
  const sum = numbers.reduce((total, num) => total + num, 0);
  
  // Return the average
  return sum / numbers.length;
};
```

## Variables and Constants

- Use `const` by default, `let` when reassignment is needed
- Avoid `var` completely
- Declare variables at the top of their scope
- One variable declaration per line
- Align variable assignments when it improves readability

```javascript
// Good
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// Also good for related variables
const firstName  = 'John';
const lastName   = 'Doe';
const email      = 'john.doe@example.com';
```

## Functions

- Prefer arrow functions for anonymous functions and callbacks
- Use function declarations for named functions
- Keep functions focused on a single responsibility
- Return early to avoid deep nesting

```javascript
// Arrow function for callback
array.map(item => transformItem(item));

// Function declaration for named function
function calculateTotal(items) {
  // Early return for edge case
  if (!items.length) return 0;
  
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

## Conditionals

- Use `===` and `!==` instead of `==` and `!=`
- Use shortcuts for boolean conditions
- Use ternary operators for simple conditions
- Use positive conditions when possible

```javascript
// Good
if (value === undefined || value === null) {
  // Handle null/undefined
}

// Better
if (value == null) {
  // Handle null/undefined
}

// Use ternary for simple assignments
const label = count === 1 ? 'item' : 'items';
```

## Loops and Iterators

- Prefer array methods (map, filter, reduce) over for loops
- Use for...of for iterating over iterables
- Use for...in only for object properties with appropriate checks

```javascript
// Preferred
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);

// Good for iterating values
for (const item of items) {
  processItem(item);
}

// For objects, use for...in with hasOwnProperty check
for (const key in object) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    const value = object[key];
    // Process key/value
  }
}
```

## Imports and Exports

- Sort imports in logical groups:
  1. External dependencies
  2. Internal modules
  3. Relative imports
- Use named exports when exporting multiple items
- Default exports should be used sparingly

```javascript
// External dependencies
import { useState, useEffect } from 'react';

// Internal modules
import { dom_element_create } from '../lib/dom.js';
import { format_date } from '../utils/format.js';

// Local imports
import { CONSTANTS } from './constants.js';

// Named exports
export {
  function1,
  function2,
  function3
};
```

## Error Handling

- Use try/catch blocks around code that may throw
- Always include error handling for async operations
- Provide useful error messages
- Consider custom error types for specific error cases

```javascript
try {
  const data = JSON.parse(text);
  processData(data);
} catch (error) {
  console.error('Failed to parse JSON:', error.message);
  // Handle the error appropriately
}
```

## Accessibility and Internationalization

- Use semantic HTML elements
- Include ARIA attributes where needed
- Support keyboard navigation
- Keep UI strings separate for easier localization

## Performance Considerations

- Minimize DOM manipulations
- Use document fragments for batch DOM updates
- Be mindful of memory usage and clean up resources
- Use debounce/throttle for frequent events (resize, scroll)
- Consider web workers for heavy computation 