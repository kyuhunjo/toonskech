import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.css'; // Import the CSS for styling

const TextArea = ({ label, name, value, onChange, rows, isRequired }) => {
    return (
        <div className="form-group">
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                required={isRequired}
                className="form-textarea"
            ></textarea>
        </div>
    );
};

TextArea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    rows: PropTypes.number,
    isRequired: PropTypes.bool
};

TextArea.defaultProps = {
    rows: 4,
    isRequired: false
};

export default TextArea;
