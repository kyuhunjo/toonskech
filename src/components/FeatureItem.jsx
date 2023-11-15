import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/FeatureItem.css'; // Import the CSS for styling

const FeatureItem = ({ icon, title, description, imageUrl }) => {
    return (
        <div className="feature-item">
            {icon && <img src={icon} alt={title} className="feature-icon" />}
            <img src={imageUrl} alt={title} className="feature-icon" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

FeatureItem.propTypes = {
    icon: PropTypes.string, // URL of the icon image
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default FeatureItem;
