
import React from 'react';
import { Clock } from 'lucide-react';

interface TimeMetricProps {
  label: string;
  time: string;
  date: string;
  className?: string;
}

const TimeMetric = ({ label, time, date, className }: TimeMetricProps) => {
  return (
    <div className={`p-6 rounded-xl border border-border bg-card card-hover animate-fade-in ${className}`}>
      <div className="flex items-center mb-2">
        <Clock className="h-4 w-4 text-primary mr-2" />
        <h3 className="text-sm font-medium text-muted-foreground">{label}</h3>
      </div>
      
      <div className="mt-2">
        <p className="text-2xl font-semibold tracking-tight">{time}</p>
        <p className="text-xs text-muted-foreground mt-1">{date}</p>
      </div>
    </div>
  );
};

export default TimeMetric;
