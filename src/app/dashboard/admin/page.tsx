"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

export default function AdminDashboard() {
  const [role, setRole] = useState<string | null>(null);
  const [sqlQuery, setSqlQuery] = useState("");
  const [queryResult, setQueryResult] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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
      if (profileError || !profile || profile.role !== "admin") {
        router.push("/login");
      } else {
        setRole(profile.role);
      }
    };
    checkAuth();
  }, [router]);

  const executeQuery = async () => {
    if (!role || role !== "admin") {
      setError("You do not have permission to execute queries.");
      return;
    }
    setLoading(true);
    setError("");
    setQueryResult([]);
    try {
      const safeQuery = sqlQuery.toLowerCase();
      if (safeQuery.includes("delete") || safeQuery.includes("update") || safeQuery.includes("insert")) {
        setError("Destructive commands (DELETE, UPDATE, INSERT) are not allowed.");
        return;
      }
      const { data, error: queryError } = await supabase.rpc("execute_custom_query", { query_text: sqlQuery });
      if (queryError) {
        setError(queryError.message);
      } else {
        setQueryResult(data || []);
      }
    } catch (err) {
      setError("An error occurred while executing the query.");
      console.error("Query error:", err);
    } finally {
      setLoading(false);
    }
  };

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
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - PrezaCore</h1>
      <div className="bg-gray-800 p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">SQL Editor</h2>
        <CodeMirror
          value={sqlQuery}
          height="200px"
          extensions={[sql()]}
          onChange={(value) => setSqlQuery(value)}
          className="bg-gray-700 text-white rounded"
        />
        <button
          onClick={executeQuery}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          disabled={loading}
        >
          {loading ? "Executing..." : "Run Query"}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      {queryResult.length > 0 && (
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Query Results</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                {Object.keys(queryResult[0]).map((key) => (
                  <th key={key} className="p-2">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {queryResult.map((row, index) => (
                <tr key={index} className="border-b border-gray-700">
                  {Object.values(row).map((value, i) => (
                    <td key={i} className="p-2">{String(value)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}