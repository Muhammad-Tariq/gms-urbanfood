import React from 'react';
import { ZoomIn, ZoomOut, Ruler } from 'lucide-react';

export const MapControls = () => {
  return (
    <div className="absolute right-4 top-4 bg-white rounded-lg shadow-lg p-2 space-y-2">
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <ZoomIn className="h-5 w-5 text-gray-700" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <ZoomOut className="h-5 w-5 text-gray-700" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <Ruler className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
};