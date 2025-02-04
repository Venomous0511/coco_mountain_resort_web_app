import React from "react";
import Label from "./Label";

export default function Checkbox({
  checked,
  onChange,
  label,
  className = "",
  ...props
}) {
  return (
    <div className={`checkbox ${className}`}>
      <input type="checkbox" checked={checked} onChange={onChange} {...props} />
      {label && <Label>{label}</Label>}
    </div>
  );
}
