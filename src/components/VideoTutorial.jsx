import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/VideoTutorial.css'; // Import the CSS for styling

const VideoTutorial = ({ videoUrl, title, description }) => {
    return (
        <div className="video-tutorial">
            <iframe 
                src={videoUrl} 
                title={title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="tutorial-video"
            ></iframe>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

VideoTutorial.propTypes = {
    videoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default VideoTutorial;
