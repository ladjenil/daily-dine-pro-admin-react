import React from 'react';

const StatusBadge = ({ text, type }) => {
  let classes = '';
  switch (type) {
    case 'pending':
      classes = 'bg-yellow-100 text-yellow-800';
      break;
    case 'approved':
      classes = 'bg-green-100 text-green-800';
      break;
    case 'under-review':
      classes = 'bg-yellow-100 text-yellow-800'; // Same as pending
      break;
    case 'active':
      classes = 'bg-green-100 text-green-800';
      break;
    case 'high-priority':
      classes = 'bg-red-100 text-red-800';
      break;
    case 'medium-priority':
      classes = 'bg-yellow-100 text-yellow-800';
      break;
    case 'resolved':
      classes = 'bg-green-100 text-green-800';
      break;
    default:
      classes = 'bg-gray-100 text-gray-800';
  }

  return (
    <span className={`px-3 py-1 text-sm rounded-full font-semibold leading-5 ${classes}`}>
      {text}
    </span>
  );
};

export default StatusBadge;