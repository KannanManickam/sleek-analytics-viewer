
import React from 'react';
import { cn } from '@/lib/utils';

type StatusType = 'completed' | 'in-progress' | 'pending' | 'failed';

interface StatusIndicatorProps {
  status: StatusType;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const statusConfig: Record<StatusType, { color: string, pulseEffect: boolean }> = {
  'completed': { color: 'bg-green-500', pulseEffect: false },
  'in-progress': { color: 'bg-blue-500', pulseEffect: true },
  'pending': { color: 'bg-amber-500', pulseEffect: false },
  'failed': { color: 'bg-red-500', pulseEffect: false },
};

const sizeConfig = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
};

const StatusIndicator = ({ 
  status, 
  label, 
  size = 'md',
  className 
}: StatusIndicatorProps) => {
  const { color, pulseEffect } = statusConfig[status];
  
  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn(
        "rounded-full", 
        color, 
        sizeConfig[size],
        pulseEffect && "animate-pulse-slow"
      )} />
      {label && (
        <span className="ml-2 text-sm font-medium">
          {label}
        </span>
      )}
    </div>
  );
};

export default StatusIndicator;
