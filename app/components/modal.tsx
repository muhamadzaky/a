'use client';

import { cn } from '@/utils/classnames';
import React, { FC, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Button from './button';

const Modal: FC<Component.Modal> = ({
  title,
  children,
  footer,
  toggle,
  open,
  size = 'md',
  fullScreen = false,
  scrollable = false,
  onOK,
  okText = 'OK',
  onCancel,
  cancelText = 'Cancel',
  loading = false,
  closeOnEsc = true,
  closeOnClickBackdrop = true,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  footerClassName = '',
  onOpen,
  onClosed
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setIsAnimating(true);
      setIsVisible(true);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsVisible(false);
      }, 300);
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEsc && open) {
        toggle();
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, closeOnEsc, toggle]);

  const handleOK = () => {
    if (onOK) onOK();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  const handleBackdropClick = () => {
    if (closeOnClickBackdrop) toggle();
  };

  const animateTransition = () => {
    if (isVisible && isAnimating) return 'animate-slideIn';
    if (isAnimating) return 'animate-slideOut';
    return '';
  };

  useEffect(() => {
    if (isVisible) onOpen?.();
    if (!isVisible) onClosed?.();
  }, [isVisible, onOpen, onClosed]);

  const sizeClasses: Record<string, string> = {
    sm: 'w-full md:w-4/12',
    md: 'w-full md:w-5/12',
    lg: 'w-full md:w-7/12',
    xl: 'w-full md:w-8/12',
    '2xl': 'w-full md:w-9/12',
    '3xl': 'w-full md:w-11/12',
    full: 'w-full'
  };

  const modalSizeClass = fullScreen ? 'w-screen h-screen' : sizeClasses[size] || sizeClasses.md;

  return (
    <div className={cn('fixed inset-0 z-50', isVisible ? 'block' : 'hidden')} role="dialog">
      <div
        className="absolute inset-0 transition-opacity bg-black bg-opacity-70"
        onClick={handleBackdropClick}></div>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div
          className={cn(
            'inline-block w-full justify-between align-bottom bg-black rounded-md text-left overflow-hidden shadow-xl transform transition-all sm:align-middle',
            modalSizeClass,
            animateTransition(),
            className
          )}>
          <div className="flex flex-col justify-between h-inherit">
            <div>
              <div className="px-4 pt-5 mb-4">
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    onClick={toggle}
                    className="text-white hover:text-white/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <span className="sr-only">Close</span>
                    <AiOutlineClose />
                  </button>
                </div>
                <h3
                  className={cn('text-xl font-medium leading-6 text-white', headerClassName)}
                  id="modal-title">
                  {title}
                </h3>
              </div>
              <div
                className={cn('px-4', scrollable ? 'overflow-y-auto' : '', bodyClassName)}
                style={{ maxHeight: scrollable ? 'calc(100vh - 10rem)' : 'auto' }}>
                {children}
              </div>
            </div>
            <div className={cn('flex flex-row-reverse gap-2 p-4', footerClassName)}>
              {(footer === undefined || footer === null) && (
                <>
                  {onCancel && (
                    <Button
                      variant="danger"
                      className="justify-center w-26"
                      outline
                      disabled={loading}
                      onClick={handleCancel}>
                      {cancelText}
                    </Button>
                  )}
                  {onOK && (
                    <Button
                      className="justify-center w-26"
                      disabled={loading}
                      onClick={handleOK}
                      loading={loading}>
                      {okText}
                    </Button>
                  )}
                </>
              )}
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
