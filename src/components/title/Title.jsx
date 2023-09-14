import React from "react";

const Title = ({ name, className }) => {
  return <div className={`title ${className}`}>{name}</div>;
};

export default Title;
