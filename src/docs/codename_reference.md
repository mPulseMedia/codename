# Codename Quick Reference

This document serves as a quick reference for the codename patterns used throughout the project.

## Function Naming Patterns

| Pattern | Example | Description |
|---------|---------|-------------|
| `dom_*` | `dom_element_create` | DOM manipulation functions |
| `form_*` | `form_input_create` | Form element functions |
| `layout_*` | `layout_card_create` | Layout component functions |
| `nav_*` | `nav_tabs_create` | Navigation component functions |
| `data_*` | `data_item_update` | Data management functions |
| `storage_*` | `storage_get` | Storage-related functions |
| `format_*` | `format_date` | Formatting utility functions |
| `router_*` | `router_navigate` | Routing functions |

## Action Verb Suffixes

| Suffix | Example | Description |
|--------|---------|-------------|
| `_create` | `dom_element_create` | Creates and returns a new element or component |
| `_get` | `data_items_get` | Retrieves data or elements |
| `_set` | `storage_set` | Sets or updates a value |
| `_update` | `data_item_update` | Updates an existing item |
| `_delete` | `data_item_delete` | Deletes or removes an item |
| `_add` | `data_item_add` | Adds a new item to a collection |
| `_remove` | `storage_remove` | Removes an item or value |
| `_init` | `router_init` | Initializes a module or feature |
| `_clear` | `dom_element_clear` | Clears or resets elements or data |
| `_validate` | `form_validate` | Validates data or input |
| `_render` | `list_render` | Renders UI elements |
| `_toggle` | `dom_class_toggle` | Toggles state between options |
| `_find` | `dom_parent_find` | Searches for and returns matching items |

## Boolean Functions & Variables

Boolean functions and variables use the `_is` suffix:

| Example | Purpose |
|---------|---------|
| `valid_is` | Indicates if something is valid |
| `storage_available_is` | Checks if storage is available |
| `form_valid_is` | Checks if a form is valid |
| `storage_key_exists_is` | Checks if a storage key exists |
| `visible_is` | Indicates if an element is visible |
| `loading_is` | Indicates if something is loading |

## Collection Naming

Collections use singular noun + `_list` suffix:

| Example | Description |
|---------|-------------|
| `item_list` | List of items |
| `user_list` | List of users |
| `option_list` | List of options |
| `error_list` | List of errors |

## Domain Prefixes

| Prefix | Domain | Example Functions |
|--------|--------|-------------------|
| `dom_` | DOM Manipulation | `dom_element_create`, `dom_class_toggle` |
| `form_` | Form Elements | `form_input_create`, `form_validate` |
| `layout_` | UI Layout | `layout_container_create`, `layout_card_create` |
| `nav_` | Navigation | `nav_main_create`, `nav_tabs_create` |
| `data_` | Data Management | `data_item_add`, `data_items_get` |
| `storage_` | Data Storage | `storage_get`, `storage_set` |
| `format_` | Formatting | `format_date`, `format_number` |
| `router_` | Routing | `router_navigate`, `router_init` |
| `util_` | Utilities | `util_random_id`, `util_debounce` |

## Parameter Naming

| Pattern | Example |
|---------|---------|
| Options objects | `options = {}` |
| Element references | `container`, `parent`, `element` |
| Event handlers | `on_click`, `on_change`, `on_submit` |
| Callbacks | `callback`, `on_complete`, `on_error` |
| IDs | `id`, `item_id`, `parent_id` |

## Constants

Constants use UPPERCASE_SNAKE_CASE:

| Example | Purpose |
|---------|---------|
| `DEFAULT_TIMEOUT` | Default timeout value |
| `MAX_ITEMS` | Maximum number of items |
| `STORAGE_KEY` | Storage key constant |
| `API_ENDPOINT` | API endpoint URL |

## Module File Naming

| Pattern | Example |
|---------|---------|
| Component files | `layout.js`, `form.js`, `nav.js` |
| Library files | `dom.js`, `router.js` |
| Utility files | `format.js`, `storage.js` |
| Test files | `dom_test.js`, `storage_test.js` |

## CSS Classes

While not JavaScript codenames, CSS classes follow a similar pattern:

| Pattern | Example | Description |
|---------|---------|-------------|
| Components | `.card`, `.button`, `.form-group` | Basic UI components |
| States | `.active`, `.disabled`, `.loading` | Element states |
| Modifiers | `.primary`, `.large`, `.rounded` | Visual modifiers |
| Layouts | `.container`, `.column`, `.grid` | Layout classes |

## Quick Examples

```javascript
// DOM manipulation
const element = dom_element_create('div', { className: 'container' });
dom_element_clear(element);
dom_class_toggle(element, 'active', true);

// Form components
const input = form_input_create({ 
  id: 'name', 
  label: 'Full Name', 
  required: true 
});
const valid_is = form_validate(form);

// Data management
const id = data_item_add({ name: 'Example', value: 100 });
data_item_update(id, { value: 200 });
const item_list = data_items_get();
``` 