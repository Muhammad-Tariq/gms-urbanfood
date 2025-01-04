import React, { useState } from 'react';
import { ObjectCard } from './ObjectCard';
import { GardenPlannerDetails } from './GardenPlannerDetails';
import { CropMonitoringDetails } from './crop-monitoring/CropMonitoringDetails';
import { HarvestPredictorDetails } from './harvest-predictor/HarvestPredictorDetails';

export const ObjectsPage: React.FC = () => {
  const [selectedObject, setSelectedObject] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setSelectedObject(title);
  };

  const objects = [
    {
      title: "Urban Garden Planner",
      description: "Advanced tool for planning and optimizing urban garden layouts based on available space and sunlight conditions.",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Crop Monitoring System",
      description: "Real-time monitoring system for tracking plant health, growth patterns, and environmental conditions.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Harvest Predictor",
      description: "AI-powered tool that predicts optimal harvest times based on plant variety and growing conditions.",
      image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1000",
    }
  ];

  if (selectedObject === "Urban Garden Planner") {
    return <GardenPlannerDetails onBack={() => setSelectedObject(null)} />;
  }

  if (selectedObject === "Crop Monitoring System") {
    return <CropMonitoringDetails onBack={() => setSelectedObject(null)} />;
  }

  if (selectedObject === "Harvest Predictor") {
    return <HarvestPredictorDetails onBack={() => setSelectedObject(null)} />;
  }

  return (
    <div className="flex-1 p-8 bg-gray-50 overflow-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Urban Garden Objectives</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {objects.map((object, index) => (
          <ObjectCard
            key={index}
            {...object}
            onClick={() => handleCardClick(object.title)}
          />
        ))}
      </div>
    </div>
  );
};