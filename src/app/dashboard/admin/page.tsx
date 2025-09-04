"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Placeholder stats
const stats = [
  { title: "Total Students", value: "12,345", color: "blue" },
  { title: "Attendance Today", value: "3,210", color: "green" },
  { title: "Fees Payments", value: "1,234", color: "yellow" },
  { title: "Unpaid Fees", value: "567", color: "red" },
];

export default function Dashboard() {
  const router = useRouter();
  const schoolName = "Example School";
  const adminName = "Admin User";

  return (
    <div
      className="min-h-screen flex font-sans antialiased bg-cover bg-center"
      style={{ backgroundImage: "url('/login-hero-bg.jpg')" }}
    >
      {/* Sidebar */}
      <aside className="w-64 bg-white/10 backdrop-blur-lg shadow-lg fixed h-full flex flex-col border-r border-white/20">
        {/* School badge area */}
        <div className="p-6 flex flex-col items-center border-b border-white/20">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-3 shadow-md backdrop-blur-md transform transition-transform duration-300 hover:scale-110">
            <span className="text-white font-bold text-xl">Logo</span>
          </div>
          <span className="text-white text-lg font-semibold text-center">{schoolName}</span>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex-1">
          <ul className="flex flex-col gap-2 px-3">
            {[
              { name: "Dashboard", path: "/dashboard/admin", icon: "📊" },
              { name: "Finance", path: "/dashboard/admin/Finance", icon: "💰" },
              { name: "Library", path: "/dashboard/admin/Library", icon: "📚" },
              { name: "Settings", path: "/dashboard/admin/Settings", icon: "⚙" },
              { name: "Users & Teachers", path: "/dashboard/admin/Users and Teachers", icon: "👩‍🏫" },
            ].map((item) => (
              <li
                key={item.name}
                className="py-3 px-4 rounded-lg cursor-pointer hover:bg-white/20 transition-colors font-medium flex items-center gap-3 text-white"
                onClick={() => router.push(item.path)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden sm:inline">{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-white/20 text-center text-sm text-white/70">
          &copy; 2025 School Dashboard
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-white font-semibold drop-shadow-md">{adminName}</span>
            <button
              onClick={() => router.push("/login")}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200 flex items-center shadow-md"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className={`bg-white/20 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col justify-center items-center hover:shadow-xl transition-shadow duration-200`}
            >
              <h3 className={`text-${stat.color}-300 text-sm font-medium`}>{stat.title}</h3> {/* Corrected line */}
              <p className={`text-${stat.color}-100 text-xl font-bold mt-1`}>{stat.value}</p> {/* Corrected line */}
            </div>
          ))}
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-lg">Quick Actions / Shortcuts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: "Add New Student", color: "blue", icon: "M12 4v16m8-8H4" },
              { title: "Add Teacher", color: "green", icon: "M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z" },
              { title: "Record Attendance", color: "yellow", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, 
              { title: "Generate Report Cards", color: "purple", icon: "M12 8c-4.418 0-8 1.79-8 4s3.582 4 8 4 8-1.79 8-4-3.582-4-8-4z" },
              { title: "Create Fees Invoice", color: "red", icon: "M12 8c-4.418 0-8 1.79-8 4s3.582 4 8 4 8-1.79 8-4-3.582-4-8-4z" },
              { title: "Schedule Events / Exams", color: "teal", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" },
            ].map((action) => (
              <div
                key={action.title}
                className={`bg-white/20 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition-transform duration-200 cursor-pointer relative group`}
              >
                <svg className={`w-10 h-10 text-${action.color}-400 mb-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                </svg>
                <span className={`text-${action.color}-100 font-semibold text-center text-lg drop-shadow`}>{action.title}</span>
              </div>
            ))} 
          </div>
        </section>

        {/* Chart placeholder */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-lg">Visits Overview</h2>
          <div className="rounded-xl shadow-lg bg-white/20 backdrop-blur-md p-6 h-96 flex items-center justify-center">
            <p className="text-white/70">[Chart Placeholder]</p>
          </div>
        </section>

        {/* Recent Page Visits Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-lg">Recent Page Visits</h2>
          <div className="overflow-x-auto rounded-xl shadow-lg bg-white/20 backdrop-blur-md">
            <table className="min-w-full divide-y divide-white/20 text-white">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">User</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Page</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Time</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Device</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/20">
                <tr>
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">/dashboard/admin</td>
                  <td className="px-6 py-4">10:23 AM</td>
                  <td className="px-6 py-4">Desktop</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Jane Smith</td>
                  <td className="px-6 py-4">/dashboard/admin/Finance</td>
                  <td className="px-6 py-4">11:01 AM</td>
                  <td className="px-6 py-4">Mobile</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Alex Johnson</td>
                  <td className="px-6 py-4">/dashboard/admin/Library</td>
                  <td className="px-6 py-4">11:45 AM</td> 
                  <td className="px-6 py-4">Tablet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}