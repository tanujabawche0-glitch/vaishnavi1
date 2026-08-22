export const DEMO_ORGANIZATION = {
  id: "org-beyond-motors",
  name: "Beyond Motors",
  industry: "Electric Vehicles",
  competitors: ["Tesla", "BYD", "Mahindra", "Hyundai", "NIO"],
  keywords: ["EV Battery", "Fast Charging", "Solid State Battery", "Battery Recycling", "Autonomous Driving"],
  researchAreas: ["Next-Gen Energy Storage", "Silicon Anode Tech", "Thermal Management"],
  technologyInterests: ["Solid-State Electrolytes", "800V Architecture", "Sodium-ion Cells"],
  lastScanAt: new Date().toISOString(),
  agentStatus: "active"
};

export const DEMO_RESEARCH_ITEMS = Array.from({ length: 20 }, (_, i) => ({
  id: `res-${i + 1}`,
  title: [
    "Dendrite Suppression in Solid-State Lithium Batteries via Polymer-Ceramic Interlayers",
    "High-Density Silicon-Graphene Anodes for Fast-Charging Automotive Batteries",
    "Thermal Runaway Mitigation in High-Nickel Cathode Cells Using Phase Change Materials",
    "Direct Recycling Protocols for End-of-Life Lithium Iron Phosphate (LFP) Cathodes",
    "Sodium-Ion Cell Architectures Operating at Sub-Zero Temperatures",
    "800V SiC Inverter Efficiency Optimization in Urban EV Drive Cycles",
    "Machine Learning Models for Real-Time Battery State of Health Estimation",
    "Cobalt-Free High-Voltage Cathode Chemistry with Enhanced Cycle Stability",
    "Ultra-Fast Pulse Charging Protocols for Reduced Lithium Plating",
    "Modular Battery Pack Designs for Automated Robotic Swapping"
  ][i % 10] + (i >= 10 ? " (Phase II Findings)" : ""),
  authors: i % 2 === 0 ? "Dr. Aris Thorne, Prof. Elena Rostova" : "M. Chen, K. Patel, S. Williams",
  source: i % 3 === 0 ? "Nature Energy" : i % 3 === 1 ? "Journal of Power Sources" : "IEEE Transactions on Transportation Electrification",
  publicationDate: new Date(Date.now() - i * 86400000 * 3).toISOString().split('T')[0],
  category: i % 2 === 0 ? "Battery Tech" : "Charging Systems",
  summary: "Comprehensive experimental evaluation demonstrating a 35% increase in energy density and 80% capacity retention after 1,200 fast-charge cycles.",
  relevanceScore: 85 + (i % 15),
  impactScore: 80 + (i % 18),
  priority: i % 4 === 0 ? "CRITICAL" : i % 3 === 0 ? "HIGH" : "MEDIUM",
  whyItMatters: "Directly threatens our current battery thermal architecture roadmaps and could accelerate rival vehicle launch timelines by 12 months.",
  potentialImpact: "May render current graphite-anode supply contracts uncompetitive within 3 years.",
  recommendedAction: "Initiate joint exploratory testing with university lab and benchmark sample cells.",
  evidence: "Peer-reviewed experimental data showing 1,200 cycles at 4C charging rates with zero dendrite formation."
}));

