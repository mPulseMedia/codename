/**
 * Search Component Tests
 */

import search_component_create from '../components/search_component.js';

/**
 * Test search functionality
 */
const run_search_tests = () => {
    console.log('search_test: running search component tests');
    
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
    
    // Create search component
    const search_component = search_component_create(test_container);
    
    // Initialize component
    search_component.initialize();
    
    // Test 1: Basic search functionality
    let results = search_component.search_items(test_data, 'app');
    console.assert(results.length === 2, `Test 1 failed: Expected 2 results for 'app', got ${results.length}`);
    console.assert(
        results.every(item => item.name.includes('app') || item.description.toLowerCase().includes('app')),
        'Test 1 failed: All results should contain "app" in name or description'
    );
    
    // Test 2: Empty search
    results = search_component.search_items(test_data, '');
    console.assert(results.length === 0, `Test 2 failed: Empty search should return no results, got ${results.length}`);
    
    // Test 3: Case insensitive search
    results = search_component.search_items(test_data, 'USER');
    console.assert(results.length === 3, `Test 3 failed: Expected 3 results for 'USER', got ${results.length}`);
    
    // Test 4: No matches
    results = search_component.search_items(test_data, 'nonexistent');
    console.assert(results.length === 0, `Test 4 failed: Search with no matches should return empty array, got ${results.length}`);
    
    // Test 5: Search event callback
    let search_called = false;
    let search_query = '';
    
    search_component.on_search((query) => {
        search_called = true;
        search_query = query;
    });
    
    // Simulate a search
    search_component.set_query('test');
    
    // Programmatically trigger search (normally done by UI)
    const search_input = test_container.querySelector('.search_input');
    const search_button = test_container.querySelector('.search_button');
    
    if (search_input && search_button) {
        search_input.value = 'test_query';
        search_button.click();
        
        console.assert(search_called, 'Test 5 failed: Search callback should be called');
        console.assert(search_query === 'test_query', `Test 5 failed: Search query should be "test_query", got "${search_query}"`);
    }
    
    // Test 6: Result selection
    let selected_result = null;
    
    search_component.on_result_select((result) => {
        selected_result = result;
    });
    
    // Set some search results
    search_component.set_results(test_data.slice(0, 3));
    
    // Simulate selecting a result
    const result_item = test_container.querySelector('.result_item');
    if (result_item) {
        result_item.click();
        
        console.assert(selected_result !== null, 'Test 6 failed: Result selection callback should be called');
        console.assert(selected_result.name === test_data[0].name, 
            `Test 6 failed: Selected result should be "${test_data[0].name}", got "${selected_result?.name}"`);
    }
    
    // Clean up
    document.body.removeChild(test_container);
    
    console.log('search_test: all tests completed');
};

// Run tests when loaded directly
if (typeof window !== 'undefined' && window.location.pathname.includes('search_test')) {
    window.addEventListener('DOMContentLoaded', run_search_tests);
}

export default run_search_tests; 