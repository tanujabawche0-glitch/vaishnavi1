import { supabase } from '../lib/supabase';
import { DEMO_PATENTS } from '../data/demoData';

export const patentService = {
  async getPatents() {
    try {
      const { data, error } = await supabase.from('patents').select('*');
      if (error || !data || data.length === 0) return DEMO_PATENTS;
      return data;
    } catch {
      return DEMO_PATENTS;
    }
  }
};
