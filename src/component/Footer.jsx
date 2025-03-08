import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div>
                <p>&copy; 2025 TSP NewsBit. All rights reserved by Krishnendu & Kingshuk.</p>
                <div className='social'>
                    <span>Contact Us</span>
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/krishnendu-maji-8a1ab321a"><i className="fab fa-linkedin"></i></a>
                </div>
                <div>Or Mail Us
                    <a style={{marginLeft: '10px'}} href="mailto:km13krish@gmail.com">Here</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;