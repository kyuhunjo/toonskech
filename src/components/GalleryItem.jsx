import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/GalleryItem.css'; // Import the CSS for styling

const GalleryItem = ({ imageUrl, altText, caption }) => {
    return (
        <div className="gallery-item">
            <img src={imageUrl} alt={altText} className="gallery-image" />
            {caption && <p className="gallery-caption">{caption}</p>}
        </div>
    );
};

GalleryItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    caption: PropTypes.string
};

export default GalleryItem;
