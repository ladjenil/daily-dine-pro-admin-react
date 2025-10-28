import React from "react";
import { DATA } from "../constants/data";
import Table from "../components/Table";
import StatusBadge from "../components/StatusBadge";

export default function MessOwnersScreen() {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Mess Name", accessor: "name" },
    { header: "Owner", accessor: "owner" },
    { header: "Status", accessor: "status" },
  ];

  const data = DATA.messOwners.map((m) => ({
    ...m,
    status: <StatusBadge status={m.status} />,
  }));

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Mess Owners</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}
