import React from 'react';
import { ExternalLink, Radio } from 'lucide-react';

export default function NewsCard({ news }) {
  const getSentimentBadge = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'negative': return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="glass-card p-5 hover:border-gray-700 transition-all duration-300">
      <div className="flex items-center space-x-2 mb-2">
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
          {news.category}
        </span>
        <span className={`px-2 py-0.5 rounded text-[10px] font-mono border capitalize ${getSentimentBadge(news.sentiment)}`}>
          {news.sentiment}
        </span>
        <span className="text-xs text-gray-500 font-mono ml-auto">{news.date}</span>
      </div>

      <h3 className="text-base font-semibold text-gray-100 hover:text-brand-cyan cursor-pointer transition-colors">
        {news.headline}
      </h3>
      <p className="text-xs text-gray-400 mt-1 font-mono">Source: {news.source}</p>

      <p className="text-xs text-gray-300 mt-3 leading-relaxed">{news.summary}</p>

      <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-1 text-gray-400 font-mono">
          <span>Impact:</span>
          <span className="font-bold text-white">{news.impactScore}/100</span>
        </div>
        <a
          href={news.sourceUrl || "#"}
          target="_blank"
          rel="noreferrer"
          className="text-brand-cyan hover:underline flex items-center space-x-1 font-mono"
        >
          <span>Source</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
