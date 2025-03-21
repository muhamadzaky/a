import { cn } from '@/utils/classnames';
import React, { FC } from 'react';

const Badge: FC<Component.Badge> = ({ variant = 'default', onClick, children }) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 text-sm font-medium rounded-full';
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    link: 'text-blue-600 hover:underline cursor-pointer',
    warning: 'bg-yellow-100 text-yellow-800'
  };

  const selectedVariant = variants[variant];

  return (
    <span className={cn(baseStyles, selectedVariant)} onClick={onClick}>
      {children}
    </span>
  );
};

export default Badge;