export const DEMO_PATENTS = Array.from({ length: 15 }, (_, i) => ({
  id: `pat-${i + 1}`,
  title: [
    "Integrated Thermal Management System for Solid-State Battery Packs",
    "High-Voltage Multi-Channel Fast Charging Connector Architecture",
    "Method for Automated Battery Cell Sorting and Grading using AI",
    "Structural Battery Chassis Integration with Composite Reinforcement",
    "Wireless Battery Management System Node Communication Protocol"
  ][i % 5] + ` #${i + 101}`,
  assignee: ["Tesla Inc.", "BYD Company Ltd.", "Mahindra Electric", "Hyundai Motor Co.", "NIO Inc."][i % 5],
  inventor: "H. Zhang et al.",
  filingDate: "2024-03-15",
  publicationDate: new Date(Date.now() - i * 86400000 * 5).toISOString().split('T')[0],
  technology: ["Solid-State Battery", "Fast Charging Architecture", "AI Diagnostics", "Structural Chassis"][i % 4],
  competitor: ["Tesla", "BYD", "Mahindra", "Hyundai", "NIO"][i % 5],
  relevance: 90 - (i * 2),
  impact: 88 - (i * 3),
  priority: i < 3 ? "CRITICAL" : i < 7 ? "HIGH" : "MEDIUM",
  summary: "Patent covers a unique multi-channel cooling plate integrated directly into solid-state battery structural frames.",
  whyItMatters: "Protects a broad claims scope that could block our planned 2026 pack design.",
  competitiveImpact: "Forces alternative cooling loop designs if enforced in North America and EU markets.",
  risk: "Patent infringement risk level 4/5 for planned Gen-3 platform.",
  opportunity: "Workarounds identified using top-plate cooling mechanisms.",
  recommendedAction: "Request formal freedom-to-operate IP opinion from legal counsel."
}));

export const DEMO_NEWS = Array.from({ length: 20 }, (_, i) => ({
  id: `news-${i + 1}`,
  headline: [
    "BYD Announces 1,000km Solid-State Battery Mass Production Line for Late 2026",
    "Tesla Secures Exclusive Supply Contract for High-Purity Synthetic Graphite",
    "Mahindra Partners with Top European Cell Supplier for Local Gigafactory",
    "Hyundai Unveils Next-Gen Ultra-Fast 400kW Charging Infrastructure Network",
    "EU Imposes Strict New Carbon Footprint Regulations on Imported EV Batteries"
  ][i % 5] + ` (Updates ${i + 1})`,
  source: ["Automotive News", "Bloomberg Energy", "Reuters Tech", "Electrek", "Financial Times"][i % 5],
  date: new Date(Date.now() - i * 3600000 * 12).toISOString().split('T')[0],
  category: ["Competitor Launch", "Supply Chain", "Partnerships", "Infrastructure", "Regulatory"][i % 5],
  summary: "Major industry shift toward solid-state scaling sooner than analyst consensus predicted.",
  sentiment: i % 3 === 0 ? "negative" : i % 2 === 0 ? "positive" : "neutral",
  impactScore: 82 + (i % 15),
  priority: i % 3 === 0 ? "HIGH" : "MEDIUM",
  whyItMatters: "Accelerates consumer expectations for fast charging and range across the entire market segment.",
  recommendation: "Accelerate press release regarding internal solid-state pilot line achievements.",
  sourceUrl: "https://example.com/industry-news"
}));

export const DEMO_COMPETITORS = [
  {
    id: "comp-1",
    name: "BYD",
    overallScore: 94,
    researchActivity: 88,
    patentActivity: 96,
    newsActivity: 92,
    technologyActivity: 90,
    recentMoves: "Constructing 20GWh Solid-State Battery Plant; filed 45 patents in Q1.",
    riskLevel: "CRITICAL",
    summary: "BYD is aggressively expanding upstream battery material control and accelerating solid-state production timetables."
  },
  {
    id: "comp-2",
    name: "Tesla",
    overallScore: 91,
    researchActivity: 82,
    patentActivity: 89,
    newsActivity: 98,
    technologyActivity: 94,
    recentMoves: "Rolling out Cybercab telemetry updates; expanding Megapack manufacturing capacity.",
    riskLevel: "HIGH",
    summary: "Tesla is pivoting heavily toward AI, autonomous drive stacks, and manufacturing cost reductions."
  },
  {
    id: "comp-3",
    name: "Mahindra",
    overallScore: 78,
    researchActivity: 75,
    patentActivity: 72,
    newsActivity: 84,
    technologyActivity: 79,
    recentMoves: "Investing $1.2B in new EV manufacturing facility and platform partnerships.",
    riskLevel: "MEDIUM",
    summary: "Mahindra is scaling regional market dominance with heavy platform consolidation."
  },
  {
    id: "comp-4",
    name: "Hyundai",
    overallScore: 85,
    researchActivity: 84,
    patentActivity: 86,
    newsActivity: 82,
    technologyActivity: 88,
    recentMoves: "Testing 800V ultra-fast modular platforms across luxury and commercial segments.",
    riskLevel: "HIGH",
    summary: "Hyundai leads in charging architecture speed and modular vehicle platforms."
  },
  {
    id: "comp-5",
    name: "NIO",
    overallScore: 74,
    researchActivity: 79,
    patentActivity: 70,
    newsActivity: 78,
    technologyActivity: 81,
    recentMoves: "Expanding 4th-gen battery swapping stations across Europe.",
    riskLevel: "MEDIUM",
    summary: "NIO continues to pioneer battery-as-a-service (BaaS) and swapping technology."
  }
];

