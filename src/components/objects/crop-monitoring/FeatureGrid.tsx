import React from 'react';
import { Sprout, Thermometer, Activity, Droplets } from 'lucide-react';

export const FeatureGrid: React.FC = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    <FeatureCard
      icon={<Sprout className="h-8 w-8 text-blue-600" />}
      title="Growth Tracking"
      description="Monitor plant development stages and growth rates in real-time"
    />
    <FeatureCard
      icon={<Thermometer className="h-8 w-8 text-blue-600" />}
      title="Environmental Monitoring"
      description="Track temperature, humidity, and soil conditions"
    />
    <FeatureCard
      icon={<Activity className="h-8 w-8 text-blue-600" />}
      title="Health Analysis"
      description="Early detection of plant stress and disease symptoms"
    />
    <FeatureCard
      icon={<Droplets className="h-8 w-8 text-blue-600" />}
      title="Irrigation Control"
      description="Smart water management based on real-time soil moisture data"
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