/**
 * Lookup Component Tests
 */

import lookup_component_create from '../components/lookup_component.js';

/**
 * Test lookup functionality
 */
const run_lookup_tests = () => {
    console.log('lookup_test: running lookup component tests');
    
    // Create test container
    const test_container = document.createElement('div');
    test_container.id = 'test_container';
    test_container.style.height = '500px'; // Set height to test scrolling
    document.body.appendChild(test_container);
    
    // Create test data
    const test_codename = {
        name: 'test_function',
        type: 'function',
        description: 'A test function for demonstration'
    };
    
    const test_snippets = [
        {
            code: `function test_function(param) {
    console.log('Testing function');
    return param + 1;
}`,
            language: 'javascript',
            description: 'Basic test function'
        },
        {
            code: `// Usage example
const result = test_function(5);
console.log(result); // 6`,
            language: 'javascript',
            description: 'Usage example'
        }
    ];
    
    // Create lookup component
    const lookup_component = lookup_component_create(test_container);
    
    // Initialize component
    lookup_component.initialize();
    
    // Test 1: Initial state (placeholder)
    console.assert(
        test_container.querySelector('.lookup_placeholder') !== null,
        'Test 1 failed: Lookup should show placeholder initially'
    );
    
    console.assert(
        lookup_component.get_active_codename() === null,
        'Test 1 failed: Active codename should be null initially'
    );
    
    // Test 2: Show lookup with codename and snippets
    lookup_component.show_lookup(test_codename, test_snippets);
    
    console.assert(
        test_container.querySelector('.lookup_placeholder') === null,
        'Test 2 failed: Placeholder should be removed when showing lookup'
    );
    
    console.assert(
        test_container.querySelector('.lookup_title')?.textContent === test_codename.name,
        'Test 2 failed: Lookup title should match codename name'
    );
    
    console.assert(
        test_container.querySelector('.type_badge')?.textContent === test_codename.type,
        'Test 2 failed: Type badge should show correct type'
    );
    
    console.assert(
        test_container.querySelector('.lookup_description')?.textContent.includes(test_codename.description),
        'Test 2 failed: Description should be displayed'
    );
    
    console.assert(
        test_container.querySelector('.snippet_container') !== null,
        'Test 2 failed: Snippet container should be created'
    );
    
    console.assert(
        test_container.querySelector('.snippet_title')?.textContent === test_snippets[0].description,
        'Test 2 failed: First snippet should be displayed initially'
    );
    
    console.assert(
        test_container.querySelector('.snippet_navigation') !== null,
        'Test 2 failed: Navigation should be shown for multiple snippets'
    );
    
    // Test 3: Navigation between snippets
    const next_button = test_container.querySelector('.snippet_next');
    if (next_button) {
        // Simulate click on next button
        next_button.click();
        
        console.assert(
            test_container.querySelector('.snippet_title')?.textContent === test_snippets[1].description,
            'Test 3 failed: Navigation to next snippet failed'
        );
        
        // Test navigation through API
        lookup_component.previous_snippet();
        
        console.assert(
            test_container.querySelector('.snippet_title')?.textContent === test_snippets[0].description,
            'Test 3 failed: Navigation to previous snippet failed'
        );
    }
    
    // Test 4: Toggle format
    const format_button = test_container.querySelector('.lookup_format');
    if (format_button) {
        // Get current code content
        const initial_content = test_container.querySelector('code')?.innerHTML;
        
        // Toggle format
        lookup_component.toggle_format();
        
        // Get new content
        const new_content = test_container.querySelector('code')?.innerHTML;
        
        console.assert(
            initial_content !== new_content,
            'Test 4 failed: Toggle format should change code display'
        );
    }
    
    // Test 5: Clear lookup
    lookup_component.clear_lookup();
    
    console.assert(
        test_container.querySelector('.lookup_placeholder') !== null,
        'Test 5 failed: Clear lookup should restore placeholder'
    );
    
    console.assert(
        lookup_component.get_active_codename() === null,
        'Test 5 failed: Active codename should be null after clearing'
    );
    
    // Test 6: Show with no snippets
    lookup_component.show_lookup(test_codename, []);
    
    console.assert(
        test_container.querySelector('.snippet_empty') !== null,
        'Test 6 failed: Empty state should be shown when no snippets are available'
    );
    
    console.assert(
        test_container.querySelector('.snippet_navigation') === null,
        'Test 6 failed: Navigation should not be shown for empty snippets'
    );
    
    // Clean up
    document.body.removeChild(test_container);
    
    console.log('lookup_test: all tests completed');
};

// Run tests when loaded directly
if (typeof window !== 'undefined' && window.location.pathname.includes('lookup_test')) {
    window.addEventListener('DOMContentLoaded', run_lookup_tests);
}

export default run_lookup_tests; 