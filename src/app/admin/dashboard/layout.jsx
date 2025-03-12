import React from "react";
import Header from "./ui/header";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Header />
      </div>
      <div style={{ flex: 5 }}>
        <main>{children}</main>
      </div>
    </div>
  );
}
