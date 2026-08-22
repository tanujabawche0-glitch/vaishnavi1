import { supabase } from '../lib/supabase';
import { DEMO_REPORTS } from '../data/demoData';

export const reportService = {
  async getReports() {
    try {
      const { data, error } = await supabase.from('reports').select('*');
      if (error || !data || data.length === 0) return DEMO_REPORTS;
      return data;
    } catch {
      return DEMO_REPORTS;
    }
  }
};
