import React, { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  hasFooter?: boolean;
  hasHeader?: boolean;
  onOK?: () => void;
  onDecline?: () => void;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  hasFooter = true,
  hasHeader = true,
  onOK,
  onDecline,
  className = ""
}) => {
  const baseStyles = "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 transition-opacity duration-300";

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 300); // Delay for animation
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`${baseStyles} ${isOpen ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      <div className="relative w-full max-w-2xl p-4 md:p-5">
        <div
          className={`relative bg-black rounded-lg shadow dark:bg-black transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
        >
          {hasHeader && (
            <div className="flex items-center justify-between p-4 border-b border-gray-600 rounded-t">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7L1 13m6-6L1 1m6 6l6-6M7 7l6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          )}
          <div className="p-4 md:p-5 space-y-4 text-white">{children}</div>
          {hasFooter && (
            <div className="flex items-center p-4 md:p-5 border-t border-gray-600 rounded-b">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={onOK}
              >
                I accept
              </button>
              <button
                type="button"
                className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={onDecline}
              >
                Decline
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
