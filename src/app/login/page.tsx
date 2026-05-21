'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const DEMO_CREDENTIALS = [
  { role: 'Admin', email: 'admin@dpsinternational.com', password: 'admin123' },
  { role: 'Teacher', email: 'teacher@dpsinternational.com', password: 'admin123' },
  { role: 'Student', email: 'student@dpsinternational.com', password: 'admin123' },
];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Attempting login with:', email);

      const result = await signIn('credentials', {
        email: email.trim(),
        password: password,
        redirect: false,
      });

      console.log('Sign in result:', result);

      if (result?.error) {
        setError(result.error || 'Invalid email or password');
      } else if (result?.ok) {
        console.log('Login successful, redirecting...');
        router.push('/dashboard');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fillDemo = (creds: typeof DEMO_CREDENTIALS[0]) => {
    setEmail(creds.email);
    setPassword(creds.password);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <span className="text-2xl font-bold text-white">📚</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">DPS International</h1>
          <p className="text-slate-600 mb-1">School Management System</p>
          <p className="text-sm text-slate-500">Kilpauk, Chennai</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Sign In</h2>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="name@dpsinternational.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-semibold py-2 rounded-lg transition duration-200 mt-6"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="font-semibold text-slate-900 mb-4 text-sm">Demo Credentials</h3>
          <div className="space-y-3">
            {DEMO_CREDENTIALS.map((cred) => (
              <div
                key={cred.role}
                className="p-3 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition cursor-pointer"
                onClick={() => fillDemo(cred)}
              >
                <div className="text-xs font-semibold text-blue-600 mb-1">{cred.role}</div>
                <div className="text-xs text-slate-600">{cred.email}</div>
                <div className="text-xs text-slate-500 mt-1">Password: {cred.password}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 mt-4">
            Click any credential to autofill and login
          </p>
        </div>

        <div className="text-center mt-6 text-sm text-slate-600">
          <p>📞 9884177607</p>
          <p>✉️ sanjay.nishad@dpsinternational.com</p>
        </div>
      </div>
    </div>
  );
}