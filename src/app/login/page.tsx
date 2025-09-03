"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    let loginData;
    if (identifier.includes("@")) {
      loginData = await supabase.auth.signInWithPassword({ email: identifier, password });
    } else {
      const { data: user } = await supabase
        .from("profiles")
        .select("id, email")
        .eq("user_id", identifier)
        .single();
      if (!user) {
        setError("Invalid user ID or email. Please try again.");
        return;
      }
      loginData = await supabase.auth.signInWithPassword({ email: user.email, password });
    }
    const { data, error: authError } = loginData;
    if (authError) setError(authError.message);
    else if (data.user) router.push("/dashboard");
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") router.push("/dashboard");
    });
    return () => authListener.subscription.unsubscribe();
  }, [router]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/login-hero-bg.jpg')" }}
    >
      <div className="bg-black/60 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-transform duration-300 hover:scale-105 border border-gray-800">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">PwezaCore Login</h1>
          <p className="text-gray-300 mt-2">Keeping every data check</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Email or User ID"
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
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Log In
          </button>
          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
          <p className="text-center text-sm text-gray-400 mt-4">
            New school?{" "}
            <a href="/signup" className="text-indigo-400 hover:underline">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
