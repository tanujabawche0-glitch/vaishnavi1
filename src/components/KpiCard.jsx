import React from 'react';

export default function KpiCard({ title, value, change, changeType = 'positive', icon: Icon, badge }) {
  const isPositive = changeType === 'positive';
  
  return (
    <div className="glass-card p-5 relative overflow-hidden group hover:border-brand-cyan/40 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-white tracking-tight">{value}</h3>
        </div>
        {Icon && (
          <div className="p-2.5 rounded-lg bg-dark-700/60 border border-gray-700 text-brand-cyan group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        {change && (
          <span className={`font-mono font-medium ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {change}
          </span>
        )}
        {badge && (
          <span className="px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 text-[10px] font-mono">
            {badge}
          </span>
        )}
      </div>

      <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-brand-cyan/5 rounded-full blur-xl group-hover:bg-brand-cyan/10 transition-colors" />
    </div>
  );
}
