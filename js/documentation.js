// Documentation structure
const docs = [
    { id: 'getting-started', title: 'Getting Started', file: 'getting-started.md' },
    { id: 'features', title: 'Features', file: 'features.md' },
    { id: 'installation', title: 'Installation', file: 'installation.md' },
    { id: 'usage', title: 'Usage Guide', file: 'usage.md' },
];

// Initialize documentation page
async function initDocs() {
    // Ensure marked is loaded
    if (typeof marked === 'undefined') {
        throw new Error('Marked library is not loaded. Please include the marked.js script.');
    }

    // Configure marked options for security
    marked.setOptions({
        headerIds: true,
        mangle: false,
        breaks: true,
        sanitize: true
    });

    // Create navigation
    const nav = document.getElementById('doc-nav');
    if (!nav) {
        console.error('Navigation element not found');
        return;
    }

    docs.forEach(doc => {
        const link = document.createElement('a');
        link.href = `#${doc.id}`;
        link.textContent = doc.title;
        link.className = 'doc-nav-link'; // Use CSS class instead of inline styles
        nav.appendChild(link);
    });

    // Handle navigation
    window.removeEventListener('hashchange', loadContent); // Clean up any existing listeners
    window.addEventListener('hashchange', loadContent);

    // Load initial content
    if (!window.location.hash && docs.length > 0) {
        window.location.hash = docs[0].id;
    } else {
        await loadContent();
    }
}

// Load documentation content
async function loadContent() {
    const docContent = document.getElementById('doc-content');
    if (!docContent) {
        console.error('Content element not found');
        return;
    }

    const currentDoc = docs.find(doc => `#${doc.id}` === window.location.hash) || docs[0];
    
    try {
        // Show loading state
        docContent.innerHTML = '<div class="loading">Loading documentation...</div>';

        const response = await fetch(`docs/${currentDoc.file}`);
        if (!response.ok) {
            throw new Error(`Failed to load documentation: ${response.statusText}`);
        }
        
        const markdown = await response.text();
        if (!markdown.trim()) {
            throw new Error('Documentation file is empty');
        }

        // Parse and render markdown
        docContent.innerHTML = marked.parse(markdown);

        // Update page title
        document.title = `${currentDoc.title} - Documentation`;
        
        // Highlight active navigation item
        document.querySelectorAll('.doc-nav-link').forEach(link => {
            link.classList.toggle('active', link.hash === window.location.hash);
        });

    } catch (error) {
        console.error('Documentation loading error:', error);
        docContent.innerHTML = `
            <div class="error-card">
                <h2>Error Loading Documentation</h2>
                <p>${error.message}</p>
                <button onclick="loadContent()">Try Again</button>
            </div>
        `;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initDocs);
