"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Finance() {
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPayment, setNewPayment] = useState({ student_id: "", amount: 0, status: "pending" });
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

    const fetchPayments = async () => {
      const { data, error } = await supabase.from("payments").select("*");
      if (error) console.error("Error fetching payments:", error);
      else setPayments(data || []);
      setLoading(false);
    };

    fetchUserRole();
    fetchPayments();
  }, []);

  const handleAddPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (role !== "admin") return;
    const { error } = await supabase.from("payments").insert({
      student_id: newPayment.student_id,
      amount: newPayment.amount,
      status: newPayment.status,
    });
    if (error) console.error("Add payment error:", error);
    else {
      setNewPayment({ student_id: "", amount: 0, status: "pending" });
      fetchPayments(); // Refresh list
    }
  };

  const totalAmount = payments.reduce((sum, p) => sum + (p.amount || 0), 0);

  if (loading) return <p className="text-gray-300 text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 ml-64">
      <h1 className="text-3xl font-bold mb-6">Finance</h1>
      <div className="bg-gray-800 p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Total Payments</h2>
        <p className="text-2xl">${totalAmount.toFixed(2)}</p>
      </div>
      {role === "admin" && (
        <form onSubmit={handleAddPayment} className="bg-gray-800 p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-2">Record New Payment</h2>
          <div className="space-y-4">
            <input
              type="text"
              value={newPayment.student_id}
              onChange={(e) => setNewPayment({ ...newPayment, student_id: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
              placeholder="Student ID"
              required
            />
            <input
              type="number"
              value={newPayment.amount}
              onChange={(e) => setNewPayment({ ...newPayment, amount: parseFloat(e.target.value) })}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
              placeholder="Amount"
              required
            />
            <select
              value={newPayment.status}
              onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
            </select>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Add Payment
            </button>
          </div>
        </form>
      )}
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2">Student ID</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b border-gray-700">
                <td className="p-2">{payment.student_id}</td>
                <td className="p-2">${payment.amount}</td>
                <td className="p-2">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}