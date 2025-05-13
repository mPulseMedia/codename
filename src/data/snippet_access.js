/**
 * Snippet Access Module - Code snippet retrieval and management
 */
import { 
    snippet_cache_load, 
    snippet_cache_save, 
    snippet_cache_clear 
} from './storage.js';

import { cn_type_enum } from './cn_schema.js';

/**
 * Snippet Access Module - Using revealing module pattern
 */
const SnippetDM = (() => {
    // Private state
    let initialized_is = false;
    let snippets = {};
    let default_snippets = {};
    
    /**
     * Initialize the snippet module
     * @returns {boolean} Whether initialization was successful
     */
    const initialize = () => {
        if (initialized_is) return true;
        
        try {
            // Load snippets from cache
            snippets = snippet_cache_load();
            
            // Initialize default snippets for demonstration
            initializeDefaultSnippets();
            
            initialized_is = true;
            return true;
        } catch (error) {
            console.error('Error initializing snippet module:', error);
            return false;
        }
    };
    
    /**
     * Initialize default snippets for demonstration
     */
    const initializeDefaultSnippets = () => {
        default_snippets = {
            // Function examples
            'element_create': [
                {
                    code: `const button = element_create('button', {
    class: 'button button_primary',
    type: 'button',
    text: 'Click me'
});

document.body.appendChild(button);`,
                    language: 'javascript',
                    description: 'Creating a button element'
                },
                {
                    code: `const container = element_create('div', { class: 'container' }, [
    element_create('h1', { class: 'title', text: 'Hello World' }),
    element_create('p', { class: 'content', text: 'Lorem ipsum dolor sit amet' })
]);`,
                    language: 'javascript',
                    description: 'Creating a container with children'
                }
            ],
            
            'data_fetch': [
                {
                    code: `const user_data = await data_fetch('https://api.example.com/users/1');
console.log(user_data.name);`,
                    language: 'javascript',
                    description: 'Fetching user data from an API'
                }
            ],
            
            // Variable examples
            'app_container': [
                {
                    code: `const app_container = document.getElementById('app');

app_container.innerHTML = '<h1>Welcome to the application</h1>';`,
                    language: 'javascript',
                    description: 'Accessing the main application container'
                }
            ],
            
            'theme_current': [
                {
                    code: `// Check the current theme
if (theme_current === 'dark') {
    document.body.classList.add('theme_dark');
} else {
    document.body.classList.remove('theme_dark');
}`,
                    language: 'javascript',
                    description: 'Using the current theme variable'
                }
            ],
            
            // Class examples
            'header_container': [
                {
                    code: `<header class="header_container">
    <h1 class="header_title">Application Title</h1>
    <nav class="header_nav">
        <ul class="nav_list">
            <li class="nav_item"><a href="#" class="nav_link">Home</a></li>
            <li class="nav_item"><a href="#" class="nav_link">About</a></li>
        </ul>
    </nav>
</header>`,
                    language: 'html',
                    description: 'HTML structure using header classes'
                }
            ]
        };
    };
    
    /**
     * Get snippets for a specific codename
     * @param {string} codename - Codename to get snippets for
     * @returns {Array} Array of snippet objects
     */
    const getSnippets = (codename) => {
        if (!initialized_is) initialize();
        if (!codename) return [];
        
        // Check if we have saved snippets for this codename
        if (snippets[codename] && snippets[codename].length > 0) {
            return [...snippets[codename]];
        }
        
        // Fall back to default snippets
        if (default_snippets[codename]) {
            return [...default_snippets[codename]];
        }
        
        // Generate a placeholder snippet if nothing else available
        return [generatePlaceholderSnippet(codename)];
    };
    
    /**
     * Generate a placeholder snippet for a codename
     * @param {string} codename - Codename to generate for
     * @returns {Object} Snippet object
     */
    const generatePlaceholderSnippet = (codename) => {
        // Determine likely type from codename format
        let type = 'variable';
        
        if (codename.includes('_create') || 
            codename.includes('_update') || 
            codename.includes('_delete') || 
            codename.includes('_fetch')) {
            type = 'function';
        } else if (codename.includes('_container') || 
                  codename.includes('_list') || 
                  codename.includes('_item')) {
            type = 'class';
        }
        
        // Generate appropriate placeholder based on type
        let code = '';
        let language = 'javascript';
        let description = `Example usage of ${codename}`;
        
        switch (type) {
            case 'function':
                code = `// Example function usage
const result = ${codename}('example', { 
    option1: true,
    option2: 'value'
});

console.log(result);`;
                break;
                
            case 'class':
                code = `<!-- Example HTML with class -->
<div class="${codename}">
    <h2>Content Title</h2>
    <p>Content text goes here</p>
</div>

/* Example CSS */
.${codename} {
    display: block;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    background-color: #f5f5f5;
}`;
                language = 'html';
                break;
                
            default:
                code = `// Example variable usage
const ${codename} = {
    id: 1,
    name: 'Example',
    active_is: true
};

console.log(${codename}.name);`;
        }
        
        return { code, language, description, generated_is: true };
    };
    
    /**
     * Save a snippet for a codename
     * @param {string} codename - Codename to save snippet for
     * @param {Object} snippet - Snippet object to save
     * @returns {boolean} Whether save was successful
     */
    const saveSnippet = (codename, snippet) => {
        if (!initialized_is) initialize();
        if (!codename || !snippet) return false;
        
        // Initialize array if this is the first snippet for this codename
        if (!snippets[codename]) {
            snippets[codename] = [];
        }
        
        // Add timestamp to snippet
        const snippet_with_timestamp = {
            ...snippet,
            timestamp: Date.now()
        };
        
        // Add to snippets array
        snippets[codename].push(snippet_with_timestamp);
        
        // Save to cache
        return snippet_cache_save(snippets);
    };
    
    /**
     * Clear all snippet cache
     * @returns {boolean} Whether clear was successful
     */
    const clearSnippets = () => {
        snippets = {};
        return snippet_cache_clear();
    };
    
    /**
     * Format code with syntax highlighting
     * This is a placeholder for actual syntax highlighting
     * that would be implemented with a library like highlight.js
     * 
     * @param {string} code - Code to format
     * @param {string} language - Programming language
     * @returns {string} Formatted HTML
     */
    const formatCode = (code, language = 'javascript') => {
        if (!code) return '';
        
        // This is a simple placeholder for actual syntax highlighting
        // In production, you would use a library like highlight.js
        const escaped = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        
        return `<pre><code class="language-${language}">${escaped}</code></pre>`;
    };
    
    /**
     * Search within snippets
     * @param {string} query - Search text
     * @returns {Object} Matching snippets grouped by codename
     */
    const searchSnippets = (query) => {
        if (!initialized_is) initialize();
        if (!query) return {};
        
        const results = {};
        
        // Search in all snippets
        Object.keys(snippets).forEach(codename => {
            const matching_snippets = snippets[codename].filter(snippet => 
                snippet.code.includes(query) || 
                (snippet.description && snippet.description.includes(query))
            );
            
            if (matching_snippets.length > 0) {
                results[codename] = matching_snippets;
            }
        });
        
        // Also search in default snippets if not found in user snippets
        Object.keys(default_snippets).forEach(codename => {
            if (results[codename]) return; // Already found in user snippets
            
            const matching_snippets = default_snippets[codename].filter(snippet => 
                snippet.code.includes(query) || 
                (snippet.description && snippet.description.includes(query))
            );
            
            if (matching_snippets.length > 0) {
                results[codename] = matching_snippets;
            }
        });
        
        return results;
    };
    
    /**
     * Extract context around a specific line in a snippet
     * @param {string} code - Full code snippet
     * @param {number} line_number - Line number to focus on
     * @param {number} context_lines - Number of context lines before and after
     * @returns {Object} Extracted context with highlight position
     */
    const extractContext = (code, line_number, context_lines = 3) => {
        if (!code) return { code: '', highlight_line: 0 };
        
        const lines = code.split('\n');
        
        if (line_number < 0 || line_number >= lines.length) {
            return { code, highlight_line: 0 };
        }
        
        const start_line = Math.max(0, line_number - context_lines);
        const end_line = Math.min(lines.length - 1, line_number + context_lines);
        
        const context_code = lines.slice(start_line, end_line + 1).join('\n');
        const highlight_line = line_number - start_line;
        
        return {
            code: context_code,
            highlight_line
        };
    };
    
    // Public API
    return {
        initialize,
        getSnippets,
        saveSnippet,
        clearSnippets,
        formatCode,
        searchSnippets,
        extractContext
    };
})();

// Export the module
export default SnippetDM; 