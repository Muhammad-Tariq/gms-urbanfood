import React from 'react';
import { Calendar, BarChart, Cloud, Clock } from 'lucide-react';

export const FeatureGrid: React.FC = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    <FeatureCard
      icon={<Calendar className="h-8 w-8 text-amber-600" />}
      title="Harvest Planning"
      description="Optimal harvest scheduling based on crop maturity and conditions"
    />
    <FeatureCard
      icon={<BarChart className="h-8 w-8 text-amber-600" />}
      title="Yield Prediction"
      description="Accurate crop yield forecasting using historical data"
    />
    <FeatureCard
      icon={<Cloud className="h-8 w-8 text-amber-600" />}
      title="Weather Integration"
      description="Weather-aware predictions for harvest timing optimization"
    />
    <FeatureCard
      icon={<Clock className="h-8 w-8 text-amber-600" />}
      title="Real-time Updates"
      description="Dynamic predictions that adapt to changing conditions"
    />
  </div>
);

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);