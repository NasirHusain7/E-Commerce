import React from 'react';
import '../css/About.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <div className="about-content">
                <p>Welcome to our e-commerce website! We offer a wide range of products to meet all your needs. Our mission is to provide the best quality products at the most affordable prices.</p>
                <p>We are committed to excellent customer service and strive to ensure a great shopping experience for all our customers.</p>
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p><strong>Name:</strong> Nasir Husain</p>
                    <p><strong>Email:</strong> <a href="mailto:nasirhusain8920@gmail.com">nasirhusain8920@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
