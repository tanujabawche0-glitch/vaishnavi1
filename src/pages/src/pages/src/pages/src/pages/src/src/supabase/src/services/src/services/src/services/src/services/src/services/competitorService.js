import { supabase } from '../lib/supabase';
import { DEMO_COMPETITORS } from '../data/demoData';

export const competitorService = {
  async getCompetitors() {
    try {
      const { data, error } = await supabase.from('competitors').select('*');
      if (error || !data || data.length === 0) return DEMO_COMPETITORS;
      return data;
    } catch {
      return DEMO_COMPETITORS;
    }
  }
};
