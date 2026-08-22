import { supabase } from '../lib/supabase';
import { DEMO_NEWS } from '../data/demoData';

export const newsService = {
  async getNews() {
    try {
      const { data, error } = await supabase.from('news_items').select('*');
      if (error || !data || data.length === 0) return DEMO_NEWS;
      return data;
    } catch {
      return DEMO_NEWS;
    }
  }
};
