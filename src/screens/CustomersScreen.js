import React from "react";
import { DATA } from "../constants/data";
import Table from "../components/Table";
import StatusBadge from "../components/StatusBadge";

export default function CustomersScreen() {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Status", accessor: "status" },
  ];

  const data = DATA.customers.map((c) => ({
    ...c,
    status: <StatusBadge status={c.status} />,
  }));

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Customers</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}
