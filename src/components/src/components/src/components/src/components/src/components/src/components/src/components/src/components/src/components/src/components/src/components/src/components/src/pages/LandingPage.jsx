import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Cpu, Radar, ArrowRight, CheckCircle, Database } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 flex flex-col selection:bg-brand-cyan/30 selection:text-brand-cyan">
      {/* Navigation Header */}
      <nav className="h-20 border-b border-gray-800/80 bg-dark-900/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple flex items-center justify-center shadow-lg shadow-brand-cyan/20">
            <Zap className="w-5 h-5 text-dark-900 fill-dark-900" />
          </div>
          <span className="font-bold text-xl tracking-wider text-white">
            BEYOND <span className="text-brand-cyan font-mono">BINARY</span>
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-5 py-2.5 bg-gradient-to-r from-brand-cyan to-brand-blue text-dark-900 font-bold text-xs rounded-lg shadow-lg shadow-brand-cyan/20 hover:opacity-90 transition-all uppercase tracking-wider"
          >
            Launch Intelligence
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
          <span>Autonomous AI Competitive Intelligence Engine</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
          Turn Fragmented Data Into <span className="gradient-text">Strategic Dominance.</span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
          Continuously monitor research papers, patent filings, competitor telemetry, and industry news in real time with multi-agent AI orchestration.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/register"
            className="px-8 py-4 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-dark-900 font-bold text-sm rounded-xl shadow-xl shadow-brand-cyan/20 hover:scale-105 transition-all uppercase tracking-wider flex items-center space-x-2"
          >
            <span>Launch Intelligence</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/app"
            className="px-8 py-4 bg-dark-800 border border-gray-700 hover:border-gray-500 text-white font-semibold text-sm rounded-xl transition-all"
          >
            Explore Live Demo
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-cyan mb-2">Architected for Speed</h2>
          <h3 className="text-3xl font-bold text-white">Full-Stack Intelligence Pipeline</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-6 space-y-4">
            <Radar className="w-8 h-8 text-brand-cyan" />
            <h4 className="text-lg font-bold text-white">Automated Collection</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Multi-agent scouts aggregate thousands of ArXiv papers, USPTO patent claims, and industry feeds every hour.
            </p>
          </div>
          <div className="glass-panel p-6 space-y-4">
            <Cpu className="w-8 h-8 text-brand-purple" />
            <h4 className="text-lg font-bold text-white">Synthesized Insights</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              LLMs normalize, deduplicate, and extract core strategic impacts, generating clear, actionable guidance.
            </p>
          </div>
          <div className="glass-panel p-6 space-y-4">
            <Shield className="w-8 h-8 text-emerald-400" />
            <h4 className="text-lg font-bold text-white">Threat Matrix</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Interactive impact/urgency mapping allows executives to pre-empt competitor moves before launch.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-800 py-8 px-8 text-center text-xs text-gray-500 font-mono">
        <p>© 2026 Team Beyond Binary. Built for National Level Hackathon Excellence.</p>
      </footer>
    </div>
  );
}
