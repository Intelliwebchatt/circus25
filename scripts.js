// Smooth scrolling for scroll indicator and links
document.querySelectorAll('.scroll-indicator, .cta').forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelector('.index-cards').scrollIntoView({ behavior: 'smooth' });
    });
});

// Lazy loading for images (if images are added later)
if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Notification API
if ('Notification' in window && Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            new Notification('Welcome to The Sarcastic Circus!', {
                body: 'Dive into the snarkiest show on the web.',
                icon: 'circus-icon.png', // Replace with actual icon URL
            });
        }
    });
}

// Form handling
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log('Form data submitted:', data);

        alert('Thanks for submitting! Our monkeys are on it.');
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: 0.1,
});

document.querySelectorAll('.card').forEach((card) => {
    observer.observe(card);
});

