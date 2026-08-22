import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Building, Crosshair, Tag } from 'lucide-react';

export default function Onboarding() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    orgName: 'Beyond Motors',
    industry: 'Electric Vehicles',
    competitors: 'Tesla, BYD, Mahindra, Hyundai, NIO',
    keywords: 'EV Battery, Fast Charging, Solid State Battery, Battery Recycling',
    researchAreas: 'Next-Gen Energy Storage, Silicon Anode Tech, Thermal Management'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save onboarding state locally / via Supabase
    localStorage.setItem('bb_org', JSON.stringify(formData));
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-6">
      <div className="glass-panel max-w-2xl w-full p-8 border-gray-800 space-y-6">
        <div className="flex items-center space-x-3 border-b border-gray-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-purple flex items-center justify-center text-dark-900 font-bold">
            <Zap className="w-5 h-5 fill-dark-900" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Agent Onboarding Configuration</h2>
            <p className="text-xs text-gray-400 font-mono">Define continuous intelligence monitoring vectors</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono uppercase text-gray-400 mb-1">Organization Name</label>
              <input
                type="text"
                required
                value={formData.orgName}
                onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                className="w-full bg-dark-900 border border-gray-800 rounded-lg p-2 text-white focus:border-brand-cyan"
              />
            </div>
            <div>
              <label className="block font-mono uppercase text-gray-400 mb-1">Industry Sector</label>
              <input
                type="text"
                required
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full bg-dark-900 border border-gray-800 rounded-lg p-2 text-white focus:border-brand-cyan"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono uppercase text-gray-400 mb-1">Primary Competitors (Comma Separated)</label>
            <input
              type="text"
              required
              value={formData.competitors}
              onChange={(e) => setFormData({ ...formData, competitors: e.target.value })}
              className="w-full bg-dark-900 border border-gray-800 rounded-lg p-2 text-white focus:border-brand-cyan"
            />
          </div>

          <div>
            <label className="block font-mono uppercase text-gray-400 mb-1">Core Keywords to Monitor</label>
            <input
              type="text"
              required
              value={formData.keywords}
              onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
              className="w-full bg-dark-900 border border-gray-800 rounded-lg p-2 text-white focus:border-brand-cyan"
            />
          </div>

          <div>
            <label className="block font-mono uppercase text-gray-400 mb-1">Research Areas</label>
            <input
              type="text"
              required
              value={formData.researchAreas}
              onChange={(e) => setFormData({ ...formData, researchAreas: e.target.value })}
              className="w-full bg-dark-900 border border-gray-800 rounded-lg p-2 text-white focus:border-brand-cyan"
            />
          </div>

          <div className="pt-4 border-t border-gray-800 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-brand-cyan to-brand-blue text-dark-900 font-bold uppercase font-mono text-xs rounded-lg shadow-lg hover:opacity-90"
            >
              Initialize Intelligence Radar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
