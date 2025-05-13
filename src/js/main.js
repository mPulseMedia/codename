/**
 * main.js - Main entry point for the Codename application
 */

// Import modules
import { app_initialize } from './modules/app.js';

// DOM content loaded event listener
document.addEventListener('DOMContentLoaded', () => {
  console.log('Codename application initializing...');
  app_initialize();
});