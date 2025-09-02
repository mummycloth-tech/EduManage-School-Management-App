import { supabase } from "@/lib/supabase";

export default async function Dashboard() {
  const { data: { user } } = await supabase.auth.getUser();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D1C4E9]">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Dashboard</h1>
        {user ? (
          <div>
            <p className="text-gray-600">Welcome, {user.email}!</p>
            <p className="text-gray-600">School: {user.user_metadata.school_name || "Not set"}</p>
            <p className="text-gray-600">Type: {user.user_metadata.school_type || "Not set"}</p>
          </div>
        ) : (
          <p className="text-gray-600">Please log in to see your dashboard.</p>
        )}
      </div>
    </div>
  );
}