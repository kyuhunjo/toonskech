import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.css'; // Import the CSS for styling

const FormInput = ({ label, type, name, value, onChange, isRequired }) => {
    return (
        <div className="form-group">
            {label && <label htmlFor={name}>{label}</label>}
            <input 
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={isRequired}
                className="form-input"
            />
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    isRequired: PropTypes.bool
};

FormInput.defaultProps = {
    type: 'text',
    isRequired: false
};

export default FormInput;
