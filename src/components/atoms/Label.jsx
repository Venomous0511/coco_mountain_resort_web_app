import React from "react";

export default function Label({ htmlFor, children, className = "", ...props }) {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`} {...props}>
      {children}
    </label>
  );
}
