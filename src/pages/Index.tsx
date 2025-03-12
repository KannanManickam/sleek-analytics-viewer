
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import StatCard from '@/components/StatCard';
import RecordingChart from '@/components/RecordingChart';
import MetricTable from '@/components/MetricTable';
import TimeMetric from '@/components/TimeMetric';
import { 
  Clock, 
  Headphones, 
  Mic, 
  ArrowUpDown, 
  FileAudio, 
  Timer, 
  ListMusic 
} from 'lucide-react';

const Index = () => {
  // Animate elements on load
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
          el.classList.remove('opacity-0');
        }, i * 100);
      });
    };
    
    animateElements();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="opacity-0 animate-on-load">
            <TimeMetric 
              label="Last Login" 
              time="10:32 AM" 
              date="Today, July 15, 2023" 
            />
          </div>
          
          <div className="opacity-0 animate-on-load">
            <TimeMetric 
              label="Last Recording" 
              time="09:45 AM" 
              date="Today, July 15, 2023" 
            />
          </div>
          
          <div className="opacity-0 animate-on-load">
            <TimeMetric 
              label="Last Listening" 
              time="Yesterday" 
              date="06:15 PM, July 14, 2023" 
            />
          </div>
          
          <div className="opacity-0 animate-on-load">
            <TimeMetric 
              label="Peak Recording Time" 
              time="10:00 AM" 
              date="Weekdays" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="opacity-0 animate-on-load">
            <StatCard 
              title="Total Recording Hours" 
              value="128.5 hrs" 
              icon={<Mic className="h-5 w-5 text-primary" />}
              change={{ value: 12, type: 'increase' }}
            />
          </div>
          
          <div className="opacity-0 animate-on-load">
            <StatCard 
              title="Total Listening Hours" 
              value="64.8 hrs" 
              icon={<Headphones className="h-5 w-5 text-primary" />}
              change={{ value: 8, type: 'increase' }}
            />
          </div>
          
          <div className="opacity-0 animate-on-load">
            <StatCard 
              title="On-Demand Transcripts" 
              value="42" 
              icon={<FileAudio className="h-5 w-5 text-primary" />}
              change={{ value: 3, type: 'increase' }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="opacity-0 animate-on-load">
            <StatCard 
              title="Avg. Recording Length" 
              value="48 mins" 
              icon={<Clock className="h-5 w-5 text-primary" />}
            />
          </div>
          
          <div className="opacity-0 animate-on-load">
            <StatCard 
              title="Avg. Transcription Time" 
              value="4.2 mins" 
              icon={<Timer className="h-5 w-5 text-primary" />}
              change={{ value: 15, type: 'decrease' }}
              helpText="Average time to transcribe per recording"
            />
          </div>
          
          <div className="opacity-0 animate-on-load">
            <StatCard 
              title="Total Recordings" 
              value="156" 
              icon={<ListMusic className="h-5 w-5 text-primary" />}
              change={{ value: 24, type: 'increase' }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 opacity-0 animate-on-load">
            <RecordingChart />
          </div>
          
          <div className="opacity-0 animate-on-load">
            <div className="p-6 rounded-xl border border-border bg-card h-full">
              <h3 className="font-semibold mb-6">Transcription Stats</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Completed</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">In Progress</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Pending</span>
                    <span className="text-sm font-medium">3%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '3%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Failed</span>
                    <span className="text-sm font-medium">2%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '2%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-medium mb-4">Efficiency Metrics</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Transcription Accuracy</span>
                    <span className="text-sm font-medium">96%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Avg. Processing Time</span>
                    <span className="text-sm font-medium">2.5 mins</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Peak Usage Time</span>
                    <span className="text-sm font-medium">11 AM - 2 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="opacity-0 animate-on-load">
          <MetricTable />
        </div>
      </main>
    </div>
  );
};

export default Index;
