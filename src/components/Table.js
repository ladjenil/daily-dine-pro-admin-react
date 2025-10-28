import React from "react";
import { STYLES } from "../constants/styles";

export default function Table({ columns, data }) {
  return (
    <div className={`${STYLES.card} overflow-x-auto`}>
      <table className="w-full text-left text-sm">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className={STYLES.tableHeader}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={STYLES.tableRow}>
              {columns.map((col, j) => (
                <td key={j} className="py-2">
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
