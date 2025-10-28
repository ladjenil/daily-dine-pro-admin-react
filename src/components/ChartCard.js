import React from "react";
import { STYLES } from "../constants/styles";

export default function ChartCard({ title, value }) {
  return (
    <div className={`${STYLES.card} text-center`}>
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
}