export const DEMO_TRENDS = [
  {
    id: "trend-1",
    title: "Solid-State Battery Commercialization",
    score: 91,
    growth: "+28%",
    signals: { research: 88, patent: 95, news: 92, competitor: 90 },
    description: "Shift from lab prototypes to high-volume pilot production lines among major automakers.",
    relatedResearch: ["Dendrite Suppression", "Silicon-Graphene Anodes"],
    relatedPatents: ["Thermal Management System #101"],
    relatedCompetitors: ["BYD", "Toyota", "QuantumScape"]
  },
  {
    id: "trend-2",
    title: "800V Silicon Carbide Inverters",
    score: 86,
    growth: "+19%",
    signals: { research: 82, patent: 89, news: 84, competitor: 88 },
    description: "Transitioning mainstream EV drive units to SiC semiconductors for 5% efficiency gains.",
    relatedResearch: ["800V SiC Inverter Efficiency"],
    relatedPatents: ["Multi-Channel Charging Architecture"],
    relatedCompetitors: ["Hyundai", "Porsche"]
  },
  {
    id: "trend-3",
    title: "Direct LFP Cathode Recycling",
    score: 79,
    growth: "+34%",
    signals: { research: 92, patent: 71, news: 78, competitor: 75 },
    description: "Closed-loop hydrometallurgical recycling designed specifically for low-margin LFP chemistry.",
    relatedResearch: ["Direct Recycling Protocols"],
    relatedPatents: ["Automated Cell Sorting AI"],
    relatedCompetitors: ["Redwood Materials", "BYD"]
  },
  {
    id: "trend-4",
    title: "Sodium-Ion Energy Storage Units",
    score: 73,
    growth: "+15%",
    signals: { research: 85, patent: 68, news: 70, competitor: 69 },
    description: "Low-cost alternative chemistry gaining traction in urban commuter vehicles and grid storage.",
    relatedResearch: ["Sub-Zero Sodium-Ion Cells"],
    relatedPatents: ["Wireless BMS Node Protocol"],
    relatedCompetitors: ["CATL", "NIO"]
  },
  {
    id: "trend-5",
    title: "AI-Driven Battery Health Optimization",
    score: 88,
    growth: "+42%",
    signals: { research: 94, patent: 88, news: 82, competitor: 89 },
    description: "Cloud-connected digital twins predicting cell degradation and adjusting charge curves dynamically.",
    relatedResearch: ["Machine Learning BMS Models"],
    relatedPatents: ["Automated Cell Sorting AI"],
    relatedCompetitors: ["Tesla", "Beyond Motors"]
  }
];

