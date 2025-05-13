/**
 * Main JavaScript file for Codename Project
 */
import { CodenameDM, SnippetDM } from './data/index.js';

// DOM utility functions
const dom_element_create = (tag, attributes = {}, children = []) => {
    const element = document.createElement(tag);
    
    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'class') {
            element.className = value;
        } else if (key === 'text') {
            element.textContent = value;
        } else {
            element.setAttribute(key, value);
        }
    });
    
    // Append children
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    
    return element;
};

// Create header component with title
const header_create = (title = 'Codename Project') => {
    return dom_element_create('header', { class: 'header_container' }, [
        dom_element_create('h1', { class: 'header_title', text: title }),
        dom_element_create('nav', { class: 'header_nav' }, [
            dom_element_create('ul', { class: 'nav_list' }, [
                dom_element_create('li', { class: 'nav_item' }, [
                    dom_element_create('a', { href: '#', text: 'Home', class: 'nav_link' })
                ]),
                dom_element_create('li', { class: 'nav_item' }, [
                    dom_element_create('a', { href: '#', text: 'About', class: 'nav_link' })
                ])
            ])
        ])
    ]);
};

// Application initialization
const app_init = () => {
    console.log("Codename application initializing...");
    
    // Initialize data modules
    const data_init_success = CodenameDM.initialize();
    const snippet_init_success = SnippetDM.initialize();
    
    console.log(`Data initialization: ${data_init_success ? 'Success' : 'Failed'}`);
    console.log(`Snippet initialization: ${snippet_init_success ? 'Success' : 'Failed'}`);
    
    // Add DOM ready listener
    document.addEventListener('DOMContentLoaded', dom_ready);
};

// DOM ready event handler
const dom_ready = () => {
    console.log("DOM fully loaded and parsed");
    
    // Get the container element
    const app_container = document.getElementById('app');
    
    if (!app_container) {
        console.error('App container not found');
        return;
    }
    
    // Create basic test display
    const test_display = document.createElement('div');
    test_display.className = 'test_display';
    
    // Create a heading
    const heading = document.createElement('h1');
    heading.textContent = 'Codename Data Loaded';
    test_display.appendChild(heading);
    
    // Show some codename stats
    const codename_list = CodenameDM.getAll();
    const stats_element = document.createElement('p');
    stats_element.textContent = `Loaded ${codename_list.length} codenames`;
    test_display.appendChild(stats_element);
    
    // Show some types
    const type_list = ['FUNCTION', 'VARIABLE', 'CLASS', 'PARAMETER'];
    const type_container = document.createElement('div');
    type_container.className = 'type_container';
    
    type_list.forEach(type => {
        const codenames = CodenameDM.getByType(type);
        
        const type_element = document.createElement('div');
        type_element.className = 'type_group';
        
        const type_title = document.createElement('h2');
        type_title.textContent = `${type} (${codenames.length})`;
        type_element.appendChild(type_title);
        
        const codename_list_el = document.createElement('ul');
        
        // Show up to 5 codenames of this type
        codenames.slice(0, 5).forEach(cn => {
            const cn_item = document.createElement('li');
            cn_item.textContent = cn.name;
            cn_item.className = 'codename_item';
            
            // Add click handler to show snippet
            cn_item.addEventListener('click', () => {
                const snippets = SnippetDM.getSnippets(cn.name);
                if (snippets.length > 0) {
                    const snippet_html = SnippetDM.formatCode(snippets[0].code, snippets[0].language);
                    snippet_display.innerHTML = snippet_html;
                    snippet_title.textContent = `${cn.name} Example`;
                }
            });
            
            codename_list_el.appendChild(cn_item);
        });
        
        type_element.appendChild(codename_list_el);
        type_container.appendChild(type_element);
    });
    
    test_display.appendChild(type_container);
    
    // Create snippet display area
    const snippet_container = document.createElement('div');
    snippet_container.className = 'snippet_container';
    
    const snippet_title = document.createElement('h2');
    snippet_title.textContent = 'Click a codename to see examples';
    snippet_container.appendChild(snippet_title);
    
    const snippet_display = document.createElement('div');
    snippet_display.className = 'snippet_display';
    snippet_container.appendChild(snippet_display);
    
    test_display.appendChild(snippet_container);
    
    // Add test display to app container
    app_container.appendChild(test_display);
};

// Initialize application
app_init(); 