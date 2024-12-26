// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Lazy Loading
document.addEventListener('DOMContentLoaded', () => {
    const lazyElements = document.querySelectorAll('img[data-src], [data-lazy]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                if (element.dataset.src) {
                    element.src = element.dataset.src;
                    element.removeAttribute('data-src');
                }
                observer.unobserve(element);
            }
        });
    });
    lazyElements.forEach(el => observer.observe(el));
});

// Form Handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thanks for reaching out!');
});

// Notification API
if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            new Notification('Welcome to Sarcastic Circus!', {
                body: 'Enjoy the unpredictable fun!',
                icon: 'circus-icon.png' // Placeholder for an actual icon file
            });
        }
    });
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(() => {
        console.log('Service Worker Registered');
    }).catch(err => {
        console.error('Service Worker Registration Failed:', err);
    });
}
