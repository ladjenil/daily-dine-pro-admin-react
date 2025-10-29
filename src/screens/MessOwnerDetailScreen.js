import React from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../constants/data";

export default function MessOwnerDetailScreen() {
  const { id } = useParams();
  const owner = DATA.messOwners.find((m) => m.id === parseInt(id));

  if (!owner)
    return <p className="text-red-500 font-medium">Mess Owner not found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Mess Owner Details</h2>
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-md">
        <p><strong>ID:</strong> {owner.id}</p>
        <p><strong>Mess Name:</strong> {owner.name}</p>
        <p><strong>Owner:</strong> {owner.owner}</p>
        <p><strong>Status:</strong> {owner.status}</p>
      </div>
    </div>
  );
}
