import React from 'react';

const StatusBadge = ({ status }) => {
  const variants = {
    online: 'bg-green-100 text-green-800',
    offline: 'bg-red-100 text-red-800',
    busy: 'bg-yellow-100 text-yellow-800',
    pending: 'bg-blue-100 text-blue-800',
    accepted: 'bg-green-100 text-green-800',
    completed: 'bg-gray-100 text-gray-800',
    cancelled: 'bg-red-100 text-red-800',
    active: 'bg-green-100 text-green-800',
    scheduled: 'bg-blue-100 text-blue-800'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${variants[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

export default StatusBadge;