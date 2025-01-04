import React from 'react';
import { Cpu, Database, Wifi, AlertCircle } from 'lucide-react';

export const TechnologySection: React.FC = () => (
  <div className="bg-blue-50 rounded-xl p-8">
    <h2 className="text-2xl font-bold mb-6">Technology Features</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <TechFeature
        icon={<Cpu />}
        title="Smart Sensors"
        description="IoT-enabled sensors for precise environmental monitoring"
      />
      <TechFeature
        icon={<Database />}
        title="Data Analytics"
        description="Advanced analytics for trend analysis and predictions"
      />
      <TechFeature
        icon={<Wifi />}
        title="Real-time Connectivity"
        description="24/7 wireless monitoring and instant notifications"
      />
      <TechFeature
        icon={<AlertCircle />}
        title="Early Warning System"
        description="Automated alerts for potential issues and maintenance needs"
      />
    </div>
  </div>
);

const TechFeature: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="text-blue-600 mr-3 mt-1">{icon}</div>
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);