import React from 'react';

const BreadcrumbItem = ({ label, isActive = false, href = '#', className = '' }) => {
  const baseClasses = isActive
    ? 'font-semibold text-slate-900'
    : 'text-slate-500 transition hover:text-sky-600';

  return href && !isActive ? (
    <a href={href} className={`${baseClasses} ${className}`.trim()}>
      {label}
    </a>
  ) : (
    <span className={`${baseClasses} ${className}`.trim()}>{label}</span>
  );
};

export default BreadcrumbItem;