
import React from 'react';
import { ArrowDown, ArrowUp, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  helpText?: string;
  className?: string;
  isLoading?: boolean;
}

const StatCard = ({ 
  title, 
  value, 
  icon, 
  change, 
  helpText, 
  className,
  isLoading = false
}: StatCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-xl p-6 bg-card border border-border card-hover animate-fade-in",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="rounded-lg bg-primary/10 p-2">
          {icon}
        </div>
        {helpText && (
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <HelpCircle size={16} />
          </button>
        )}
      </div>
      
      <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
      
      {isLoading ? (
        <div className="h-8 w-24 bg-muted rounded animate-pulse"></div>
      ) : (
        <div className="flex items-end">
          <p className="text-2xl font-semibold tracking-tight">{value}</p>
          
          {change && (
            <div className={cn(
              "ml-2 flex items-center text-xs font-medium",
              change.type === 'increase' ? 'text-green-500' : 'text-red-500'
            )}>
              {change.type === 'increase' ? (
                <ArrowUp size={12} className="mr-1" />
              ) : (
                <ArrowDown size={12} className="mr-1" />
              )}
              {change.value}%
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StatCard;
