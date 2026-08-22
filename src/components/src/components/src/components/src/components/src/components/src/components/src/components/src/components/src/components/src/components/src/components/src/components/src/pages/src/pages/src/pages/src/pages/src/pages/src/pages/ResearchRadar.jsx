import React, { useState } from 'react';
import ResearchCard from '../components/ResearchCard';
import { DEMO_RESEARCH_ITEMS } from '../data/demoData';
import { Search, Filter } from 'lucide-react';

export default function ResearchRadar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');

  const filteredItems = DEMO_RESEARCH_ITEMS.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'ALL' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="glass-panel p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Research Radar</h2>
          <p className="text-xs text-gray-400 font-mono mt-1">
            Monitoring scientific literature, academic publications, and lab developments.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search papers or authors..."
              className="w-full bg-dark-900 border border-gray-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-dark-900 border border-gray-800 rounded-lg px-3 py-1.5 text-xs text-gray-300 focus:outline-none focus:border-brand-cyan font-mono"
          >
            <option value="ALL">All Categories</option>
            <option value="Battery Tech">Battery Tech</option>
            <option value="Charging Systems">Charging Systems</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredItems.map((item) => (
          <ResearchCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
