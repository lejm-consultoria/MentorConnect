import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}
export function Card({
  children,
  className = '',
  onClick,
  hover = false
}: CardProps) {
  return <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 ${hover ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer' : ''} transition-all duration-200 ${className}`} onClick={onClick}>
      {children}
    </div>;
}