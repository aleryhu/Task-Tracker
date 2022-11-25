import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, click }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className='btn'
      onClick={click}
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: "Add",
  color: "stealblue",
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  click: PropTypes.func,

};
export default Button;
