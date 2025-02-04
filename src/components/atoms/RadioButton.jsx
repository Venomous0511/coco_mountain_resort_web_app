import React from "react";
import Label from "./Label";

export default function RadioButton({
  name,
  value,
  checked,
  onChange,
  label,
  className = "",
  ...props
}) {
  return (
    <div className={`radio-button ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      {label && <Label>{label}</Label>}
    </div>
  );
}
