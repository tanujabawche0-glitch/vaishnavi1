import React from 'react';
import { 
  Radar, ShieldAlert, TrendingUp, Users, 
  Cpu, Bell, ArrowUpRight 
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import KpiCard from '../components/KpiCard';
import ChartCard from '../components/ChartCard';
import { DEMO_RESEARCH_ITEMS, DEMO_PATENTS, DEMO_COMPETITORS, DEMO_TRENDS } from '../data/demoData';

const chartData = [
  { name: 'Mon', Research: 12, Patents: 4, CompetitorMoves: 8 },
  { name: 'Tue', Research: 19, Patents: 7, CompetitorMoves: 12 },
  { name: 'Wed', Research: 15, Patents: 3, CompetitorMoves: 10 },
  { name: 'Thu', Research: 22, Patents: 9, CompetitorMoves: 15 },
  { name: 'Fri', Research: 30, Patents: 12, CompetitorMoves: 18 },
  { name: 'Sat', Research: 25, Patents: 8, CompetitorMoves: 14 },
  { name: 'Sun', Research: 28, Patents: 10, CompetitorMoves: 16 }
];

export default function CommandCenter() {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 glass-panel p-6 border-brand-cyan/20">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Executive Intelligence Command Center</h2>
          <p className="text-xs text-gray-400 font-mono mt-1">
            Real-time autonomous telemetry & multi-vector signal synthesis for Beyond Motors.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs font-bold">
            HEALTH: OPTIMAL (100%)
          </span>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Intelligence Score" value="94.8" change="+3.2% vs last week" icon={Cpu} badge="REALTIME" />
        <KpiCard title="High Priority Alerts" value="08" change="2 Critical Threats" changeType="negative" icon={Bell} />
        <KpiCard title="Emerging Trends" value="12" change="+4 Signals Detected" icon={TrendingUp} />
        <KpiCard title="New Patents Analyzed" value="35" change="+15% MoM" icon={ShieldAlert} />
      </div>

      {/* Analytics Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Research & Patent Activity Trajectory" subtitle="Signal velocity over past 7 days">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorResearch" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00F2FE" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#00F2FE" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPatents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7F00FF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#7F00FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#6B7280" fontSize={10} />
              <YAxis stroke="#6B7280" fontSize={10} />
              <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', fontSize: '12px' }} />
              <Area type="monotone" dataKey="Research" stroke="#00F2FE" fillOpacity={1} fill="url(#colorResearch)" />
              <Area type="monotone" dataKey="Patents" stroke="#7F00FF" fillOpacity={1} fill="url(#colorPatents)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Competitor Strategic Move Volume" subtitle="Categorized threat activity by day">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#6B7280" fontSize={10} />
              <YAxis stroke="#6B7280" fontSize={10} />
              <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', fontSize: '12px' }} />
              <Bar dataKey="CompetitorMoves" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Stream Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Latest Research */}
        <div className="glass-panel p-5 space-y-4">
          <h3 className="text-xs font-bold text-gray-300 font-mono uppercase tracking-wider flex items-center justify-between">
            <span>Latest Research Signals</span>
            <Radar className="w-4 h-4 text-brand-cyan" />
          </h3>
          <div className="space-y-3">
            {DEMO_RESEARCH_ITEMS.slice(0, 3).map((res) => (
              <div key={res.id} className="p-3 bg-dark-900/50 rounded-lg border border-gray-800 text-xs">
                <span className="text-[10px] text-brand-cyan font-mono block mb-1">{res.category}</span>
                <h4 className="font-semibold text-gray-200 line-clamp-1">{res.title}</h4>
                <p className="text-gray-400 text-[11px] mt-1 line-clamp-2">{res.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor Radar */}
        <div className="glass-panel p-5 space-y-4">
          <h3 className="text-xs font-bold text-gray-300 font-mono uppercase tracking-wider flex items-center justify-between">
            <span>Competitor Threat Index</span>
            <Users className="w-4 h-4 text-amber-400" />
          </h3>
          <div className="space-y-3">
            {DEMO_COMPETITORS.slice(0, 3).map((comp) => (
              <div key={comp.id} className="p-3 bg-dark-900/50 rounded-lg border border-gray-800 text-xs flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white">{comp.name}</h4>
                  <span className="text-[10px] text-gray-400">{comp.recentMoves.slice(0, 35)}...</span>
                </div>
                <span className="font-mono text-sm font-bold text-amber-400">{comp.overallScore}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Trends */}
        <div className="glass-panel p-5 space-y-4">
          <h3 className="text-xs font-bold text-gray-300 font-mono uppercase tracking-wider flex items-center justify-between">
            <span>Active Trends</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </h3>
          <div className="space-y-3">
            {DEMO_TRENDS.slice(0, 3).map((tr) => (
              <div key={tr.id} className="p-3 bg-dark-900/50 rounded-lg border border-gray-800 text-xs flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-200">{tr.title}</h4>
                  <span className="text-[10px] text-emerald-400 font-mono">{tr.growth} growth</span>
                </div>
                <span className="text-xs font-bold text-white font-mono">{tr.score}/100</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
