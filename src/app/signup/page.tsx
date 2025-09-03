"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

interface Country {
  name: string;
  code: string;
  phoneLength: number;
}

const eastAfricanCountries: Country[] = [
  { name: "Uganda", code: "+256", phoneLength: 9 },
  { name: "Kenya", code: "+254", phoneLength: 9 },
  { name: "Tanzania", code: "+255", phoneLength: 9 },
  { name: "Rwanda", code: "+250", phoneLength: 9 },
  { name: "Burundi", code: "+257", phoneLength: 8 },
];

export default function SignUp() {
  const [schoolName, setSchoolName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [schoolPhone, setSchoolPhone] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [schoolType, setSchoolType] = useState("Primary School");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState<Country>(eastAfricanCountries[0]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handlePhoneChange = (value: string) => {
    // Remove non-digit characters
    let digits = value.replace(/\D/g, "");
    // Limit length based on selected country
    if (digits.length > country.phoneLength) digits = digits.slice(0, country.phoneLength);
    setSchoolPhone(digits);
  };

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
          full_name: fullName,
          school_name: schoolName,
          school_address: schoolAddress,
          school_phone: `${country.code}${schoolPhone}`,
          school_email: schoolEmail,
          school_type: schoolType,
        },
      },
    });

    if (authError) setError(authError.message);
    else if (data.user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert({ id: data.user.id, role: "admin" });
      if (profileError) setError("Failed to set role. Please contact support.");
      else {
        setSuccess("Sign-up successful! Please check your email, then log in.");
        setError("");
        setTimeout(() => router.push("/login"), 2000);
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/login-hero-bg.jpg')" }}
    >
      <div className="bg-black/60 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-6xl transform transition-transform duration-300 hover:scale-105 border border-gray-800">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Register Your School</h1>
          <p className="text-gray-300 mt-2">Create an account to start managing your school</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column: School Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-300 mb-2">School Information</h2>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="School Name"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <select
              value={schoolType}
              onChange={(e) => setSchoolType(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="Primary School">Primary School</option>
              <option value="Secondary School">Secondary School</option>
              <option value="College">College</option>
            </select>
            <input
              type="text"
              value={schoolAddress}
              onChange={(e) => setSchoolAddress(e.target.value)}
              placeholder="School Address"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="flex gap-2">
              <select
                value={country.name}
                onChange={(e) =>
                  setCountry(eastAfricanCountries.find(c => c.name === e.target.value)!)
                }
                className="px-4 py-3 rounded-lg bg-black/30 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {eastAfricanCountries.map((c) => (
                  <option key={c.code} value={c.name}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={schoolPhone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder={`Phone number without ${country.code}`}
                className="flex-1 px-4 py-3 rounded-lg bg-black/30 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <input
              type="email"
              value={schoolEmail}
              onChange={(e) => setSchoolEmail(e.target.value)}
              placeholder="School Email"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Right column: Administrator Account */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-300 mb-2">Administrator Account</h2>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Full width button */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2.5 rounded-lg font-semibold text-lg transition duration-300"
            >
              Register School
            </button>
            {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
            {success && <p className="text-green-500 text-sm text-center mt-2">{success}</p>}
            <p className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-400 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
