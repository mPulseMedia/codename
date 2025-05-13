/**
 * Main application entry point
 */

// Import modules
import { dom_element_create } from './modules/dom.js';
import { ui_init } from './modules/ui.js';
import { data_init } from './modules/data.js';

// Application initialization
const app_init = () => {
  console.log('Codename application initializing...');
  
  // Initialize data layer
  data_init();
  
  // Initialize UI components
  ui_init();
  
  // Add welcome message
  const welcome_message = dom_element_create('div', {
    className: 'welcome-message',
    innerHTML: '<h2>Welcome to Codename</h2><p>A vanilla JavaScript application with modular structure</p>'
  });
  
  document.getElementById('app').appendChild(welcome_message);
};

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', app_init);

// Export main functions
export { app_init }; 