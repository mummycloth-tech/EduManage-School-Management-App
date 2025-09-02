"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (authError) {
      setError(authError.message);
    } else if (data.user) {
      setError("Login successful! (Redirect not implemented yet)");
    }
  };

  return (
    <div style={{ backgroundColor: "#E5E7EB", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "400px", margin: "0 auto", backgroundColor: "#FFFFFF", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <h1 style={{ color: "#1F2937", textAlign: "center" }}>EduManage Login</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ color: "#1F2937" }}>Role:</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="admin"
                  checked={role === "admin"}
                  onChange={(e) => setRole(e.target.value)}
                  style={{ marginRight: "0.5rem" }}
                />
                Admin
              </label>
              <label style={{ marginLeft: "1rem" }}>
                <input
                  type="radio"
                  value="user"
                  checked={role === "user"}
                  onChange={(e) => setRole(e.target.value)}
                  style={{ marginRight: "0.5rem" }}
                />
                User
              </label>
            </div>
            <p style={{ color: "#4B5563", fontSize: "0.875rem" }}>Admins manage school settings; Users are teachers, accountants, etc.</p>
          </div>
          <div>
            <label style={{ color: "#1F2937" }}>Email or Phone:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #D1D5DB", borderRadius: "4px" }}
            />
          </div>
          <div>
            <label style={{ color: "#1F2937" }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #D1D5DB", borderRadius: "4px" }}
            />
          </div>
          <button
            type="submit"
            style={{ padding: "0.75rem", backgroundColor: "#3B82F6", color: "#FFFFFF", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Log In
          </button>
          <a href="/signup" style={{ color: "#3B82F6", textAlign: "center", display: "block", textDecoration: "none" }}>
            Sign Up (New Schools Only)
          </a>
          {error && <p style={{ color: "#EF4444", textAlign: "center" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}