import { supabase } from '../lib/supabase';
import { DEMO_RESEARCH_ITEMS } from '../data/demoData';

export const researchService = {
  async getItems() {
    try {
      const { data, error } = await supabase.from('research_items').select('*');
      if (error || !data || data.length === 0) return DEMO_RESEARCH_ITEMS;
      return data;
    } catch {
      return DEMO_RESEARCH_ITEMS;
    }
  }
};
