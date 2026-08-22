import { supabase } from '../lib/supabase';
import { DEMO_ALERTS } from '../data/demoData';

export const alertService = {
  async getAlerts() {
    try {
      const { data, error } = await supabase.from('alerts').select('*');
      if (error || !data || data.length === 0) return DEMO_ALERTS;
      return data;
    } catch {
      return DEMO_ALERTS;
    }
  }
};
