/**
 * Layout components for structuring the application UI
 * Provides reusable layout patterns and containers
 */

import { dom_element_create } from '../lib/dom.js';

/**
 * Creates a main content container with optional header and footer
 * @param {Object} options - Configuration options
 * @param {string} options.title - Page title (optional)
 * @param {HTMLElement} options.content - Main content element
 * @param {HTMLElement} options.footer - Footer content (optional)
 * @returns {HTMLElement} Container element with structured content
 */
const layout_container_create = (options = {}) => {
  const container = dom_element_create('div', {
    className: 'container'
  });
  
  // Add header if title is provided
  if (options.title) {
    const header = dom_element_create('header', {
      className: 'container-header'
    });
    
    const title = dom_element_create('h2', {
      textContent: options.title,
      className: 'container-title'
    });
    
    header.appendChild(title);
    container.appendChild(header);
  }
  
  // Add main content
  if (options.content) {
    const content_wrapper = dom_element_create('div', {
      className: 'container-content'
    });
    
    content_wrapper.appendChild(options.content);
    container.appendChild(content_wrapper);
  }
  
  // Add footer if provided
  if (options.footer) {
    const footer_wrapper = dom_element_create('footer', {
      className: 'container-footer'
    });
    
    footer_wrapper.appendChild(options.footer);
    container.appendChild(footer_wrapper);
  }
  
  return container;
};

/**
 * Creates a two-column layout with configurable widths
 * @param {Object} options - Configuration options
 * @param {HTMLElement} options.left - Left column content
 * @param {HTMLElement} options.right - Right column content
 * @param {string} options.leftWidth - CSS width value for left column (default: '30%')
 * @param {string} options.rightWidth - CSS width value for right column (default: '70%')
 * @returns {HTMLElement} Two-column layout element
 */
const layout_two_column_create = (options = {}) => {
  const container = dom_element_create('div', {
    className: 'two-column-layout'
  });
  
  // Create left column
  const left_column = dom_element_create('div', {
    className: 'column column-left',
    style: `width: ${options.leftWidth || '30%'}`
  });
  
  if (options.left) {
    left_column.appendChild(options.left);
  }
  
  // Create right column
  const right_column = dom_element_create('div', {
    className: 'column column-right',
    style: `width: ${options.rightWidth || '70%'}`
  });
  
  if (options.right) {
    right_column.appendChild(options.right);
  }
  
  container.appendChild(left_column);
  container.appendChild(right_column);
  
  return container;
};

/**
 * Creates a card element for displaying content in a contained box
 * @param {Object} options - Configuration options
 * @param {string} options.title - Card title (optional)
 * @param {string|HTMLElement} options.content - Card content
 * @param {string} options.footer - Card footer text (optional)
 * @param {string} options.className - Additional CSS class names
 * @returns {HTMLElement} Card element
 */
const layout_card_create = (options = {}) => {
  const card = dom_element_create('div', {
    className: `card ${options.className || ''}`
  });
  
  // Add card header if title is provided
  if (options.title) {
    const header = dom_element_create('div', {
      className: 'card-header'
    });
    
    const title = dom_element_create('h3', {
      textContent: options.title,
      className: 'card-title'
    });
    
    header.appendChild(title);
    card.appendChild(header);
  }
  
  // Add card body with content
  const body = dom_element_create('div', {
    className: 'card-body'
  });
  
  if (typeof options.content === 'string') {
    body.innerHTML = options.content;
  } else if (options.content instanceof HTMLElement) {
    body.appendChild(options.content);
  }
  
  card.appendChild(body);
  
  // Add card footer if provided
  if (options.footer) {
    const footer = dom_element_create('div', {
      className: 'card-footer'
    });
    
    if (typeof options.footer === 'string') {
      footer.textContent = options.footer;
    } else if (options.footer instanceof HTMLElement) {
      footer.appendChild(options.footer);
    }
    
    card.appendChild(footer);
  }
  
  return card;
};

// Export layout components
export {
  layout_container_create,
  layout_two_column_create,
  layout_card_create
}; 