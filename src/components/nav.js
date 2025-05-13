/**
 * Navigation components for handling menus and navigation
 * Provides reusable navigation elements and functionality
 */

import { dom_element_create, dom_element_clear, dom_class_toggle } from '../lib/dom.js';

/**
 * Creates a main navigation menu
 * @param {Object} options - Configuration options
 * @param {string} options.container_id - ID of container element
 * @param {Array} options.items - Array of menu items
 * @param {string} options.active_item - Path/ID of active item
 * @param {function} options.on_item_click - Click handler for menu items
 * @returns {HTMLElement} Navigation menu element
 */
const nav_main_create = (options = {}) => {
  const container = options.container_id 
    ? document.getElementById(options.container_id) 
    : dom_element_create('nav', { className: 'main-nav' });
  
  if (!container) return null;
  
  // Clear the container
  dom_element_clear(container);
  
  // Create navigation list
  const nav_list = dom_element_create('ul', {
    className: 'nav-list'
  });
  
  // Add menu items
  if (Array.isArray(options.items)) {
    options.items.forEach(item => {
      const nav_item = nav_item_create(item, {
        active_item: options.active_item,
        on_item_click: options.on_item_click
      });
      
      nav_list.appendChild(nav_item);
    });
  }
  
  container.appendChild(nav_list);
  
  return container;
};

/**
 * Creates a navigation item (list item with link)
 * @param {Object} item - Item configuration
 * @param {Object} options - Additional options
 * @returns {HTMLElement} Navigation item element
 */
const nav_item_create = (item, options = {}) => {
  const is_active = item.id === options.active_item || item.path === options.active_item;
  
  const list_item = dom_element_create('li', {
    className: `nav-item ${is_active ? 'active' : ''}`
  });
  
  // Create link element
  const link = dom_element_create('a', {
    href: item.path || `#${item.id}`,
    textContent: item.text,
    className: `nav-link ${item.className || ''}`,
    title: item.title || item.text,
    data: {
      id: item.id,
      section: item.section
    }
  });
  
  // Add icon if provided
  if (item.icon) {
    const icon = dom_element_create('span', {
      className: `nav-icon ${item.icon}`,
      'aria-hidden': 'true'
    });
    
    // Insert icon before text
    link.insertBefore(icon, link.firstChild);
  }
  
  // Add click event handler
  if (options.on_item_click) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      options.on_item_click(item, e);
    });
  }
  
  list_item.appendChild(link);
  
  // Add submenu if provided
  if (Array.isArray(item.submenu) && item.submenu.length > 0) {
    const submenu = nav_submenu_create(item.submenu, options);
    list_item.appendChild(submenu);
    
    // Add dropdown class to parent
    list_item.classList.add('has-submenu');
    
    // Add toggle functionality for submenu
    link.addEventListener('click', (e) => {
      e.preventDefault();
      list_item.classList.toggle('submenu-open');
    });
  }
  
  return list_item;
};

/**
 * Creates a submenu for nested navigation
 * @param {Array} items - Submenu items
 * @param {Object} options - Additional options
 * @returns {HTMLElement} Submenu element
 */
const nav_submenu_create = (items, options = {}) => {
  const submenu = dom_element_create('ul', {
    className: 'submenu'
  });
  
  items.forEach(item => {
    const submenu_item = nav_item_create(item, options);
    submenu.appendChild(submenu_item);
  });
  
  return submenu;
};

/**
 * Creates a tab navigation system
 * @param {Object} options - Configuration options
 * @param {string} options.container_id - ID of container element
 * @param {Array} options.tabs - Array of tab items
 * @param {string} options.active_tab - ID of active tab
 * @param {function} options.on_tab_change - Tab change handler
 * @returns {HTMLElement} Tab navigation element
 */
