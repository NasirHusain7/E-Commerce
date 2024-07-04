import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <p className="footer-name">Nasir Husain</p>
                    <p className="footer-email">
                        <a href="mailto:nasirhusain8920@gmail.com">nasirhusain8920@gmail.com</a>
                    </p>
                </div>
                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-social">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Nasir Husain. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
