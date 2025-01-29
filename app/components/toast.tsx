import { cn } from '@/utils/classnames';
import React, { ReactNode } from 'react';
import { AiOutlineCheck, AiOutlineClose, AiOutlineInfo, AiOutlineWarning } from 'react-icons/ai';
import { toast as reactToast, ToastOptions } from 'react-toastify';

const variants = {
  primary: {
    icon: <AiOutlineCheck size={12} />, // Default icon for primary
    color: 'text-primary-900 bg-primary-50 dark:bg-primary-700/20 dark:text-blue-200'
  },
  success: {
    icon: <AiOutlineCheck size={12} />,
    color: 'text-green-500 bg-green-50 dark:bg-green-500/20 dark:text-green-200'
  },
  error: {
    icon: <AiOutlineClose size={12} />,
    color: 'text-red-500 rounded-lg bg-red-50 dark:bg-red-500/20'
  },
  info: {
    icon: <AiOutlineInfo size={12} />,
    color: 'text-blue-500 bg-blue-100'
  },
  warning: {
    icon: <AiOutlineWarning size={12} />,
    color: 'text-orange-500 bg-orange-50 dark:bg-orange-500/20'
  }
};

/**
 * Variants type for the toast notification.
 */
type Variants = 'primary' | 'success' | 'error' | 'info' | 'warning';

/**
 * Custom properties for the toast notification.
 */
interface CustomToastProps {
  id?: string;
  title?: ReactNode;
  body: ReactNode;
  variant?: Variants;
  prefixIcon?: ReactNode;
  containerClassName?: string;
  withPrefixIcon?: boolean;
  withCloseButton?: boolean;
  closeButtonClassName?: string;
}

/**
 * Displays a toast notification with customizable options.
 *
 * @param props - Configuration for the toast notification, combining custom properties and react-toastify options.
 */
const toast = ({
  id,
  title,
  body,
  variant = 'info',
  prefixIcon,
  containerClassName,
  withPrefixIcon = true,
  withCloseButton = true,
  closeButtonClassName,
  ...toastOptions
}: CustomToastProps & ToastOptions): void => {
  reactToast(
    ({ closeToast }) => (
      <div
        className={cn(
          'flex flex-row gap-4 justify-between',
          body ? 'items-start' : 'items-center',
          containerClassName
        )}>
        {withPrefixIcon && (
          <div
            className={cn(
              'inline-flex flex-row items-center justify-center w-8 h-8 rounded-lg',
              variants[variant].color
            )}>
            {prefixIcon ?? variants[variant].icon}
          </div>
        )}

        <div className="flex flex-col flex-1 text-sm text-primary-700 dark:text-zinc-100/80 dark:text-slate-400 dark:bg-zinc-700 dark:shadow-zinc-600">
          {title && <p className={cn(body ? 'text-primary-900 dark:text-white' : '')}>{title}</p>}
          {body}
        </div>

        {withCloseButton && (
          <button
            onClick={closeToast}
            className={cn(
              'inline-flex flex-row items-center justify-center text-slate-400 hover:text-slate-900 rounded-lg focus:ring-2 focus:ring-slate-200/50 hover:bg-slate-200/50 text-center h-8 w-8 dark:bg-zinc-800 dark:text-slate-100 dark:focus:ring-zinc-500/50',
              closeButtonClassName
            )}>
            <AiOutlineClose size={18} />
          </button>
        )}
      </div>
    ),
    {
      closeButton: false,
      hideProgressBar: true,
      closeOnClick: false,
      draggable: false,
      ...toastOptions
    }
  );
};

export default toast;
