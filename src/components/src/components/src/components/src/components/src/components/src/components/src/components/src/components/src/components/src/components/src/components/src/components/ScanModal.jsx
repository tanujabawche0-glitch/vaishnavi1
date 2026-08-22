import React from 'react';
import { CheckCircle2, Loader2, Zap } from 'lucide-react';

export default function ScanModal({ isOpen, steps, currentStep, onDone }) {
  if (!isOpen) return null;

  const isComplete = currentStep >= steps.length;

  return (
    <div className="fixed inset-0 z-50 bg-dark-900/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel max-w-md w-full p-6 border-brand-cyan/30 shadow-2xl space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
            <Zap className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Autonomous Intelligence Scan</h3>
            <p className="text-xs text-gray-400 font-mono">Executing Multi-Agent Crawler & Synthesizer</p>
          </div>
        </div>

        <div className="space-y-3 py-2">
          {steps.map((step, idx) => {
            const isFinished = idx < currentStep;
            const isCurrent = idx === currentStep;

            return (
              <div key={idx} className="flex items-center justify-between text-xs font-mono p-2 rounded bg-dark-900/50 border border-gray-800/80">
                <span className={isFinished ? 'text-gray-300' : isCurrent ? 'text-brand-cyan font-bold' : 'text-gray-600'}>
                  {step}
                </span>
                {isFinished ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : isCurrent ? (
                  <Loader2 className="w-4 h-4 text-brand-cyan animate-spin shrink-0" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-gray-700 shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        {isComplete && (
          <button
            onClick={onDone}
            className="w-full py-2.5 bg-gradient-to-r from-brand-cyan to-brand-blue text-dark-900 font-bold rounded-lg text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Complete Scan & View Results
          </button>
        )}
      </div>
    </div>
  );
}
