/* Global Styles */
body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    overflow-x: hidden;
}

header {
    position: relative;
    height: 100vh;
    background: url('hero-image.jpg') no-repeat center center/cover;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hero h1 {
    font-size: 4rem;
    margin: 0;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.hero .tagline {
    font-size: 1.5rem;
    margin: 10px 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.cta {
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 25px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.cta:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.scroll-indicator {
    margin-top: 20px;
    font-size: 2rem;
    animation: bounce 1.5s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

/* Index Cards Section */
.index-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: -50px;
    gap: 20px;
}

.card {
    position: relative;
    width: 80%;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.card a {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 20px;
    text-align: center;
}

.card-content h2 {
    font-size: 1.8rem;
    margin: 0;
}

.card-content p {
    margin: 10px 0 0;
    font-size: 1rem;
    color: #666;
}

/* Contact Form Section */
.contact-section {
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    color: white;
    padding: 50px 20px;
    text-align: center;
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
}

.contact-form-wrapper {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.contact-form-wrapper h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
}

.contact-form-wrapper .form-group {
    margin-bottom: 20px;
    text-align: left;
}

.contact-form-wrapper label {
    display: block;
    font-size: 1rem;
    margin-bottom: 5px;
    color: #555;
}

.contact-form-wrapper input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.contact-form-wrapper button {
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: white;
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.contact-form-wrapper button:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Hero Image Scroll Section */
.hero-image-scroll {
    position: relative;
    background: url('hero-scroll.jpg') no-repeat center center/cover;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
}

.hero-image-scroll .scroll-content {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
}

.hero-image-scroll .scroll-content h2 {
    font-size: 2rem;
    margin-bottom: 10px;
}

.hero-image-scroll .scroll-content p {
    font-size: 1.2rem;
}
