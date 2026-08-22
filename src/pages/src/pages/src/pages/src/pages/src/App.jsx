import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import ScanModal from './components/ScanModal';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Onboarding from './pages/Onboarding';

import CommandCenter from './pages/CommandCenter';
import ResearchRadar from './pages/ResearchRadar';
import PatentWatch from './pages/PatentWatch';
import CompetitorIntelligence from './pages/CompetitorIntelligence';
import IndustryPulse from './pages/IndustryPulse';
import TrendIntelligence from './pages/TrendIntelligence';
import ThreatsOpportunities from './pages/ThreatsOpportunities';
import AiInsights from './pages/AiInsights';
import LiveAlerts from './pages/LiveAlerts';
import IntelligenceReports from './pages/IntelligenceReports';
import SourcesEvidence from './pages/SourcesEvidence';
import Settings from './pages/Settings';

export default function App() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);

  const scanSteps = [
    "Collecting ArXiv Research Papers...",
    "Crawling USPTO Patent Registry...",
    "Scraping Competitor News Telemetry...",
    "Deduplicating & Normalizing Feeds...",
    "Running LLM Threat & Opportunity Synthesis...",
    "Updating Intelligence Command Center..."
  ];

  const handleRunScan = () => {
    setIsScanning(true);
    setScanStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < scanSteps.length) {
        setScanStep(step);
      } else {
        clearInterval(interval);
        setScanStep(scanSteps.length);
      }
    }, 800);
  };

  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/onboarding" element={<Onboarding />} />

      {/* Main Dashboard Layout */}
      <Route
        path="/app/*"
        element={
          <div className="flex h-screen bg-dark-900 text-gray-100 overflow-hidden">
            <Sidebar onRunScan={handleRunScan} />

            <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
              <Topbar isDemo={true} onOpenScan={handleRunScan} />

              <main className="p-6 flex-1">
                <Routes>
                  <Route path="/" element={<CommandCenter />} />
                  <Route path="/research" element={<ResearchRadar />} />
                  <Route path="/patents" element={<PatentWatch />} />
                  <Route path="/competitors" element={<CompetitorIntelligence />} />
                  <Route path="/pulse" element={<IndustryPulse />} />
                  <Route path="/trends" element={<TrendIntelligence />} />
                  <Route path="/threats" element={<ThreatsOpportunities />} />
                  <Route path="/insights" element={<AiInsights />} />
                  <Route path="/alerts" element={<LiveAlerts />} />
                  <Route path="/reports" element={<IntelligenceReports />} />
                  <Route path="/sources" element={<SourcesEvidence />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="/app" replace />} />
                </Routes>
              </main>
            </div>

            <ScanModal
              isOpen={isScanning}
              steps={scanSteps}
              currentStep={scanStep}
              onDone={() => setIsScanning(false)}
            />
          </div>
        }
      />
    </Routes>
  );
}
