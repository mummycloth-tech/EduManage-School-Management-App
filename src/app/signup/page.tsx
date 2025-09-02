"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });
    if (authError) {
      setError(authError.message);
    } else {
      setError("Sign-up successful! Check email to verify.");
    }
  };

  return (
    <div style={{ backgroundColor: "#E5E7EB", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "400px", margin: "0 auto", backgroundColor: "#FFFFFF", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <h1 style={{ color: "#1F2937", textAlign: "center" }}>EduManage Sign Up</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ color: "#1F2937" }}>School Name:</label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #D1D5DB", borderRadius: "4px" }}
            />
          </div>
          <div>
            <label style={{ color: "#1F2937" }}>Email:</label>
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
            Sign Up
          </button>
          {error && <p style={{ color: "#EF4444", textAlign: "center" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}