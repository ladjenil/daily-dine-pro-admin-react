import React from "react";
import { useParams } from "react-router-dom";

export default function CustomerDetailScreen() {
  const { id } = useParams();

  // For demo purposes, fake data
  const customer = {
    id,
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 98765 43210",
    address: "Ahmedabad, Gujarat",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Customer Details</h1>
      <div className="space-y-2">
        <p>
          <strong>ID:</strong> {customer.id}
        </p>
        <p>
          <strong>Name:</strong> {customer.name}
        </p>
        <p>
          <strong>Email:</strong> {customer.email}
        </p>
        <p>
          <strong>Phone:</strong> {customer.phone}
        </p>
        <p>
          <strong>Address:</strong> {customer.address}
        </p>
      </div>
    </div>
  );
}
