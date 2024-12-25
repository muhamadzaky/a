import { bool, func, node, oneOf, string } from 'prop-types';
import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'success' | 'info' | 'danger' | 'warning' | 'link' | 'ghost';
  outline?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', outline = false, onClick, children, className = "" }) => {
  const baseStyles = "px-4 py-2 text-sm font-medium rounded-full focus:outline-none focus:ring-4 transition duration-200 ease-in-out";

  const variants = {
    default: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-300",
    info: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    warning: "bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-300",
    link: "text-blue-600 hover:underline",
    ghost: "bg-zinc-500 border border-zinc-500 text-black hover:bg-zinc-600 hover:border-zinc-600 focus:ring-zinc-600",
  };

  const outlineVariants = {
    default: "bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white focus:ring-gray-300",
    success: "bg-transparent border border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-300",
    info: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-300",
    danger: "bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-300",
    warning: "bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black focus:ring-yellow-300",
    link: "bg-transparent text-blue-600 hover:underline",
    ghost: "bg-transparent border border-zinc-500 text-zinc-500 hover:bg-zinc-500 hover:text-black focus:ring-zinc-600",
  };

  const selectedVariant = outline ? outlineVariants[variant] : variants[variant];

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${selectedVariant} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: oneOf(['default', 'success', 'info', 'danger', 'warning', 'link', 'ghost']),
  outline: bool,
  onClick: func,
  children: node.isRequired,
  className: string,
};

export default Button;
