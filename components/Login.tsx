import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  onLogin: (username: string, password: string) => boolean;
}

const Login = ({ onLogin }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Add a small delay for better UX
    setTimeout(() => {
      const success = onLogin(username, password);
      if (!success) {
        setError('Invalid credentials. Please contact Breme AI for access.');
        setPassword('');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-[80vh] md:min-h-screen bg-[rgb(36,36,36)] flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className='w-full absolute top-[20%] bg-[#F7AB0A]/5 left-0 h-[500px] skew-y-12' />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-48 h-24 mx-auto mb-6"
          >
            <Image 
              src='/logos/icon.png'
              alt='Breme AI Logo'
              fill
              className='object-contain'
              priority
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-300 text-lg"
          >
            Investor Access Portal
          </motion.p>
        </div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-[#292929] rounded-2xl p-8 shadow-2xl border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Private Access Required
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F7AB0A] focus:ring-2 focus:ring-[#F7AB0A]/20 transition-all duration-200"
                placeholder="Enter username"
                required
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F7AB0A] focus:ring-2 focus:ring-[#F7AB0A]/20 transition-all duration-200"
                placeholder="Enter password"
                required
                disabled={isLoading}
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#F7AB0A] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#F7AB0A]/90 focus:outline-none focus:ring-2 focus:ring-[#F7AB0A]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2"></div>
                  Authenticating...
                </div>
              ) : (
                'Access Platform'
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-center text-sm text-gray-400">
              For investor access, please contact{' '}
              <a href="mailto:info@bremenow.com" className="text-[#F7AB0A] hover:underline">
                info@bremenow.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            © 2024 Breme AI. Confidential and Proprietary.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login; 