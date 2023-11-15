import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Navigation.css'; // Assuming CSS is in the same folder


const Navigation = ({ activePage }) => {
    return (
        <nav>
            <div className="logo">
                
                <img src="/images/logo.jpg" alt="Webtoon Sketch Logo" />
            </div>
            <div className="nav-links">
                <NavLink to="/" className={activePage === 'home' ? 'active' : ''}>Home</NavLink>
                <NavLink to="/information" className={activePage === 'about' ? 'active' : ''}>About</NavLink>
                <NavLink to="/tool-interface" className={activePage === 'toolInterface' ? 'active' : ''}>Tool Interface</NavLink>
                <NavLink to="/learning-center" className={activePage === 'learningCenter' ? 'active' : ''}>Learning Center</NavLink>
                <NavLink to="/community" className={activePage === 'community' ? 'active' : ''}>Community</NavLink>
                <NavLink to="/contact-support" className={activePage === 'support' ? 'active' : ''}>Support</NavLink>
                <NavLink to="/privacy-terms" className={activePage === 'privacyTerms' ? 'active' : ''}>Privacy & Terms</NavLink>
                <button id="logIn" className="secondary-button">Log In</button>
            </div>
        </nav>
    );
};

export default Navigation;
