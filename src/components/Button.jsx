import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Import the CSS for styling

const Button = ({ label, onClick, variant }) => {
    return (
        <button className={`btn ${variant}`} onClick={onClick}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary'])
};

Button.defaultProps = {
    variant: 'primary'
};

export default Button;
