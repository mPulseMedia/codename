/**
 * Client-side router for single-page application navigation
 * Manages routes, navigation, and browser history
 */

// Store routes and current route state
const router_state = {
  routes: [],
  current_route: null,
  default_route: null,
  root_element: null
};

/**
 * Initializes the router
 * @param {Object} options - Router configuration
 * @param {string} options.root_element_id - ID of the root element for rendering views
 * @param {Object[]} options.routes - Array of route definitions
 * @param {string} options.default_route - Path of the default route
 */
const router_init = (options = {}) => {
  // Set root element for rendering views
  router_state.root_element = document.getElementById(options.root_element_id || 'app');
  
  // Configure routes
  if (Array.isArray(options.routes)) {
    router_state.routes = options.routes;
  }
  
  // Set default route
  router_state.default_route = options.default_route || '/';
  
  // Listen for hashchange events
  window.addEventListener('hashchange', router_handle_hash_change);
  
  // Initial route handling
  router_handle_hash_change();
  
  console.log('Router initialized');
};

/**
 * Handles hash change events
 */
const router_handle_hash_change = () => {
  // Get the current hash (without the # symbol)
  const hash = window.location.hash.substring(1) || '/';
  
  // Find matching route
  router_navigate(hash);
};

/**
 * Navigates to a specific route
 * @param {string} path - Route path to navigate to
 * @param {Object} params - Optional parameters to pass to the route handler
 */
const router_navigate = (path, params = {}) => {
  // Find matching route
  const route = router_find_route(path);
  
  // If no matching route, use default route
  if (!route) {
    console.warn(`No route found for path: ${path}`);
    if (path !== router_state.default_route) {
      router_navigate(router_state.default_route);
    }
    return;
  }
  
  // Update current route
  router_state.current_route = {
    path,
    route,
    params
  };
  
  // Update URL hash if needed
  if (window.location.hash.substring(1) !== path) {
    window.location.hash = `#${path}`;
  }
  
  // Render the view
  router_render_view();
};

/**
 * Finds a route matching the given path
 * @param {string} path - Route path to match
 * @returns {Object|null} Matching route or null if not found
 */
const router_find_route = (path) => {
  // First try exact match
  let route = router_state.routes.find(r => r.path === path);
  
  // If no exact match, try pattern matching
  if (!route) {
    route = router_state.routes.find(r => {
      if (!r.pattern) return false;
      
      // Create regex from pattern
      const pattern_regex = new RegExp(r.pattern);
      return pattern_regex.test(path);
    });
  }
  
  return route || null;
};

/**
 * Renders the current route's view
 */
const router_render_view = () => {
  if (!router_state.root_element || !router_state.current_route) {
    return;
  }
  
  const { route, params } = router_state.current_route;
  
  // Clear the root element
  while (router_state.root_element.firstChild) {
    router_state.root_element.removeChild(router_state.root_element.firstChild);
  }
  
  // If the route has a render function, call it
  if (typeof route.render === 'function') {
    const view = route.render(params);
    
    if (view instanceof HTMLElement) {
      router_state.root_element.appendChild(view);
    } else if (typeof view === 'string') {
      router_state.root_element.innerHTML = view;
    }
  }
  
  // Trigger onNavigate callback if defined
  if (typeof route.onNavigate === 'function') {
    route.onNavigate(params);
  }
  
  // Update document title if provided
  if (route.title) {
    document.title = route.title;
  }
};

/**
 * Gets the current route information
 * @returns {Object} Current route state
 */
const router_get_current = () => {
  return {...router_state.current_route};
};

/**
 * Creates a link that works with the router
 * @param {string} path - Route path to link to
 * @param {string} text - Link text
 * @param {Object} options - Additional link options (className, id, etc.)
 * @returns {HTMLElement} Anchor element
 */
const router_link_create = (path, text, options = {}) => {
  const link = document.createElement('a');
  link.href = `#${path}`;
  link.textContent = text;
  
  // Apply additional options
  Object.entries(options).forEach(([key, value]) => {
    link[key] = value;
  });
  
  return link;
};

// Export router functions
export {
  router_init,
  router_navigate,
  router_get_current,
  router_link_create
}; 