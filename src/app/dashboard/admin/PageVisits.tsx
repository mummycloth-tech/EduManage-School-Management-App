"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function PageVisits() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-6 ml-64 bg-gray-50 text-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Page Visits</h1>
        <button
          onClick={() => router.push("/login")}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200 flex items-center"
        >
          Logout
        </button>
      </div>

      <div className="rounded-lg shadow-lg bg-white p-6">
        {/* Replace this with your charts or tables */}
        <p className="text-gray-700 text-lg">[Page Visits Component Placeholder]</p>
      </div>
    </div>
  );
}