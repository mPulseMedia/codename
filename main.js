// Main JavaScript file for Codename Project

// Log hello world message to console
const app_init = () => {
    console.log("Hello World from JavaScript!");
    document.addEventListener('DOMContentLoaded', dom_ready);
};

// DOM ready event handler
const dom_ready = () => {
    console.log("DOM fully loaded and parsed");
};

// Initialize application
app_init(); 