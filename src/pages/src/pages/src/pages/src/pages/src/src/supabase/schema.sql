-- Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles Table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  organization_id UUID,
  role TEXT DEFAULT 'analyst',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Organizations Table
CREATE TABLE public.organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  industry TEXT NOT NULL,
  competitors TEXT[],
  keywords TEXT[],
  research_areas TEXT[],
  agent_status TEXT DEFAULT 'active',
  last_scan_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Link profile organization foreign key
ALTER TABLE public.profiles 
  ADD CONSTRAINT fk_profile_org 
  FOREIGN KEY (organization_id) REFERENCES public.organizations(id);

-- Research Items Table
CREATE TABLE public.research_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  authors TEXT,
  source TEXT,
  publication_date DATE,
  category TEXT,
  summary TEXT,
  relevance_score INT,
  impact_score INT,
  priority TEXT,
  why_it_matters TEXT,
  potential_impact TEXT,
  recommended_action TEXT,
  evidence TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Patents Table
CREATE TABLE public.patents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  assignee TEXT NOT NULL,
  inventor TEXT,
  publication_date DATE,
  technology TEXT,
  competitor TEXT,
  relevance INT,
  impact INT,
  summary TEXT,
  risk TEXT,
  recommended_action TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- News Items Table
CREATE TABLE public.news_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
  headline TEXT NOT NULL,
  source TEXT,
  date DATE,
  category TEXT,
  summary TEXT,
  sentiment TEXT,
  impact_score INT,
  source_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Competitors Table
CREATE TABLE public.competitors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  overall_score INT,
  research_activity INT,
  patent_activity INT,
  news_activity INT,
  recent_moves TEXT,
  risk_level TEXT,
  summary TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trends Table
CREATE TABLE public.trends (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  score INT,
  growth TEXT,
  description TEXT,
  signals JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Live Alerts Table
CREATE TABLE public.alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  priority TEXT NOT NULL,
  explanation TEXT,
  impact TEXT,
  recommendation TEXT,
  evidence TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reports Table
CREATE TABLE public.reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  executive_summary TEXT,
  top_developments TEXT[],
  recommended_actions TEXT[],
  generated_at TIMESTAMPTZ DEFAULT NOW()
);

---------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLICIES
---------------------------------------------------------

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.competitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trends ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

-- Helper Function to get user's org
CREATE OR REPLACE FUNCTION public.get_auth_org()
RETURNS UUID AS $$
  SELECT organization_id FROM public.profiles WHERE id = auth.uid();
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- Profiles Policies
CREATE POLICY "Users can view own profile" 
  ON public.profiles FOR SELECT USING (id = auth.uid());

CREATE POLICY "Users can update own profile" 
  ON public.profiles FOR UPDATE USING (id = auth.uid());

-- Organization Policies
CREATE POLICY "Users can view own org" 
  ON public.organizations FOR SELECT 
  USING (id = public.get_auth_org());

-- Research Items Policies
CREATE POLICY "Users view own org research" 
  ON public.research_items FOR SELECT 
  USING (organization_id = public.get_auth_org());

-- Patents Policies
CREATE POLICY "Users view own org patents" 
  ON public.patents FOR SELECT 
  USING (organization_id = public.get_auth_org());

-- News Policies
CREATE POLICY "Users view own org news" 
  ON public.news_items FOR SELECT 
  USING (organization_id = public.get_auth_org());

-- Competitors Policies
CREATE POLICY "Users view own org competitors" 
  ON public.competitors FOR SELECT 
  USING (organization_id = public.get_auth_org());

-- Alerts Policies
CREATE POLICY "Users view own org alerts" 
  ON public.alerts FOR SELECT 
  USING (organization_id = public.get_auth_org());
