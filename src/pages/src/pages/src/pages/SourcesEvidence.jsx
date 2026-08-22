import React from 'react';
import EvidencePanel from '../components/EvidencePanel';

const DEMO_SOURCES = [
  {
    source: "USPTO Patent Register #US20260049121A1",
    publicationDate: "2026-03-12",
    evidenceText: "Claim 1 specifies a integrated ceramic-coated cooling loop in a solid state enclosure.",
    confidence: 98,
    url: "https://uspto.gov"
  },
  {
    source: "Nature Energy Journal DOI:10.1038/s41560-026",
    publicationDate: "2026-03-10",
    evidenceText: "Experimental cell showed 80% retention after 1,200 fast charge cycles at 4C.",
    confidence: 95,
    url: "https://nature.com"
  }
];

export default function SourcesEvidence() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white">Sources & Evidence Vault</h2>
        <p className="text-xs text-gray-400 font-mono mt-1">
          Traceable audit log supporting all AI recommendations.
        </p>
      </div>

      <EvidencePanel sources={DEMO_SOURCES} />
    </div>
  );
}
