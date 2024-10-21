import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'success' | 'info' | 'danger' | 'warning' | 'link';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', onClick, children, className }) => {
  const baseStyles = "px-5 py-2.5 text-sm font-medium rounded-full focus:outline-none focus:ring-4 transition duration-300 ease-in-out";
  const variants = {
    default: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-300",
    info: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    warning: "bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-300",
    link: "text-blue-600 hover:underline"
  };

  const selectedVariant = variants[variant];

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${selectedVariant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
