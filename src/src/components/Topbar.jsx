import React from 'react';
import { Search, Bell, User, ShieldCheck } from 'lucide-react';

export default function Topbar({ organization, isDemo, onOpenScan }) {
  return (
    <header className="h-16 bg-dark-800/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-20 px-6 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex items-center space-x-4 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search research, patents, competitors..."
            className="w-full bg-dark-900/80 border border-gray-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
          />
        </div>
      </div>

      {/* Center - Status Badges */}
      <div className="hidden lg:flex items-center space-x-3">
        <div className="px-2.5 py-1 rounded-md bg-dark-700/60 border border-gray-700/50 flex items-center space-x-2">
          <span className="text-[10px] text-gray-400 uppercase font-mono">Org:</span>
          <span className="text-xs font-semibold text-gray-200">{organization?.name || "Beyond Motors"}</span>
        </div>
        <div className="px-2.5 py-1 rounded-md bg-dark-700/60 border border-gray-700/50 flex items-center space-x-2">
          <span className="text-[10px] text-gray-400 uppercase font-mono">Industry:</span>
          <span className="text-xs font-semibold text-brand-cyan">{organization?.industry || "Electric Vehicles"}</span>
        </div>
        {isDemo && (
          <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] font-bold tracking-wider">
            DEMO INTELLIGENCE DATA
          </span>
        )}
      </div>

      {/* Right - Profile & Actions */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onOpenScan}
          className="relative p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-cyan rounded-full animate-ping" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-cyan rounded-full" />
        </button>

        <div className="h-6 w-px bg-gray-800" />

        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/20 border border-brand-cyan/40 flex items-center justify-center">
            <User className="w-4 h-4 text-brand-cyan" />
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-medium text-gray-200 group-hover:text-brand-cyan transition-colors">Executive Analyst</p>
            <p className="text-[10px] text-gray-500 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Authenticated
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
