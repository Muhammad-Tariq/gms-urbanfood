import React from 'react';
import { Home, Bell, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 shadow-lg border-4 border-gray-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center hover:text-blue-600 space-x-1">
          <Home className="h-10 w-10" />
          <span className="text-4xl hover:text-blue-600 font-bold">
            Urban Food Garden
          </span>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex space-x-6">
            <img
              src="/images/logo.png"
              alt="Leaf"
              className="h-10 w-10 hover:text-blue-600 cursor-pointer transition-colors"
            />
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="h-10 w-10 hover:text-blue-600 cursor-pointer transition-colors"
            />
            <img
              src="/images/logo2.png"
              alt="Logo"
              className="h-10 w-10 hover:text-blue-600 cursor-pointer transition-colors"
            />
            <img
              src="/images/logo3.png"
              alt="Logo"
              className="h-10 w-10 hover:text-blue-600 cursor-pointer transition-colors"
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative">
              <Bell className="h-10 w-10 hover:text-blue-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 text-sm flex items-center justify-center">
                3
              </span>
            </button>
            <button className="hover:text-blue-600 transition-colors">
              <User className="h-12 w-12" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
