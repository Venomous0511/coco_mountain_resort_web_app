import React from "react";

export default function Pills({ className = "", children }) {
  return (
    <span
      className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm ${className}`}
    >
      {children}
    </span>
  );
}
