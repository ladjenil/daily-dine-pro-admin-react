import React from "react";
import { DATA } from "../constants/data";
import ChartCard from "../components/ChartCard";

export default function DashboardScreen() {
  const d = DATA.dashboard;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        <ChartCard title="Total Customers" value={d.totalCustomers} />
        <ChartCard title="Mess Owners" value={d.totalMessOwners} />
        <ChartCard title="Total Orders" value={d.totalOrders} />
        <ChartCard title="Total Revenue" value={`₹${d.totalRevenue}`} />
      </div>
    </div>
  );
}
