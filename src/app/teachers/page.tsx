"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Teachers() {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTeacher, setNewTeacher] = useState({ name: "", active: true });
  const [editTeacher, setEditTeacher] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null);

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

    const fetchTeachers = async () => {
      const { data, error } = await supabase.from("teachers").select("*");
      if (error) console.error("Error fetching teachers:", error);
      else setTeachers(data || []);
      setLoading(false);
    };

    fetchUserRole();
    fetchTeachers();
  }, []);

  const handleAddTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    if (role !== "admin") return;
    const { error } = await supabase.from("teachers").insert({
      name: newTeacher.name,
      active: newTeacher.active,
    });
    if (error) console.error("Add teacher error:", error);
    else {
      setNewTeacher({ name: "", active: true });
      fetchTeachers();
    }
  };

  const handleEditTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    if (role !== "admin" || !editTeacher) return;
    const { error } = await supabase
      .from("teachers")
      .update({ name: editTeacher.name, active: editTeacher.active })
      .eq("id", editTeacher.id);
    if (error) console.error("Edit teacher error:", error);
    else {
      setEditTeacher(null);
      fetchTeachers();
    }
  };

  if (loading) return <p className="text-gray-300 text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 ml-64">
      <h1 className="text-3xl font-bold mb-6">Teachers</h1>
      {role === "admin" && (
        <form onSubmit={handleAddTeacher} className="bg-gray-800 p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-2">Add Teacher</h2>
          <div className="space-y-4">
            <input
              type="text"
              value={newTeacher.name}
              onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
              placeholder="Teacher name"
              required
            />
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={newTeacher.active}
                onChange={(e) => setNewTeacher({ ...newTeacher, active: e.target.checked })}
                className="mr-2"
              />
              Active
            </label>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Add
            </button>
          </div>
        </form>
      )}
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2">Name</th>
              <th className="p-2">Active</th>
              {role === "admin" && <th className="p-2">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="border-b border-gray-700">
                <td className="p-2">{teacher.name}</td>
                <td className="p-2">{teacher.active ? "Yes" : "No"}</td>
                {role === "admin" && (
                  <td className="p-2">
                    <button
                      onClick={() => setEditTeacher(teacher)}
                      className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 mr-2"
                    >
                      Edit
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {role === "admin" && editTeacher && (
        <form onSubmit={handleEditTeacher} className="bg-gray-800 p-4 rounded-lg shadow mt-6">
          <h2 className="text-lg font-semibold mb-2">Edit Teacher</h2>
          <div className="space-y-4">
            <input
              type="text"
              value={editTeacher.name}
              onChange={(e) => setEditTeacher({ ...editTeacher, name: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
              required
            />
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={editTeacher.active}
                onChange={(e) => setEditTeacher({ ...editTeacher, active: e.target.checked })}
                className="mr-2"
              />
              Active
            </label>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={() => setEditTeacher(null)}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}