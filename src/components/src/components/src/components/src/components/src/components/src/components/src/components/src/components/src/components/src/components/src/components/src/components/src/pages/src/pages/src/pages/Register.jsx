import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/authService';
import { Zap, Mail, Lock } from 'lucide-react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await authService.signUp(email, password);
      if (error) throw error;
      navigate('/onboarding');
    } catch (err) {
      setError(err.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <div className="glass-panel max-w-md w-full p-8 space-y-6 border-gray-800">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-purple flex items-center justify-center mx-auto shadow-lg shadow-brand-cyan/20">
            <Zap className="w-6 h-6 text-dark-900 fill-dark-900" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Register Organization</h2>
          <p className="text-xs text-gray-400 font-mono">Create an account to initialize multi-agent scouts</p>
        </div>

        {error && (
          <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded text-xs text-rose-400 font-mono">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exec@beyondmotors.com"
                className="w-full bg-dark-900 border border-gray-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-dark-900 border border-gray-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-gradient-to-r from-brand-cyan to-brand-blue text-dark-900 font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            {loading ? 'Creating Account...' : 'Continue to Onboarding'}
          </button>
        </form>

        <div className="text-center text-xs text-gray-400 font-mono pt-2">
          Already registered?{' '}
          <Link to="/login" className="text-brand-cyan hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
