import React, { useState } from 'react';
import { Eye, EyeOff, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LoginProps {
  onSuccess?: () => void;
}

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error } = await signIn(password);
      
      if (error) {
        setError(error.message);
      } else {
        onSuccess?.();
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-battery-background flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 rounded-lg overflow-hidden mb-4">
            <img 
              src="/logo.jpg" 
              alt="BATTERY DELIVERY CDO Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-poppins font-semibold text-battery-text">
            Admin Login
          </h1>
          <p className="text-battery-text-light mt-2">
            Enter the admin password to access the dashboard
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-battery-text mb-2">
              Admin Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-battery-text-light" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                placeholder="Enter admin password"
                required
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                disabled={loading}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-battery-text-light hover:text-battery-text" />
                ) : (
                  <Eye className="h-5 w-5 text-battery-text-light hover:text-battery-text" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertCircle className="h-5 w-5" />
              <span className="text-sm">{error}</span>
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-battery-primary text-white py-3 rounded-lg hover:bg-battery-primary-dark transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Signing in...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-battery-text-light">
            Need help? Contact your system administrator
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
