import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Radar, ShieldAlert, Users, Radio, 
  TrendingUp, Crosshair, Cpu, Bell, FileText, 
  Database, Settings, Zap, LogOut 
} from 'lucide-react';
import { authService } from '../services/authService';

const NAV_ITEMS = [
  { name: 'Command Center', icon: LayoutDashboard, path: '/app' },
  { name: 'Research Radar', icon: Radar, path: '/app/research' },
  { name: 'Patent Watch', icon: ShieldAlert, path: '/app/patents' },
  { name: 'Competitor Intelligence', icon: Users, path: '/app/competitors' },
  { name: 'Industry Pulse', icon: Radio, path: '/app/pulse' },
  { name: 'Trend Intelligence', icon: TrendingUp, path: '/app/trends' },
  { name: 'Threats & Opportunities', icon: Crosshair, path: '/app/threats' },
  { name: 'AI Insights', icon: Cpu, path: '/app/insights' },
  { name: 'Live Alerts', icon: Bell, path: '/app/alerts' },
  { name: 'Intelligence Reports', icon: FileText, path: '/app/reports' },
  { name: 'Sources & Evidence', icon: Database, path: '/app/sources' },
  { name: 'Settings', icon: Settings, path: '/app/settings' },
];

export default function Sidebar({ onRunScan }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authService.signOut();
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-dark-800 border-r border-gray-800 flex flex-col h-screen sticky top-0 z-30 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-gray-800/80 flex items-center space-x-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple flex items-center justify-center shadow-lg shadow-brand-cyan/20">
          <Zap className="w-5 h-5 text-dark-900 fill-dark-900" />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
            BEYOND <span className="text-brand-cyan font-mono">BINARY</span>
          </h1>
          <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">Autonomous AI Agent</p>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-4">
        <button
          onClick={onRunScan}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-dark-900 font-semibold rounded-lg shadow-lg shadow-brand-cyan/15 hover:shadow-brand-cyan/30 transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <Zap className="w-4 h-4 fill-dark-900 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xs tracking-wider uppercase font-bold">Run Intelligence Scan</span>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/app'}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-cyan/15 to-transparent text-brand-cyan border-l-2 border-brand-cyan shadow-sm'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-dark-700/50'
                }`
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer Info / Logout */}
      <div className="p-4 border-t border-gray-800/80 bg-dark-900/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[11px] text-gray-400 font-mono">SYSTEM ACTIVE</span>
          </div>
          <button
            onClick={handleLogout}
            title="Sign Out"
            className="p-1.5 text-gray-400 hover:text-rose-400 hover:bg-dark-700 rounded-md transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