export const DEMO_ALERTS = [
  {
    id: "alt-1",
    title: "CRITICAL: BYD Solid-State Patent Published",
    priority: "CRITICAL",
    date: new Date().toISOString().split('T')[0],
    explanation: "BYD has published a comprehensive patent covering solid-state electrolyte thermal loops.",
    impact: "Potential patent blockade for Beyond Motors' planned 2026 pack architecture.",
    recommendation: "Task legal team immediately to evaluate claim 1-14 scope.",
    evidence: "Patent Publication #US20260049121A1"
  },
  {
    id: "alt-2",
    title: "HIGH: High-Density Silicon Anode Research Breakthrough",
    priority: "HIGH",
    date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
    explanation: "Nature Energy published landmark study on 1,200 cycle silicon anode retention.",
    impact: "Accelerates commercial viable silicon anodes by 2 years.",
    recommendation: "Contact authors for material samples.",
    evidence: "DOI: 10.1038/s41560-026-01492-x"
  },
  {
    id: "alt-3",
    title: "HIGH: EU Carbon Footprint Mandate Passed",
    priority: "HIGH",
    date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0],
    explanation: "European Commission approved new lifecycle battery emissions standards starting Q3 2026.",
    impact: "Supply chain compliance costs will increase by ~4%.",
    recommendation: "Audit upstream energy sources at supplier plants.",
    evidence: "EU Directive 2026/891/EC"
  },
  {
    id: "alt-4",
    title: "MEDIUM: Tesla Expands Supercharger V4 Network in APAC",
    priority: "MEDIUM",
    date: new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0],
    explanation: "500 new 350kW station deployments announced in target growth markets.",
    impact: "Increases competitor charging convenience index.",
    recommendation: "Review roaming interoperability agreements.",
    evidence: "Tesla Official Press Announcement"
  },
  {
    id: "alt-5",
    title: "LOW: Cobalt Price Volatility Index Spike",
    priority: "LOW",
    date: new Date(Date.now() - 86400000 * 4).toISOString().split('T')[0],
    explanation: "Global spot market cobalt prices fluctuated by +6% following export restrictions.",
    impact: "Minimal short-term impact due to high-nickel low-cobalt mix.",
    recommendation: "Monitor LFP chemistry substitution timelines.",
    evidence: "London Metal Exchange Data"
  }
];

export const DEMO_INSIGHTS = [
  {
    id: "ins-1",
    priority: "HIGH",
    impactScore: 92,
    confidence: 94,
    risk: "High",
    opportunity: "High",
    title: "Solid-State Electrification Threat & Pivot Strategy",
    whatHappened: "BYD and QuantumScape simultaneously released pilot line metrics indicating solid-state energy density exceeding 450 Wh/kg.",
    whyItMatters: "Traditional NMC and LFP cell architectures will face extreme pricing and range pressure in premium vehicle segments by 2027.",
    competitiveImpact: "BYD may capture first-mover advantage in high-end long-range SUVs.",
    recommendation: "Reallocate 15% of R&D budget toward solid-state electrolyte integration and secure university licensing agreements.",
    evidence: "3 Patents, 4 Research Papers, 2 Public Industry Announcements"
  },
  {
    id: "ins-2",
    priority: "CRITICAL",
    impactScore: 89,
    confidence: 91,
    risk: "Critical",
    opportunity: "Medium",
    title: "Patent Claim Encroachment on Gen-3 Cooling Pack",
    whatHappened: "Patent filing #PAT-101 published by Tesla covers multi-channel cooling plates virtually identical to Beyond Motors' concept concept #B.",
    whyItMatters: "Proceeding without design modification poses severe litigation risk upon platform production.",
    competitiveImpact: "Tesla could seek injunctive relief or high licensing royalties.",
    recommendation: "Pivot pack design to alternative top-plate dual phase cooling loop design detailed in internal memo Tech-88.",
    evidence: "USPTO Patent Application #PAT-101 Claims 1-12"
  }
];

export const DEMO_REPORTS = [
  {
    id: "rep-1",
    title: "Daily Competitive Intelligence Briefing - " + new Date().toISOString().split('T')[0],
    generatedAt: new Date().toISOString(),
    executiveSummary: "Competitor activity in solid-state chemistry has intensified significantly over the last 48 hours. BYD's latest patent filing poses direct structural IP challenges to our upcoming Gen-3 battery architecture.",
    topDevelopments: [
      "BYD published multi-channel solid-state thermal management patent.",
      "Nature Energy paper proves 1,200 cycle fast charging on silicon anodes.",
      "EU battery carbon footprint mandates finalized for 2026 enforcement."
    ],
    threats: ["IP blocking by key competitor on liquid cooling loops."],
    opportunities: ["Accelerating silicon anode integration into mid-tier LFP packs."],
    recommendedActions: [
      "Schedule IP freedom-to-operate audit with patent attorney.",
      "Evaluate raw material supplier carbon intensity metrics."
    ]
  }
];
