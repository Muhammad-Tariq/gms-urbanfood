import React from 'react';
import { LayersIcon } from 'lucide-react';

type LayerOption = {
  id: string;
  name: string;
  active: boolean;
};

export const LayerControl = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [layers, setLayers] = React.useState<LayerOption[]>([
    { id: 'satellite', name: 'Satellite', active: false },
    { id: 'terrain', name: 'Terrain', active: false },
    { id: 'streets', name: 'Streets', active: true }
  ]);

  const toggleLayer = (layerId: string) => {
    setLayers(layers.map(layer => 
      layer.id === layerId ? { ...layer, active: !layer.active } : layer
    ));
  };

  return (
    <div className="absolute right-4 bottom-4 bg-white rounded-lg shadow-lg">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
      >
        <LayersIcon className="h-5 w-5 text-gray-700" />
        <span className="text-sm font-medium">Layers</span>
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg p-2 min-w-[200px]">
          {layers.map(layer => (
            <label key={layer.id} className="flex items-center p-2 hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={layer.active}
                onChange={() => toggleLayer(layer.id)}
                className="mr-2"
              />
              <span className="text-sm">{layer.name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};