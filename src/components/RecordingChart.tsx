
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { name: 'Mon', recorded: 4, transcribed: 3 },
  { name: 'Tue', recorded: 3, transcribed: 2.5 },
  { name: 'Wed', recorded: 6, transcribed: 5 },
  { name: 'Thu', recorded: 5, transcribed: 4 },
  { name: 'Fri', recorded: 7, transcribed: 6.5 },
  { name: 'Sat', recorded: 2, transcribed: 1.5 },
  { name: 'Sun', recorded: 1.5, transcribed: 1 },
];

const timeRanges = ['This Week', 'Last Week', 'This Month', 'Last Month', 'Custom Range'];

interface RecordingChartProps {
  className?: string;
}

const RecordingChart = ({ className }: RecordingChartProps) => {
  const [timeRange, setTimeRange] = useState('This Week');
  const [showTimeRanges, setShowTimeRanges] = useState(false);
  
  return (
    <div className={`p-6 rounded-xl border border-border bg-card ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold">Recording Performance</h3>
        
        <div className="relative">
          <button 
            onClick={() => setShowTimeRanges(!showTimeRanges)}
            className="flex items-center text-sm px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/70 transition-colors"
          >
            {timeRange}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          
          {showTimeRanges && (
            <div className="absolute right-0 top-full mt-1 bg-popover border border-border rounded-lg shadow-lg z-10 w-40 p-1 animate-fade-in">
              {timeRanges.map((range) => (
                <button
                  key={range}
                  className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                  onClick={() => {
                    setTimeRange(range);
                    setShowTimeRanges(false);
                  }}
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRecorded" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgba(59, 130, 246, 0.8)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="rgba(59, 130, 246, 0.1)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTranscribed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgba(139, 92, 246, 0.8)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="rgba(139, 92, 246, 0.1)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#888' }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#888' }} 
              dx={-10}
              tickFormatter={(value) => `${value}h`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '0.5rem', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(229, 231, 235, 1)',
                padding: '0.5rem'
              }}
              formatter={(value) => [`${value} hrs`, undefined]}
            />
            <Area 
              type="monotone" 
              dataKey="recorded" 
              stroke="#3b82f6" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorRecorded)" 
              name="Recorded"
            />
            <Area 
              type="monotone" 
              dataKey="transcribed" 
              stroke="#8b5cf6" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorTranscribed)"
              name="Transcribed"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center mt-4 space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-sm text-muted-foreground">Recorded</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
          <span className="text-sm text-muted-foreground">Transcribed</span>
        </div>
      </div>
    </div>
  );
};

export default RecordingChart;
