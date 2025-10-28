import React from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../constants/data";

export default function CustomerDetailScreen() {
  const { id } = useParams();
  const customer = DATA.customers.find((c) => c.id === parseInt(id));

  if (!customer)
    return <p className="text-red-500 font-medium">Customer not found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Customer Details</h2>
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-md">
        <p><strong>ID:</strong> {customer.id}</p>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Status:</strong> {customer.status}</p>
      </div>
    </div>
  );
}
