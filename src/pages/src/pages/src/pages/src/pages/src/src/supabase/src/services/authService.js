import { supabase } from '../lib/supabase';

export const authService = {
  async signUp(email, password) {
    return await supabase.auth.signUp({ email, password });
  },

  async signIn(email, password) {
    return await supabase.auth.signInWithPassword({ email, password });
  },

  async signOut() {
    return await supabase.auth.signOut();
  },

  async getSession() {
    const { data } = await supabase.auth.getSession();
    return data.session;
  }
};
