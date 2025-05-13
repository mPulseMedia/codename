/**
 * Form components for input handling and validation
 * Provides reusable form elements and validation logic
 */

import { dom_element_create } from '../lib/dom.js';

/**
 * Creates a form input with label and optional validation
 * @param {Object} options - Configuration options
 * @param {string} options.id - Input ID
 * @param {string} options.name - Input name attribute
 * @param {string} options.type - Input type (default: 'text')
 * @param {string} options.label - Label text
 * @param {string} options.placeholder - Placeholder text
 * @param {string} options.value - Initial value
 * @param {boolean} options.required - Whether the field is required
 * @param {function} options.validate - Custom validation function
 * @param {function} options.onChange - Change event handler
 * @returns {HTMLElement} Form group containing label and input
 */
const form_input_create = (options = {}) => {
  const form_group = dom_element_create('div', {
    className: 'form-group'
  });
  
  // Create label if provided
  if (options.label) {
    const label = dom_element_create('label', {
      for: options.id,
      textContent: options.label,
      className: 'form-label'
    });
    
    if (options.required) {
      const required_marker = dom_element_create('span', {
        textContent: ' *',
        className: 'required-marker'
      });
      label.appendChild(required_marker);
    }
    
    form_group.appendChild(label);
  }
  
  // Create input element
  const input = dom_element_create('input', {
    id: options.id,
    name: options.name || options.id,
    type: options.type || 'text',
    placeholder: options.placeholder || '',
    value: options.value || '',
    className: 'form-input',
    required: options.required ? true : null
  });
  
  // Add validation and change event handling
  if (options.validate || options.onChange) {
    input.addEventListener('input', (e) => {
      // Run custom onChange handler if provided
      if (options.onChange) {
        options.onChange(e);
      }
      
      // Run validation if provided
      if (options.validate) {
        const error_message = options.validate(e.target.value);
        form_input_set_error(input, error_message);
      }
    });
  }
  
  // Add blur event for required field validation
  if (options.required) {
    input.addEventListener('blur', (e) => {
      if (!e.target.value.trim()) {
        form_input_set_error(input, 'This field is required');
      } else {
        form_input_set_error(input, null);
      }
    });
  }
  
  form_group.appendChild(input);
  
  // Add error message container
  const error_container = dom_element_create('div', {
    className: 'form-error-message',
    style: 'display: none;'
  });
  
  form_group.appendChild(error_container);
  
  return form_group;
};

/**
 * Creates a select dropdown with options
 * @param {Object} options - Configuration options
 * @param {string} options.id - Select ID
 * @param {string} options.name - Select name attribute
 * @param {string} options.label - Label text
 * @param {Array} options.options - Array of option objects {value, text}
 * @param {string} options.value - Initial selected value
 * @param {boolean} options.required - Whether selection is required
 * @param {function} options.onChange - Change event handler
 * @returns {HTMLElement} Form group containing label and select
 */
const form_select_create = (options = {}) => {
  const form_group = dom_element_create('div', {
    className: 'form-group'
  });
  
  // Create label if provided
  if (options.label) {
    const label = dom_element_create('label', {
      for: options.id,
      textContent: options.label,
      className: 'form-label'
    });
    
    if (options.required) {
      const required_marker = dom_element_create('span', {
        textContent: ' *',
        className: 'required-marker'
      });
      label.appendChild(required_marker);
    }
    
    form_group.appendChild(label);
  }
  
  // Create select element
  const select = dom_element_create('select', {
    id: options.id,
    name: options.name || options.id,
    className: 'form-select',
    required: options.required ? true : null
  });
  
  // Add default empty option if not required
  if (!options.required) {
    const empty_option = dom_element_create('option', {
      value: '',
      textContent: '-- Select an option --'
    });
    select.appendChild(empty_option);
  }
  
  // Add options
  if (Array.isArray(options.options)) {
    options.options.forEach(opt => {
      const option = dom_element_create('option', {
        value: opt.value,
        textContent: opt.text || opt.value,
        selected: options.value === opt.value
      });
      select.appendChild(option);
    });
  }
  
  // Add change event handler
  if (options.onChange) {
    select.addEventListener('change', options.onChange);
  }
  
  form_group.appendChild(select);
  
  // Add error message container
  const error_container = dom_element_create('div', {
    className: 'form-error-message',
    style: 'display: none;'
  });
  
  form_group.appendChild(error_container);
  
  return form_group;
};

/**
 * Creates a form submit button
 * @param {Object} options - Configuration options
 * @param {string} options.text - Button text
 * @param {string} options.className - Additional CSS classes
 * @param {function} options.onClick - Click event handler
 * @returns {HTMLElement} Submit button
 */
const form_button_create = (options = {}) => {
  const button = dom_element_create('button', {
    type: 'submit',
    textContent: options.text || 'Submit',
    className: `form-button ${options.className || ''}`,
    events: {
      click: options.onClick || null
    }
  });
  
  return button;
};

/**
 * Sets or clears an error message on a form input
 * @param {HTMLElement} input - The input element
 * @param {string|null} error_message - Error message or null to clear
 */
const form_input_set_error = (input, error_message) => {
  const form_group = input.closest('.form-group');
  if (!form_group) return;
  
  const error_container = form_group.querySelector('.form-error-message');
  if (!error_container) return;
  
  if (error_message) {
    error_container.textContent = error_message;
    error_container.style.display = 'block';
    input.classList.add('input-error');
  } else {
    error_container.textContent = '';
    error_container.style.display = 'none';
    input.classList.remove('input-error');
  }
};

/**
 * Validates a complete form
 * @param {HTMLFormElement} form - The form element to validate
 * @returns {boolean} True if the form is valid
 */
const form_validate = (form) => {
  let is_valid = true;
  
  // Check all required inputs
  const required_inputs = form.querySelectorAll('[required]');
  required_inputs.forEach(input => {
    if (!input.value.trim()) {
      form_input_set_error(input, 'This field is required');
      is_valid = false;
    }
  });
  
  return is_valid;
};

// Export form components
export {
  form_input_create,
  form_select_create,
  form_button_create,
  form_input_set_error,
  form_validate
}; 