import React from 'react';

export const AboutSection: React.FC = () => (
  <div className="bg-white rounded-xl shadow-md p-8 mb-12">
    <h2 className="text-2xl font-bold mb-6">About Harvest Predictor</h2>
    <div className="prose max-w-none">
      <p className="text-gray-700 mb-4">
        Harvest Predictor is an innovative AI-powered tool that takes the guesswork out of harvest timing. By analyzing multiple data points including weather patterns, soil conditions, plant variety characteristics, and historical harvest data, our system provides highly accurate predictions for optimal harvest times.
      </p>
      <p className="text-gray-700 mb-4">
        The system continuously learns from your garden's specific conditions and previous harvests to improve its predictions over time. This machine learning approach ensures that recommendations become increasingly accurate and tailored to your unique growing environment.
      </p>
      <p className="text-gray-700">
        Whether you're growing vegetables, fruits, or herbs, Harvest Predictor helps you maximize yield quality by ensuring crops are harvested at peak ripeness. The system also helps prevent waste by alerting you to upcoming harvest windows and potential weather impacts.
      </p>
    </div>
  </div>
);