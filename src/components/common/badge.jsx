import React from 'react';
import clsx from 'clsx';

const badgeVariants = {
  default: 'bg-gray-200 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
};

export const Badge = ({ children, variant = 'default', className = '' }) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
