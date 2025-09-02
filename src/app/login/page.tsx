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
    <div className="min-h-screen flex items-center justify-center bg-[#D1C4E9]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all duration-300 hover:shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">EduManage Login</h1>
          <p className="text-gray-600 mt-2">Secure access for admins and users</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="admin"
                  checked={role === "admin"}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                />
                <span className="ml-2 text-gray-900">Admin</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="user"
                  checked={role === "user"}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                />
                <span className="ml-2 text-gray-900">User</span>
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-1">Admins manage school settings; Users are teachers, accountants, etc.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email or Phone</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email or phone"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Log In
          </button>
          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
          <div className="text-center">
            <a href="/signup" className="text-purple-600 hover:underline text-sm">
              Sign Up (New Schools Only)
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}