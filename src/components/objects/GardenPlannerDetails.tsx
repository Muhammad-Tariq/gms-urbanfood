import React from 'react';
import { ArrowLeft, Leaf, Sun, Cloud, Droplets } from 'lucide-react';

interface GardenPlannerDetailsProps {
  onBack: () => void;
}

export const GardenPlannerDetails: React.FC<GardenPlannerDetailsProps> = ({ onBack }) => {
  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto p-8">
        <button
          onClick={onBack}
          className="flex items-center text-green-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Objectives
        </button>

        <div className="relative rounded-2xl overflow-hidden mb-8 h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2000"
            alt="Urban Garden Planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">Urban Garden Planner</h1>
              <p className="text-xl opacity-90">Transform your space into a thriving urban garden</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Leaf className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Layout Design</h3>
            <p className="text-gray-600">Optimize your garden space with AI-powered layout suggestions based on your available area.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Sun className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sunlight Analysis</h3>
            <p className="text-gray-600">Track sun patterns to determine the best spots for different plants throughout the seasons.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Droplets className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Water Management</h3>
            <p className="text-gray-600">Efficient irrigation planning and water conservation recommendations.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">About Urban Garden Planner</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Urban Garden Planner is an advanced tool designed to help city dwellers maximize their growing space, whether it's a small balcony, rooftop, or backyard. Our intelligent system considers various factors such as sunlight exposure, climate conditions, and space constraints to provide optimized garden layouts and plant recommendations.
            </p>
            <p className="text-gray-700 mb-4">
              Using cutting-edge technology, the planner analyzes your specific location and conditions to suggest the most suitable plants and optimal growing arrangements. It takes into account seasonal changes, local climate patterns, and your gardening goals to create a personalized plan that ensures success in your urban gardening journey.
            </p>
            <p className="text-gray-700">
              Whether you're growing vegetables, herbs, or ornamental plants, Urban Garden Planner helps you make the most of your space while considering factors like companion planting, succession planting, and vertical gardening opportunities.
            </p>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex items-start">
              <Cloud className="h-6 w-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Climate Adaptation</h3>
                <p className="text-gray-600">Recommendations based on local weather patterns and microclimate conditions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Leaf className="h-6 w-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Plant Database</h3>
                <p className="text-gray-600">Extensive library of plants suitable for urban environments.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};