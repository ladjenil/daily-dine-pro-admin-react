import React from 'react';

const MetricCard = ({ title, value, change, note, icon, cardClass }) => {
  return (
    <div className={`metric-card text-white p-6 rounded-xl card-hover ${cardClass || ''}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-opacity-80 text-sm">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          <p className="text-sm text-white text-opacity-70 mt-1">
            {change || note}
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-3 rounded-lg">{icon}</div>
      </div>
    </div>
  );
};

export default MetricCard;