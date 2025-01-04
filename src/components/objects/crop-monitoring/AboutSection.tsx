import React from 'react';

export const AboutSection: React.FC = () => (
  <div className="bg-white rounded-xl shadow-md p-8 mb-12">
    <h2 className="text-2xl font-bold mb-6">About Crop Monitoring System</h2>
    <div className="prose max-w-none">
      <p className="text-gray-700 mb-4">
        Our advanced Crop Monitoring System combines IoT sensors, data analytics, and machine learning to provide comprehensive insights into your crops' health and growing conditions. This state-of-the-art system enables real-time monitoring and early detection of potential issues, helping you optimize crop yield and resource usage.
      </p>
      <p className="text-gray-700 mb-4">
        The system utilizes a network of smart sensors strategically placed throughout your growing area to collect vital data on soil moisture, temperature, humidity, light levels, and plant health indicators. This data is analyzed in real-time to provide actionable insights and automated alerts.
      </p>
      <p className="text-gray-700">
        With our mobile-friendly interface, you can access detailed reports and live monitoring data from anywhere, ensuring you stay connected to your crops' needs 24/7. The system also provides predictive analytics to help you make informed decisions about irrigation, fertilization, and pest control.
      </p>
    </div>
  </div>
);