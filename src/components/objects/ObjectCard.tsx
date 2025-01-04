import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ObjectCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export const ObjectCard: React.FC<ObjectCardProps> = ({ title, description, image, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-green-600 font-medium">
          <span>Learn more</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </div>
      </div>
    </div>
  );
};