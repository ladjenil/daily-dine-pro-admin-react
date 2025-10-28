import React from "react";
import { DATA } from "../constants/data";
import MenuCard from "../components/MenuCard";

export default function DailyMenuScreen() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Daily Menu</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        {DATA.dailyMenu.map((item) => (
          <MenuCard key={item.id} dish={item.dish} price={item.price} />
        ))}
      </div>
    </div>
  );
}
