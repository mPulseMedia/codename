/**
 * UI module for rendering and managing UI components
 */

import { dom_element_create, dom_element_clear } from './dom.js';

/**
 * Initialize UI components
 */
const ui_init = () => {
  console.log('UI initializing...');
  nav_init();
};

/**
 * Initialize the main navigation
 */
const nav_init = () => {
  const nav_element = document.getElementById('main-nav');
  if (!nav_element) return;
  
  const nav_items = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' }
  ];
  
  const nav_list = dom_element_create('ul', {
    className: 'nav-list'
  });
  
  nav_items.forEach(item => {
    const list_item = dom_element_create('li', {
      className: 'nav-item'
    });
    
    const link = dom_element_create('a', {
      href: item.href,
      textContent: item.text,
      className: 'nav-link',
      events: {
        click: (e) => nav_item_click(e, item)
      }
    });
    
    list_item.appendChild(link);
    nav_list.appendChild(list_item);
  });
  
  dom_element_clear(nav_element);
  nav_element.appendChild(nav_list);
};

/**
 * Handle navigation item click
 * @param {Event} event - Click event
 * @param {Object} item - Navigation item that was clicked
 */
const nav_item_click = (event, item) => {
  console.log(`Navigation to: ${item.text}`);
  event.preventDefault();
  
  // Update UI based on navigation
  const app_element = document.getElementById('app');
  dom_element_clear(app_element);
  
  const content = dom_element_create('div', {
    className: 'content'
  });
  
  content.appendChild(dom_element_create('h2', {
    textContent: item.text
  }));
  
  content.appendChild(dom_element_create('p', {
    textContent: `This is the ${item.text.toLowerCase()} section of the application.`
  }));
  
  app_element.appendChild(content);
};

// Export UI functions
export { 
  ui_init,
  nav_init,
  nav_item_click
}; 