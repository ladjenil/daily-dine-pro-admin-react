import React from "react";
import { COLORS } from "../constants/colors";

export default function StatusBadge({ status }) {
  const getColor = () => {
    switch (status.toLowerCase()) {
      case "active":
      case "approved":
        return COLORS.success;
      case "inactive":
      case "closed":
        return COLORS.danger;
      case "pending":
      case "open":
        return COLORS.warning;
      default:
        return COLORS.gray;
    }
  };

  return (
    <span
      className="px-2 py-1 text-xs font-medium rounded-full text-white"
      style={{ backgroundColor: getColor() }}
    >
      {status}
    </span>
  );
}
