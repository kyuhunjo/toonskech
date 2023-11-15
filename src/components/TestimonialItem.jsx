import React from 'react';

const TestimonialItem = ({ quote, author }) => {
    return (
        <div className="testimonial-item">
            <blockquote>"{quote}"</blockquote>
            <footer>- {author}</footer>
        </div>
    );
};

export default TestimonialItem;
