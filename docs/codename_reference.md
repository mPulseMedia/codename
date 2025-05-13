# Codename Quick Reference

A quick reference guide for common codename patterns and their usage in the Codename project.

## Common Patterns by Domain

### DOM Operations

| Pattern | Description | Example |
|---------|-------------|---------|
| `dom_element_create` | Create DOM element | `dom_element_create('div', { class: 'container' })` |
| `dom_element_get` | Get element by selector | `dom_element_get('#app')` |
| `dom_element_get_all` | Get all elements by selector | `dom_element_get_all('.item')` |
| `dom_element_append` | Append child to element | `dom_element_append(parent, child)` |
| `dom_element_remove` | Remove element from DOM | `dom_element_remove(element)` |
| `dom_class_add` | Add class to element | `dom_class_add(element, 'active')` |
| `dom_class_remove` | Remove class from element | `dom_class_remove(element, 'active')` |
| `dom_class_toggle` | Toggle class on element | `dom_class_toggle(element, 'active')` |
| `dom_attribute_set` | Set attribute on element | `dom_attribute_set(element, 'data-id', '123')` |
| `dom_attribute_get` | Get attribute from element | `dom_attribute_get(element, 'data-id')` |
| `dom_event_add` | Add event listener | `dom_event_add(element, 'click', callback)` |
| `dom_event_remove` | Remove event listener | `dom_event_remove(element, 'click', callback)` |

### UI Components

| Pattern | Description | Example |
|---------|-------------|---------|
| `button_create` | Create button | `button_create('Submit', click_callback)` |
| `modal_create` | Create modal dialog | `modal_create('Title', content, options)` |
| `form_create` | Create form | `form_create(field_list, submit_callback)` |
| `input_create` | Create input field | `input_create('text', { placeholder: 'Username' })` |
| `dropdown_create` | Create dropdown menu | `dropdown_create(option_list, change_callback)` |
| `table_create` | Create table | `table_create(header_list, row_list)` |
| `tooltip_create` | Create tooltip | `tooltip_create(element, text)` |
| `notification_create` | Create notification | `notification_create(message, type)` |

### Data Operations

| Pattern | Description | Example |
|---------|-------------|---------|
| `data_fetch` | Fetch data from API | `data_fetch(url)` |
| `data_post` | Post data to API | `data_post(url, data)` |
| `data_update` | Update existing data | `data_update(url, id, data)` |
| `data_delete` | Delete data | `data_delete(url, id)` |
| `data_transform` | Transform data format | `data_transform(data, transform_func)` |
| `data_filter` | Filter data array | `data_filter(data_list, criteria)` |
| `data_sort` | Sort data array | `data_sort(data_list, sort_key)` |
| `data_validate` | Validate data | `data_validate(data, schema)` |
| `data_store_get` | Get from storage | `data_store_get('user')` |
| `data_store_set` | Save to storage | `data_store_set('user', user_data)` |

### Event Handling

| Pattern | Description | Example |
|---------|-------------|---------|
| `event_subscribe` | Subscribe to event | `event_subscribe('user:login', callback)` |
| `event_unsubscribe` | Unsubscribe from event | `event_unsubscribe('user:login', callback)` |
| `event_publish` | Publish event | `event_publish('user:login', data)` |
| `event_once` | Listen once | `event_once('page:load', callback)` |
| `event_throttle` | Throttle event handler | `event_throttle(callback, delay)` |
| `event_debounce` | Debounce event handler | `event_debounce(callback, delay)` |

### Utility Functions

| Pattern | Description | Example |
|---------|-------------|---------|
| `string_format` | Format string with values | `string_format('Hello, {0}!', 'World')` |
| `string_truncate` | Truncate long text | `string_truncate(text, 100)` |
| `string_capitalize` | Capitalize string | `string_capitalize('hello')` |
| `array_unique` | Get unique array items | `array_unique(array)` |
| `array_chunk` | Split array into chunks | `array_chunk(array, 3)` |
| `object_merge` | Merge objects | `object_merge(obj1, obj2)` |
| `object_clone` | Deep clone object | `object_clone(object)` |
| `date_format` | Format date | `date_format(date, 'YYYY-MM-DD')` |
| `number_format` | Format number | `number_format(1234.56, 2)` |

### Error Handling

| Pattern | Description | Example |
|---------|-------------|---------|
| `error_handle` | Handle error | `error_handle(err, 'Operation failed')` |
| `error_log` | Log error | `error_log(error, context)` |
| `error_throw` | Throw custom error | `error_throw('Invalid input')` |
| `error_try` | Try operation safely | `error_try(func, fallback)` |

### Animation

| Pattern | Description | Example |
|---------|-------------|---------|
| `animation_fade_in` | Fade in element | `animation_fade_in(element, duration)` |
| `animation_fade_out` | Fade out element | `animation_fade_out(element, duration)` |
| `animation_slide_down` | Slide down element | `animation_slide_down(element, duration)` |
| `animation_slide_up` | Slide up element | `animation_slide_up(element, duration)` |

## Project-Specific Patterns

### Codename App

| Pattern | Description | Example |
|---------|-------------|---------|
| `codename_parse` | Parse codename structure | `codename_parse(code_str)` |
| `codename_format` | Format codename | `codename_format(code_parts)` |
| `codename_validate` | Validate codename | `codename_validate(codename)` |
| `codename_suggest` | Suggest codename improvements | `codename_suggest(codename)` |
| `index_search` | Search codename index | `index_search(query)` |
| `index_filter` | Filter codename index | `index_filter(criteria)` |
| `term_extract` | Extract terms from string | `term_extract(code_str)` |
| `term_analyze` | Analyze term usage | `term_analyze(term_list)` |

## Boolean Naming

| Concept | Boolean Name |
|---------|--------------|
| Visibility | `visible_is` |
| Validity | `valid_is` |
| Activity | `active_is` |
| Completion | `complete_is` |
| Loading | `loading_is` |
| Selection | `selected_is` |
| Enablement | `enabled_is` |
| Authentication | `authenticated_is` | 