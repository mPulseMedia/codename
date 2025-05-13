# Codename Conventions

This document outlines the naming conventions used throughout the Codename project. Following these guidelines ensures consistency, readability, and maintainability across the codebase.

## General Principles

1. **Snake Case**: All identifiers use snake_case (e.g., `user_name`, not `userName`)
2. **Descriptive Names**: Names should clearly indicate purpose and behavior
3. **Semantic Structure**: Names follow a hierarchical structure with object/concept first, verbs last
4. **Consistent Terminology**: Use the same terms for the same concepts throughout the codebase

## File Naming Conventions

### Module Files

- **Format**: `domain_purpose.js`
- **Examples**:
  - `dom_util.js` - DOM utilities
  - `data_store.js` - Data storage functions

### Utility Files

- **Format**: `domain_util.js`
- **Examples**:
  - `string_util.js` - String manipulation utilities
  - `array_util.js` - Array operation utilities

### Component Files

- **Format**: `component_name.js`
- **Examples**:
  - `header.js` - Header component
  - `nav_bar.js` - Navigation bar component

### Test Files

- **Format**: `tested_file_test.js`
- **Examples**: 
  - `dom_util_test.js` - Tests for DOM utilities
  - `header_test.js` - Tests for header component

## Identifier Naming Conventions

### Variables

- **Format**: `object_attribute`
- **Examples**:
  - `user_name` - User's name
  - `item_count` - Count of items

### Boolean Variables

- **Format**: `condition_is`
- **Examples**:
  - `visible_is` - Visibility state
  - `valid_is` - Validation state
  - `loading_is` - Loading state

### Arrays

- **Format**: `item_list` (singular + `_list`, never plural)
- **Examples**:
  - `user_list` (not `users`)
  - `option_list` (not `options`)

### Functions

- **Format**: `verb_noun` (present tense)
- **Examples**:
  - `element_create` (not `createElement` or `creating_element`)
  - `data_fetch` (not `fetchData` or `data_fetching`)
  - `user_authenticate` (not `authenticateUser` or `user_authenticated`)

### Parameters

- **Format**: Follows variable naming conventions
- **Examples**:
  - `user_id` - User identifier parameter
  - `item_options` - Item configuration options

### CSS Classes

- **Format**: `component_element_state`
- **Examples**:
  - `header_container` - Main header container
  - `nav_item_active` - Active navigation item

## Abbreviations

The following abbreviations are preferred for common terms:

- `config` instead of `configuration`
- `ele` instead of `element`
- `prev` instead of `previous`
- `str` instead of `string`
- `var` instead of `variable`
- `msg` instead of `message`
- `tab` instead of `tablet`
- `mob` instead of `mobile`
- `func` instead of `function`
- `cn` instead of `codename`

## Hierarchical Structure

Names are structured hierarchically with the most general concept first and most specific last:

- **Format**: `objroot_objsub_attr_verb`
- **Examples**:
  - `user_profile_name_get` (not `get_user_profile_name`)
  - `form_input_value_validate` (not `validate_form_input_value`)

## Semantic Roots

The following root prefixes are used to organize code by domain:

- `app` - Application-wide functionality
- `env` - Environment configuration
- `dom` - DOM operations
- `ui` - User interface components
- `util` - Utility functions
- `data` - Data operations
- `auth` - Authentication functionality
- `error` - Error handling

## Project-Specific Roots

Codename project uses these specific prefixes:

- `index` - Codename index functionality
- `codename` - Term of art for functions and variables
- `term` - Components within a codename structure
- `root` - First term of a codename
- `search` - Search functionality
- `filter` - Filtering functionality
- `lookup` - Code snippet retrieval
- `reveal` - HTML & CSS codename reveal functions

## Quick Reference

| Type | Format | Example |
|------|--------|---------|
| Variable | `object_attribute` | `user_name` |
| Boolean | `condition_is` | `active_is` |
| Array | `item_list` | `user_list` |
| Function | `verb_noun` | `data_fetch` |
| Component | `component_name` | `header_create` |
| CSS Class | `component_element_state` | `button_primary_disabled` | 