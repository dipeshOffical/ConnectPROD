import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Import the CSS for the button

const Button = ({ title, className }) => {
    return (
        <button className={`button ${className}`}>
            {title}
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Button;