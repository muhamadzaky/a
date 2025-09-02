import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        solid: 'shadow-sm',
        outlined: 'border shadow-sm',
        dashed: 'border border-dashed shadow-sm',
        filled: 'bg-opacity-10 shadow-sm',
        text: 'shadow-none',
        link: 'shadow-none underline-offset-4 hover:underline'
      },
      color: {
        default: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300',
        destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300',
        secondary: 'bg-blue-900 text-white hover:bg-blue-900/80 focus:ring-blue-300',
        success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-300',
        ghost: 'bg-zinc-500 text-black hover:bg-zinc-600 focus:ring-zinc-600'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'default'
    },
    compoundVariants: [
      {
        variant: 'outlined',
        color: 'default',
        className: 'border-gray-800 text-gray-800 hover:bg-gray-50'
      },
      {
        variant: 'outlined',
        color: 'destructive',
        className: 'border-red-600 text-red-600 hover:bg-red-50'
      },
      {
        variant: 'outlined',
        color: 'secondary',
        className: 'border-blue-900 text-blue-900 hover:bg-blue-50'
      },
      {
        variant: 'outlined',
        color: 'success',
        className: 'border-green-600 text-green-600 hover:bg-green-50'
      },
      {
        variant: 'outlined',
        color: 'ghost',
        className: 'border-zinc-500 text-zinc-500 hover:bg-zinc-50'
      },
      // Filled variants
      {
        variant: 'filled',
        color: 'default',
        className: 'bg-gray-800 bg-opacity-10 text-gray-800 hover:bg-opacity-20'
      },
      {
        variant: 'filled',
        color: 'destructive',
        className: 'bg-red-600 bg-opacity-10 text-red-600 hover:bg-opacity-20'
      },
      {
        variant: 'filled',
        color: 'secondary',
        className: 'bg-blue-900 bg-opacity-10 text-blue-900 hover:bg-opacity-20'
      },
      {
        variant: 'filled',
        color: 'success',
        className: 'bg-green-600 bg-opacity-10 text-green-600 hover:bg-opacity-20'
      },
      {
        variant: 'filled',
        color: 'ghost',
        className: 'bg-zinc-500 bg-opacity-10 text-zinc-500 hover:bg-opacity-20'
      },
      // Text & Link variants
      {
        variant: ['text', 'link'],
        color: 'default',
        className: 'text-gray-800 hover:bg-transparent'
      },
      {
        variant: ['text', 'link'],
        color: 'destructive',
        className: 'text-red-600 hover:bg-transparent'
      },
      {
        variant: ['text', 'link'],
        color: 'secondary',
        className: 'text-blue-900 hover:bg-transparent'
      },
      {
        variant: ['text', 'link'],
        color: 'success',
        className: 'text-green-600 hover:bg-transparent'
      },
      {
        variant: ['text', 'link'],
        color: 'ghost',
        className: 'text-zinc-500 hover:bg-transparent'
      }
    ]
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  target?: string;
  color?: 'default' | 'destructive' | 'secondary' | 'success' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'solid' | 'outlined' | 'dashed' | 'filled' | 'text' | 'link';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, size, asChild = false, href, target, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const buttonClass = cn(buttonVariants({ variant, color, size, className }));

    if (href) {
      return (
        <Link href={href} target={target} rel="noopener noreferer" passHref legacyBehavior>
          <Comp className={buttonClass} ref={ref} {...props} />
        </Link>
      );
    }

    return <Comp className={buttonClass} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
