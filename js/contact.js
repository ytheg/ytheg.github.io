document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Here you would typically send the data to a server
        // For GitHub Pages (static hosting), you might want to:
        // 1. Use a form service like Formspree
        // 2. Set up a serverless function
        // 3. Use GitHub Issues API
        
        alert('Thank you for your message! This is a demo form - in a real implementation, you would integrate with a form handling service.');
        form.reset();
    });
});
