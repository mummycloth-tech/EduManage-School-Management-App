"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignUp() {
  const [schoolName, setSchoolName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [schoolPhone, setSchoolPhone] = useState("+1 (555) 123-4567");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [schoolType, setSchoolType] = useState("Primary School");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          school_name: schoolName,
          school_address: schoolAddress,
          school_phone: schoolPhone,
          school_email: schoolEmail,
          school_type: schoolType,
          full_name: fullName,
        },
      },
    });
    if (authError) {
      setError(authError.message);
    } else {
      setSuccess("Sign-up successful! Please check your email to verify your account, then log in.");
      setError("");
      // Reset form
      setSchoolName("");
      setSchoolAddress("");
      setSchoolPhone("+1 (555) 123-4567");
      setSchoolEmail("");
      setSchoolType("Primary School");
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D1C4E9]">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">Register Your School</h1>
        <p className="text-sm text-gray-600 text-center mb-6">Create an account to start managing your school</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-md font-semibold text-gray-700 mb-2">School Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="schoolName">
                  School Name *
                </label>
                <input
                  type="text"
                  id="schoolName"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ color: "#000000" }}
                  placeholder="Enter your school name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="schoolType">
                  School Type *
                </label>
                <select
                  id="schoolType"
                  value={schoolType}
                  onChange={(e) => setSchoolType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ color: "#000000" }}
                  required
                >
                  <option value="Primary School">Primary School</option>
                  <option value="Secondary School">Secondary School</option>
                  <option value="College">College</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="schoolAddress">
                  School Address
                </label>
                <input
                  type="text"
                  id="schoolAddress"
                  value={schoolAddress}
                  onChange={(e) => setSchoolAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ color: "#000000" }}
                  placeholder="Enter school address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="schoolPhone">
                  School Phone
                </label>
                <input
                  type="tel"
                  id="schoolPhone"
                  value={schoolPhone}
                  onChange={(e) => setSchoolPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ color: "#000000" }}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="schoolEmail">
                  School Email
                </label>
                <input
                  type="email"
                  id="schoolEmail"
                  value={schoolEmail}
                  onChange={(e) => setSchoolEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ color: "#000000" }}
                  placeholder="contact@school.edu"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-md font-semibold text-gray-700 mb-2">Administrator Account</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ color: "#000000" }}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ color: "#000000" }}
                  placeholder="admin@school.edu"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ color: "#000000" }}
                  placeholder="Create a secure password"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ color: "#000000" }}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Register School
          </button>
          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center mt-2">{success}</p>}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}