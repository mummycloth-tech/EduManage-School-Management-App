"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function UserDashboard() {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();
      if (profileError || !profile || profile.role === "admin") {
        router.push("/login");
      } else {
        setRole(profile.role);
      }
    };
    checkAuth();
  }, [router]);

  if (!role) {
    return <p className="text-gray-300 text-center">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 ml-64">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => supabase.auth.signOut().then(() => router.push("/login"))}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
        >
          Logout
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-6">User Dashboard - PrezaCore</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}