
import React from 'react';
import { Bell, Search, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6 px-8 flex items-center justify-between border-b border-slate-100 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Analytics Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Monitor your recording and transcription metrics</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="h-10 w-64 rounded-full bg-secondary pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <button className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-colors">
          <Bell className="h-4 w-4 text-muted-foreground" />
        </button>
        <button className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-colors">
          <Settings className="h-4 w-4 text-muted-foreground" />
        </button>
        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
          JS
        </div>
      </div>
    </header>
  );
};

export default Header;
