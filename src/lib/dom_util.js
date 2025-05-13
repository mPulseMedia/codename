/**
 * DOM utility functions for simplified element management
 */

// Create element with attributes and optional children
const dom_element_create = (tag, attributes = {}, children = []) => {
    const element = document.createElement(tag);
    
    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'class') {
            element.className = value;
        } else if (key === 'text') {
            element.textContent = value;
        } else {
            element.setAttribute(key, value);
        }
    });
    
    // Append children
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    
    return element;
};

// Get element by selector
const dom_element_get = selector => document.querySelector(selector);

// Get all elements by selector
const dom_element_get_all = selector => document.querySelectorAll(selector);

// Add event listener to element
const dom_event_add = (element, event, callback) => {
    element.addEventListener(event, callback);
    return element;
};

// Remove event listener from element
const dom_event_remove = (element, event, callback) => {
    element.removeEventListener(event, callback);
    return element;
};

export {
    dom_element_create,
    dom_element_get,
    dom_element_get_all,
    dom_event_add,
    dom_event_remove
}; 