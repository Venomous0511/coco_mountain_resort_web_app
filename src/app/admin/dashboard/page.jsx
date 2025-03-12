import React from "react";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome Back Admin!</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "65%",
            backgroundColor: "#ffffff",
            padding: "10px",
          }}
        >
          <h2>Dashboard Content</h2>
          <p>
            Welcome to the admin dashboard. Here you can manage users, settings,
            and view reports.
          </p>
        </div>
      </div>
    </div>
  );
}
