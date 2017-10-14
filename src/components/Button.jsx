import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, clickHandler }) => {
  // Returns the value of the Button back to the Calculator Container.
  const buttonClick = (e) => {
    return clickHandler(e.target.value);
  };

  // Check the value, in order to assign the appropriate CSS Class.
  const getClassName = () => {
    if (value === '+' || value === '-' || value === '*' || value === '/' || value === '+/-') {
      return 'operator-button';
    } else if (value === 'MC' || value === 'M+' || value === 'M-' || value === 'MR') {
      return 'memory-button';
    } else if (value === '=') {
      return 'equals-button';
    } else if (value === "CLEAR") {
      return 'clear-button';
    }
    return 'calculator-button';
  };

  return (
    <div id="button-container">
      <button onClick={buttonClick} value={value} className={getClassName()}>{value}</button>
    </div>
  );
};

Button.PropTypes = {
  value: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
