import React from 'react';
import { MapPin } from 'lucide-react';

export const BoundarySelector = () => {
  return (
    <div className="absolute left-4 bottom-4 bg-white rounded-lg shadow-lg p-4 space-y-3">
      <h3 className="font-semibold flex items-center gap-2">
        <MapPin className="h-5 w-5 text-green-600" />
        Administrative Boundaries
      </h3>
      
      <div className="space-y-2">
        <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="">Select Province</option>
          <option value="punjab">Punjab</option>
          <option value="sindh">Sindh</option>
          <option value="kpk">Khyber Pakhtunkhwa</option>
          <option value="balochistan">Balochistan</option>
        </select>

        <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="">Select District</option>
        </select>

        <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="">Select Tehsil</option>
        </select>
      </div>
    </div>
  );
};
