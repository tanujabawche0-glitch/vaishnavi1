import React from 'react';
import NewsCard from '../components/NewsCard';
import { DEMO_NEWS } from '../data/demoData';

export default function IndustryPulse() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white">Industry Pulse</h2>
        <p className="text-xs text-gray-400 font-mono mt-1">
          Real-time global news monitoring and sentiment analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DEMO_NEWS.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}
