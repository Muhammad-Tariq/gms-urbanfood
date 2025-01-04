import React, { useState } from 'react';
import { Search, Map, Package, MessageSquare } from 'lucide-react';

interface SidebarProps {
  onPageChange: (page: 'map' | 'objects' | 'contact') => void;
  currentPage: 'map' | 'objects' | 'contact';
}

export const Sidebar: React.FC<SidebarProps> = ({ onPageChange, currentPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-80 bg-gray-500 h-full shadow-lg p-6 border-4 border-green-500">
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2 h-10 w-10 text-gray-400" />
        </div>
      </div>

      <div className="space-y-6">
        <button 
          className={`flex items-center space-x-3 px-6 py-4 rounded-lg text-lg font-medium hover:text-blue-600 transition-colors w-full ${
            currentPage === 'map' 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onPageChange('map')}
        >
          <Map className="h-14 w-14" />
          <span className="text-2xl hover:text-blue-600 font-bold">Boundary Seed Module</span>
        </button>

        <button 
          className={`flex items-center space-x-3 px-6 py-4 rounded-lg text-lg font-medium hover:text-blue-600 transition-colors w-full ${
            currentPage === 'objects' 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onPageChange('objects')}
        >
          <Package className="h-10 w-10" />
          <span className="text-2xl hover:text-blue-600 font-bold">Objectives</span>
        </button>

        <button 
          className={`flex items-center space-x-3 px-6 py-4 rounded-lg text-lg font-medium hover:text-blue-600 transition-colors w-full ${
            currentPage === 'contact' 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onPageChange('contact')}
        >
          <MessageSquare className="h-10 w-10" />
          <span className="text-2xl hover:text-blue-600 font-bold">Contact Us</span>
        </button>
      </div>
    </div>
  );
};