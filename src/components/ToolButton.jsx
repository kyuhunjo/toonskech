import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/ToolButton.css';

const ToolButton = ({ label, onClick, icon, active }) => {
    // Add a conditional class for active state styling
    const buttonClass = active ? 'tool-button active' : 'tool-button';
    
    return (
        <button className={buttonClass} onClick={onClick}>
            {icon && <img src={icon} alt={label} className="button-icon" />}
            {label}
        </button>
    );
};

ToolButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string, // Now icon is a part of props
    active: PropTypes.bool
};

export default ToolButton;
