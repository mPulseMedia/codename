/**
 * DOM manipulation utilities
 * Provides helper functions for working with DOM elements
 */

/**
 * Creates a DOM element with specified attributes and properties
 * @param {string} tag - The HTML tag name
 * @param {Object} options - Element attributes and properties
 * @returns {HTMLElement} The created DOM element
 */
const dom_element_create = (tag, options = {}) => {
  const element = document.createElement(tag);
  
  // Apply attributes and properties
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'innerHTML') {
      element.innerHTML = value;
    } else if (key === 'textContent') {
      element.textContent = value;
    } else if (key === 'children' && Array.isArray(value)) {
      value.forEach(child => {
        if (child instanceof HTMLElement) {
          element.appendChild(child);
        }
      });
    } else if (key === 'events' && typeof value === 'object') {
      Object.entries(value).forEach(([event, handler]) => {
        element.addEventListener(event, handler);
      });
    } else if (key === 'style' && typeof value === 'string') {
      element.setAttribute('style', value);
    } else if (key === 'data' && typeof value === 'object') {
      // Handle data attributes
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
    } else {
      element.setAttribute(key, value);
    }
  });
  
  return element;
};

/**
 * Removes all children from a DOM element
 * @param {HTMLElement} element - The element to clear
 */
const dom_element_clear = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

/**
 * Appends multiple children to a parent element
 * @param {HTMLElement} parent - The parent element
 * @param {Array<HTMLElement>} children - Array of child elements
 */
const dom_children_append = (parent, children) => {
  children.forEach(child => {
    if (child instanceof HTMLElement) {
      parent.appendChild(child);
    }
  });
};

/**
 * Creates a document fragment with multiple elements
 * @param {Array<HTMLElement>} elements - Array of elements
 * @returns {DocumentFragment} Document fragment containing the elements
 */
const dom_fragment_create = (elements) => {
  const fragment = document.createDocumentFragment();
  dom_children_append(fragment, elements);
  return fragment;
};

/**
 * Adds or removes a class from an element
 * @param {HTMLElement} element - The target element
 * @param {string} className - The class to toggle
 * @param {boolean} force - If true, adds the class; if false, removes it
 */
const dom_class_toggle = (element, className, force) => {
  if (force === true) {
    element.classList.add(className);
  } else if (force === false) {
    element.classList.remove(className);
  } else {
    element.classList.toggle(className);
  }
};

/**
 * Finds the closest parent element matching a selector
 * @param {HTMLElement} element - The starting element
 * @param {string} selector - CSS selector to match against parents
 * @returns {HTMLElement|null} The matching parent or null if not found
 */
const dom_parent_find = (element, selector) => {
  return element.closest(selector);
};

/**
 * Creates an element and inserts it after a reference element
 * @param {string} tag - The HTML tag name
 * @param {Object} options - Element attributes and properties
 * @param {HTMLElement} referenceElement - Element after which to insert
 * @returns {HTMLElement} The created DOM element
 */
const dom_element_insert_after = (tag, options = {}, referenceElement) => {
  const element = dom_element_create(tag, options);
  
  if (referenceElement && referenceElement.parentNode) {
    referenceElement.parentNode.insertBefore(element, referenceElement.nextSibling);
  }
  
  return element;
};

/**
 * Creates an element and inserts it before a reference element
 * @param {string} tag - The HTML tag name
 * @param {Object} options - Element attributes and properties
 * @param {HTMLElement} referenceElement - Element before which to insert
 * @returns {HTMLElement} The created DOM element
 */
const dom_element_insert_before = (tag, options = {}, referenceElement) => {
  const element = dom_element_create(tag, options);
  
  if (referenceElement && referenceElement.parentNode) {
    referenceElement.parentNode.insertBefore(element, referenceElement);
  }
  
  return element;
};

/**
 * Gets or sets an element's data attribute
 * @param {HTMLElement} element - The target element
 * @param {string} key - The data attribute key (without 'data-' prefix)
 * @param {string} [value] - The value to set (if omitted, gets the value)
 * @returns {string|undefined} The data attribute value when getting
 */
const dom_data = (element, key, value) => {
  if (value === undefined) {
    return element.dataset[key];
  }
  
  element.dataset[key] = value;
};

// Export all functions
export {
  dom_element_create,
  dom_element_clear,
  dom_children_append,
  dom_fragment_create,
  dom_class_toggle,
  dom_parent_find,
  dom_element_insert_after,
  dom_element_insert_before,
  dom_data
}; 