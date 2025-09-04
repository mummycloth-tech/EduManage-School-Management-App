// src/app/dashboard/admin/Maps.tsx
"use client";
import React from "react";
import MapExample from "./Cards/MapExample"; // corrected import

export default function Maps() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-6 shadow-lg rounded">
          <MapExample />
        </div>
      </div>
    </div>
  );
}