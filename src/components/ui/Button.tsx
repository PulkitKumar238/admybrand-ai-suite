import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const base = 'rounded-xl font-medium transition-colors duration-300';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}
