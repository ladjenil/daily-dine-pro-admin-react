import React from "react";
import { STYLES } from "../constants/styles";

export default function MenuCard({ dish, price }) {
  return (
    <div className={`${STYLES.card} flex justify-between items-center`}>
      <h4 className="font-medium text-gray-700">{dish}</h4>
      <span className="font-semibold text-blue-600">{price}</span>
    </div>
  );
}
