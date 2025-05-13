/**
 * Header component for the application
 */
import { dom_element_create } from '../lib/dom_util.js';

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

export { header_create }; 