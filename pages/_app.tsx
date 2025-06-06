import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useAuth } from '../utils/useAuth'
import Login from '../components/Login'

export default function App({ Component, pageProps }: AppProps) {
  const { isAuthenticated, isLoading, login, logout } = useAuth();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgb(36,36,36)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#F7AB0A]/20 border-t-[#F7AB0A] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Loading Breme AI Platform...</p>
        </div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={login} />;
  }

  // Show main app if authenticated
  return <Component {...pageProps} onLogout={logout} />;
}
