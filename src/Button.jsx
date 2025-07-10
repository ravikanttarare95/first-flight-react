import React from "react";

function Button({ title, variant }) {
  return <button className={`btn btn-${variant}`}>{title}</button>;
}

export default Button;
