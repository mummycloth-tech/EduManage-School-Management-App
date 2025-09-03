"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Settings() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);
  const [editUser, setEditUser] = useState<any>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();
        if (profileError || !profile) {
          console.log("Role fetch error:", profileError);
          setRole(null);
        } else {
          setRole(profile.role);
        }
      }
    };

    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, role, user_metadata (full_name)");
      if (error) console.error("Error fetching users:", error);
      else setUsers(data || []);
      setLoading(false);
    };

    fetchUserRole();
    fetchUsers();
  }, []);

  const handleUpdateRole = async (userId: string, newRole: string) => {
    if (role !== "admin") return;
    const { error } = await supabase
      .from("profiles")
      .update({ role: newRole })
      .eq("id", userId);
    if (error) console.error("Update role error:", error);
    else fetchUsers(); // Refresh list
  };

  const handleDeleteProfile = async (userId: string) => {
    if (role !== "admin") return;
    // Delete associated teacher or student records first (if they exist)
    await supabase.from("teachers").delete().eq("id", userId);
    await supabase.from("students").delete().eq("id", userId);
    // Delete the profile
    const { error } = await supabase.from("profiles").delete().eq("id", userId);
    if (error) console.error("Delete profile error:", error);
    else fetchUsers(); // Refresh list
  };

  if (loading) return <p className="text-gray-300 text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 ml-64">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      {role === "admin" && (
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">User Management</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="mb-2 flex items-center justify-between">
                <span>
                  {user.user_metadata?.full_name || user.id}: {user.role}
                </span>
                <div>
                  <select
                    value={user.role}
                    onChange={(e) => handleUpdateRole(user.id, e.target.value)}
                    className="bg-gray-700 text-white px-2 py-1 rounded-md focus:outline-none mr-2"
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                  <button
                    onClick={() => handleDeleteProfile(user.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!role && <p className="text-gray-400">You do not have permission to manage users.</p>}
    </div>
  );
}