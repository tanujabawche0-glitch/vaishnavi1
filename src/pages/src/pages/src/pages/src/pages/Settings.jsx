import React from 'react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white">Agent System Settings</h2>
        <p className="text-xs text-gray-400 font-mono mt-1">
          Manage API keys, crawl frequencies, and alert thresholds.
        </p>
      </div>

      <div className="glass-panel p-6 space-y-4 text-xs font-mono">
        <div>
          <label className="block text-gray-400 mb-1">Crawler Refresh Interval</label>
          <select className="bg-dark-900 border border-gray-800 rounded p-2 text-white">
            <option>Every 1 Hour (Realtime)</option>
            <option>Every 6 Hours</option>
            <option>Daily Briefing Only</option>
          </select>
        </div>
      </div>
    </div>
  );
}
