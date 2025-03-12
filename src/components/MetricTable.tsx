
import React, { useState } from 'react';
import StatusIndicator from './StatusIndicator';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const tableData = [
  { id: 1, name: 'Team Meeting', duration: '1:24:36', transcriptionStatus: 'completed', createdAt: 'Today, 9:32 AM' },
  { id: 2, name: 'Client Interview', duration: '0:48:15', transcriptionStatus: 'completed', createdAt: 'Yesterday, 3:15 PM' },
  { id: 3, name: 'Product Demo', duration: '0:32:47', transcriptionStatus: 'in-progress', createdAt: 'Jul 12, 2023' },
  { id: 4, name: 'Sales Call', duration: '0:58:22', transcriptionStatus: 'pending', createdAt: 'Jul 10, 2023' },
  { id: 5, name: 'Weekly Standup', duration: '0:22:15', transcriptionStatus: 'failed', createdAt: 'Jul 8, 2023' },
];

interface MetricTableProps {
  className?: string;
}

const MetricTable = ({ className }: MetricTableProps) => {
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };
  
  return (
    <div className={`p-6 rounded-xl border border-border bg-card ${className}`}>
      <h3 className="font-semibold mb-6">Recent Recordings</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-2 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                <button 
                  className="flex items-center"
                  onClick={() => handleSort('name')}
                >
                  Name
                  {sortBy === 'name' && (
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform ${sortDirection === 'desc' ? 'rotate-180' : ''}`} 
                    />
                  )}
                </button>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                <button 
                  className="flex items-center"
                  onClick={() => handleSort('duration')}
                >
                  Duration
                  {sortBy === 'duration' && (
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform ${sortDirection === 'desc' ? 'rotate-180' : ''}`} 
                    />
                  )}
                </button>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                <button 
                  className="flex items-center"
                  onClick={() => handleSort('transcriptionStatus')}
                >
                  Status
                  {sortBy === 'transcriptionStatus' && (
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform ${sortDirection === 'desc' ? 'rotate-180' : ''}`} 
                    />
                  )}
                </button>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                <button 
                  className="flex items-center"
                  onClick={() => handleSort('createdAt')}
                >
                  Created
                  {sortBy === 'createdAt' && (
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform ${sortDirection === 'desc' ? 'rotate-180' : ''}`} 
                    />
                  )}
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {tableData.map((row) => (
              <tr 
                key={row.id} 
                className="hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <td className="px-2 py-4 text-sm">{row.name}</td>
                <td className="px-2 py-4 text-sm text-muted-foreground">{row.duration}</td>
                <td className="px-2 py-4">
                  <StatusIndicator 
                    status={row.transcriptionStatus as any} 
                    label={row.transcriptionStatus.charAt(0).toUpperCase() + row.transcriptionStatus.slice(1)}
                  />
                </td>
                <td className="px-2 py-4 text-sm text-muted-foreground">{row.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-muted-foreground">Showing 5 of 24 recordings</p>
        
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded hover:bg-muted transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="px-3 py-1 text-sm rounded bg-primary text-primary-foreground">1</button>
          <button className="px-3 py-1 text-sm rounded hover:bg-muted transition-colors">2</button>
          <button className="px-3 py-1 text-sm rounded hover:bg-muted transition-colors">3</button>
          <button className="p-1 rounded hover:bg-muted transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MetricTable;
