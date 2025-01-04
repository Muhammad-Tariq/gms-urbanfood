import React from 'react';

export const HeroSection: React.FC = () => (
  <div className="relative rounded-2xl overflow-hidden mb-8 h-[400px]">
    <img
      src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=2000"
      alt="Crop Monitoring System"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
      <div className="p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Crop Monitoring System</h1>
        <p className="text-xl opacity-90">Real-time insights for optimal crop management</p>
      </div>
    </div>
  </div>
);