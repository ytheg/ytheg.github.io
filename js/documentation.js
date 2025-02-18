// Documentation structure
const docs = [
    { id: 'getting-started', title: 'Getting Started', file: 'getting_started.md' },
    { id: 'features', title: 'Features', file: 'features.md' },
    { id: 'installation', title: 'Installation', file: 'installation.md' },
    { id: 'usage', title: 'Usage Guide', file: 'usage.md' },
];

// Initialize documentation page
async function initDocs() {
    // Create navigation
    const nav = document.getElementById('doc-nav');
    docs.forEach(doc => {
        const link = document.createElement('a');
        link.href = `#${doc.id}`;
        link.textContent = doc.title;
        link.style.display = 'block';
        link.style.marginBottom = '1rem';
        link.style.color = 'var(--link-color)';
        link.style.textDecoration = 'none';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = doc.id;
            loadContent();
        });
        nav.appendChild(link);
    });

    // Handle navigation
    window.addEventListener('hashchange', loadContent);
    if (!window.location.hash && docs.length > 0) {
        window.location.hash = docs[0].id;
    } else {
        loadContent();
    }
}

// Load documentation content
async function loadContent() {
    const docContent = document.getElementById('doc-content');
    const currentDoc = docs.find(doc => `#${doc.id}` === window.location.hash) || docs[0];
    
    try {
        const response = await fetch(`docs/${currentDoc.file}`);
        if (!response.ok) throw new Error('Documentation file not found');
        
        const markdown = await response.text();
        docContent.innerHTML = marked.parse(markdown);
    } catch (error) {
        docContent.innerHTML = `
            <div class="card">
                <h2>Error Loading Documentation</h2>
                <p>${error.message}</p>
            </div>
        `;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initDocs);
