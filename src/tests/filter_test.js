/**
 * Filter Component Tests
 */

import filter_component_create from '../components/filter_component.js';

/**
 * Test filter functionality
 */
const run_filter_tests = () => {
    console.log('filter_test: running filter component tests');
    
    // Create test container
    const test_container = document.createElement('div');
    test_container.id = 'test_container';
    test_container.style.display = 'none';
    document.body.appendChild(test_container);
    
    // Create test data
    const test_data = [
        { name: 'app_init', type: 'function', description: 'Initializes the application' },
        { name: 'user_login', type: 'function', description: 'Handles user login' },
        { name: 'config_load', type: 'function', description: 'Loads configuration' },
        { name: 'user_data', type: 'variable', description: 'Stores user data' },
        { name: 'app_running_is', type: 'variable', description: 'Whether app is running' },
        { name: 'UserProfile', type: 'class', description: 'User profile class' },
        { name: 'config_file', type: 'file', description: 'Configuration file path' }
    ];
    
    // Create filter component
    const filter_component = filter_component_create(test_container);
    
    // Extract roots for initialization
    const root_set = new Set();
    test_data.forEach(item => {
        const root = item.name.split('_')[0];
        if (root) root_set.add(root);
    });
    const roots = Array.from(root_set);
    
    // Initialize component
    filter_component.initialize(roots);
    
    // Test 1: Default filtering (everything passes)
    let results = filter_component.apply_filters(test_data);
    console.assert(results.length === test_data.length, 'Test 1 failed: Default filter should pass all items');
    
    // Modify filter state to only show functions
    const filter_state = filter_component.get_filter_state();
    Object.keys(filter_state.type_filters).forEach(type => {
        filter_state.type_filters[type] = type === 'function';
    });
    
    // Test 2: Type filtering
    results = filter_component.apply_filters(test_data);
    console.assert(
        results.every(item => item.type === 'function'),
        'Test 2 failed: Type filter should only show functions'
    );
    console.assert(
        results.length === 3,
        `Test 2 failed: Expected 3 functions, got ${results.length}`
    );
    
    // Test 3: Text search filtering
    filter_state.search_text = 'user';
    results = filter_component.apply_filters(test_data);
    console.assert(
        results.every(item => item.name.includes('user') || item.description.toLowerCase().includes('user')),
        'Test 3 failed: Text search should filter by name or description'
    );
    console.assert(
        results.length === 1,
        `Test 3 failed: Expected 1 result for 'user' search within functions, got ${results.length}`
    );
    
    // Reset filters for test 4
    Object.keys(filter_state.type_filters).forEach(type => {
        filter_state.type_filters[type] = true;
    });
    
    // Test 4: Search with all types
    results = filter_component.apply_filters(test_data);
    console.assert(
        results.length === 3,
        `Test 4 failed: Expected 3 results for 'user' search across all types, got ${results.length}`
    );
    
    // Test 5: Root filtering
    filter_state.search_text = '';
    filter_state.root_filters = { app: true, user: false, config: true };
    results = filter_component.apply_filters(test_data);
    console.assert(
        results.every(item => !item.name.startsWith('user_')),
        'Test 5 failed: Root filter should exclude user_ items'
    );
    console.assert(
        results.length === 5,
        `Test 5 failed: Expected 5 results when excluding user_ items, got ${results.length}`
    );
    
    // Test 6: Highlighting
    const highlighted = filter_component.highlight_matches('User login functionality');
    filter_state.search_text = 'login';
    console.assert(
        highlighted.includes('<span class="highlight">login</span>'),
        'Test 6 failed: Highlight should wrap search term with highlight span'
    );
    
    // Clean up
    document.body.removeChild(test_container);
    
    console.log('filter_test: all tests completed');
};

// Run tests when loaded directly
if (typeof window !== 'undefined' && window.location.pathname.includes('filter_test')) {
    window.addEventListener('DOMContentLoaded', run_filter_tests);
}

export default run_filter_tests; 