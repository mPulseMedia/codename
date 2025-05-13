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

// Export all functions
export {
  dom_element_create,
  dom_element_clear,
  dom_children_append,
  dom_fragment_create
}; 