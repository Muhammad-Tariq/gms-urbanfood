import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { HeroSection } from './HeroSection';
import { FeatureGrid } from './FeatureGrid';
import { AboutSection } from './AboutSection';
import { PredictionTools } from './PredictionTools';

interface HarvestPredictorDetailsProps {
  onBack: () => void;
}

export const HarvestPredictorDetails: React.FC<HarvestPredictorDetailsProps> = ({ onBack }) => {
  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-amber-50 to-white">
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
        <PredictionTools />
      </div>
    </div>
  );
};