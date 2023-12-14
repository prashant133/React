import React from "react";

const Alert = (props) => {
  // converting the first word of msg to uppercase
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)} </strong> : {props.alert.msg}
      </div>
    )
  );
};

export default Alert;
