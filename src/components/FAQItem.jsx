import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FAQItem.css'; // Import the CSS for styling

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={toggleOpen}>
                {question}
                <span className={`toggle-icon ${isOpen ? 'open' : ''}`}>&#9660;</span>
            </button>
            {isOpen && <p className="faq-answer">{answer}</p>}
        </div>
    );
};

FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
};

export default FAQItem;
