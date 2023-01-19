import React from "react";

const Button = (props) => {
  const { children, className } = props;
  return (
    <button
      className={`btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white ${
        className || className
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
