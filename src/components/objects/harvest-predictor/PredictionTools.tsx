import React from 'react';
import { Brain, Gauge, LineChart, Bell } from 'lucide-react';

export const PredictionTools: React.FC = () => (
  <div className="bg-green-50 rounded-xl p-8">
    <h2 className="text-2xl font-bold mb-6">Prediction Tools</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <Tool
        icon={<Brain />}
        title="AI Analysis"
        description="Advanced machine learning algorithms for precise harvest timing"
      />
      <Tool
        icon={<Gauge />}
        title="Maturity Tracking"
        description="Continuous monitoring of crop development stages"
      />
      <Tool
        icon={<LineChart />}
        title="Trend Analysis"
        description="Historical data analysis for improved accuracy"
      />
      <Tool
        icon={<Bell />}
        title="Smart Notifications"
        description="Timely alerts for upcoming harvest windows"
      />
    </div>
  </div>
);

const Tool: React.FC<{
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