const nav_tabs_create = (options = {}) => {
  const container = options.container_id 
    ? document.getElementById(options.container_id) 
    : dom_element_create('div', { className: 'tabs-container' });
  
  if (!container) return null;
  
  // Clear the container
  dom_element_clear(container);
  
  // Create tabs list
  const tabs_list = dom_element_create('ul', {
    className: 'tabs-nav',
    role: 'tablist'
  });
  
  // Create tab content container
  const content_container = dom_element_create('div', {
    className: 'tabs-content'
  });
  
  // Initialize active tab
  let active_tab = options.active_tab || (options.tabs && options.tabs.length > 0 ? options.tabs[0].id : null);
  
  // Add tabs
  if (Array.isArray(options.tabs)) {
    options.tabs.forEach(tab => {
      // Create tab button
      const tab_item = dom_element_create('li', {
        className: 'tab-item',
        role: 'presentation'
      });
      
      const tab_button = dom_element_create('button', {
        textContent: tab.text,
        className: `tab-button ${tab.id === active_tab ? 'active' : ''}`,
        id: `tab-${tab.id}`,
        role: 'tab',
        'aria-selected': tab.id === active_tab ? 'true' : 'false',
        'aria-controls': `tabpanel-${tab.id}`,
        tabindex: tab.id === active_tab ? '0' : '-1'
      });
      
      // Add click handler
      tab_button.addEventListener('click', () => {
        // Update active tab
        active_tab = tab.id;
        
        // Update all tab buttons
        tabs_list.querySelectorAll('.tab-button').forEach(btn => {
          const is_active = btn.id === `tab-${active_tab}`;
          btn.classList.toggle('active', is_active);
          btn.setAttribute('aria-selected', is_active ? 'true' : 'false');
          btn.tabIndex = is_active ? 0 : -1;
        });
        
        // Update all tab panels
        content_container.querySelectorAll('.tab-panel').forEach(panel => {
          const is_active = panel.id === `tabpanel-${active_tab}`;
          panel.classList.toggle('active', is_active);
          panel.setAttribute('aria-hidden', is_active ? 'false' : 'true');
        });
        
        // Call change handler if provided
        if (options.on_tab_change) {
          options.on_tab_change(tab);
        }
      });
      
      tab_item.appendChild(tab_button);
      tabs_list.appendChild(tab_item);
      
      // Create tab panel
      const tab_panel = dom_element_create('div', {
        className: `tab-panel ${tab.id === active_tab ? 'active' : ''}`,
        id: `tabpanel-${tab.id}`,
        role: 'tabpanel',
        tabindex: '0',
        'aria-labelledby': `tab-${tab.id}`,
        'aria-hidden': tab.id === active_tab ? 'false' : 'true'
      });
      
      // Set panel content
      if (tab.content) {
        if (typeof tab.content === 'function') {
          const content = tab.content();
          if (content instanceof HTMLElement) {
            tab_panel.appendChild(content);
          } else if (typeof content === 'string') {
            tab_panel.innerHTML = content;
          }
        } else if (tab.content instanceof HTMLElement) {
          tab_panel.appendChild(tab.content);
        } else if (typeof tab.content === 'string') {
          tab_panel.innerHTML = tab.content;
        }
      }
      
      content_container.appendChild(tab_panel);
    });
  }
  
  container.appendChild(tabs_list);
  container.appendChild(content_container);
  
  return container;
};

/**
 * Creates a breadcrumb navigation
 * @param {Object} options - Configuration options
 * @param {Array} options.items - Array of breadcrumb items
 * @param {string} options.separator - Separator between items
 * @returns {HTMLElement} Breadcrumb element
 */
const nav_breadcrumb_create = (options = {}) => {
  const container = dom_element_create('nav', {
    className: 'breadcrumbs',
    'aria-label': 'Breadcrumb'
  });
  
  const list = dom_element_create('ol', {
    className: 'breadcrumb-list'
  });
  
  // Add breadcrumb items
  if (Array.isArray(options.items) && options.items.length > 0) {
    options.items.forEach((item, index) => {
      const is_last = index === options.items.length - 1;
      
      const list_item = dom_element_create('li', {
        className: `breadcrumb-item ${is_last ? 'active' : ''}`,
        'aria-current': is_last ? 'page' : null
      });
      
      if (is_last || !item.path) {
        // Last item or no path - just text
        list_item.textContent = item.text;
      } else {
        // Create link
        const link = dom_element_create('a', {
          href: item.path,
          textContent: item.text
        });
        
        list_item.appendChild(link);
      }
      
      list.appendChild(list_item);
    });
  }
  
  container.appendChild(list);
  
  return container;
};

// Export navigation components
export {
  nav_main_create,
  nav_item_create,
  nav_submenu_create,
  nav_tabs_create,
  nav_breadcrumb_create
}; 