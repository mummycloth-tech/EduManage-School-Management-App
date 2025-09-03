"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Students() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data, error } = await supabase.from("students").select("*");
      if (error) console.error("Error fetching students:", error);
      else setStudents(data || []);
      setLoading(false);
    };
    fetchStudents();
  }, []);

  if (loading) return <p className="text-gray-300 text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 ml-64">
      <h1 className="text-3xl font-bold mb-6">Students</h1>
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2">Name</th>
              <th className="p-2">Active</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-gray-700">
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.active ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}