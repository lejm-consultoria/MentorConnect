import React from 'react';
import { MoonIcon, SunIcon, LayoutDashboardIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
export function Header() {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  return <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                MentorConnect
              </span>
            </button>

            <nav className="hidden md:flex space-x-4">
              <button onClick={() => navigate('/')} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'}`}>
                Descobrir Profissionais
              </button>
              <button onClick={() => navigate('/reviews')} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname.startsWith('/review') ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'}`}>
                <span className="flex items-center space-x-1">
                  <LayoutDashboardIcon className="w-4 h-4" />
                  <span>Minhas Revisões</span>
                </span>
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme">
              {theme === 'light' ? <MoonIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" /> : <SunIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
            </button>

            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <span className="text-white font-semibold text-sm">JS</span>
            </div>
          </div>
        </div>
      </div>
    </header>;
}