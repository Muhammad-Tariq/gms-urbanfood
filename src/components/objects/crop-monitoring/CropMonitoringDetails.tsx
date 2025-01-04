import React from 'react';
import { HeroSection } from './HeroSection';
import { FeatureGrid } from './FeatureGrid';
import { AboutSection } from './AboutSection';
import { TechnologySection } from './TechnologySection';
import { ArrowLeft } from 'lucide-react';

interface CropMonitoringDetailsProps {
  onBack: () => void;
}

export const CropMonitoringDetails: React.FC<CropMonitoringDetailsProps> = ({ onBack }) => {
  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto p-8">
        <button
          onClick={onBack}
          className="flex items-center text-green-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Objectives
        </button>
        
        <HeroSection />
        <FeatureGrid />
        <AboutSection />
        <TechnologySection />
      </div>
    </div>
  );
};