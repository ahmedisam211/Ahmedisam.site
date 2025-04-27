document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-item a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath || 
            (currentPath === '/' && linkPath === '/') || 
            (currentPath !== '/' && linkPath !== '/' && currentPath.includes(linkPath))) {
            link.classList.add('active');
        }
    });

    // Form validation for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Simple validation
            if (!name.value.trim()) {
                alert('Please enter your name');
                isValid = false;
            } else if (!email.value.trim() || !email.value.includes('@')) {
                alert('Please enter a valid email address');
                isValid = false;
            } else if (!message.value.trim()) {
                alert('Please enter a message');
                isValid = false;
            }
            
            if (isValid) {
                alert('Thank you for your message! In an online version, this would be submitted to a server.');
                contactForm.reset();
            }
        });
    }

    // Form validation for content submission form
    const submitForm = document.getElementById('submit-form');
    if (submitForm) {
        submitForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('submitter-name');
            const email = document.getElementById('submitter-email');
            const contentType = document.getElementById('content-type');
            const content = document.getElementById('content');
            
            // Simple validation
            if (!name.value.trim()) {
                alert('Please enter your name');
                isValid = false;
            } else if (!email.value.trim() || !email.value.includes('@')) {
                alert('Please enter a valid email address');
                isValid = false;
            } else if (!contentType.value) {
                alert('Please select a content type');
                isValid = false;
            } else if (!content.value.trim()) {
                alert('Please enter your content');
                isValid = false;
            }
            
            if (isValid) {
                alert('Thank you for your submission! In an online version, this would be submitted to a server.');
                submitForm.reset();
            }
        });
    }
});
