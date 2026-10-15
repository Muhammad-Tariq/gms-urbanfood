import React from 'react';
import { LayersIcon } from 'lucide-react';
import type { OverlayId } from './BoundaryLayers';

const OVERLAY_META: { id: OverlayId; name: string }[] = [
  { id: 'national', name: 'National Boundary' },
  { id: 'provinces', name: 'Provinces' },
  { id: 'districts', name: 'Districts' },
  { id: 'tehsils', name: 'Tehsils' },
  { id: 'mask', name: 'Dim outside Pakistan' },
];

export const LayerControl = ({
  visible,
  onToggle,
  pinsVisible,
  onTogglePins,
}: {
  visible: Record<OverlayId, boolean>;
  onToggle: (id: OverlayId) => void;
  pinsVisible: boolean;
  onTogglePins: () => void;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="absolute right-4 bottom-4 z-[1000] bg-white rounded-lg shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
      >
        <LayersIcon className="h-5 w-5 text-gray-700" />
        <span className="text-sm font-medium">Layers</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg p-2 min-w-[200px]">
          <div className="px-2 pt-1 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Boundaries
          </div>
          {OVERLAY_META.map((layer) => (
            <label
              key={layer.id}
              className="flex items-center p-2 hover:bg-gray-50 cursor-pointer rounded"
            >
              <input
                type="checkbox"
                checked={visible[layer.id]}
                onChange={() => onToggle(layer.id)}
                className="mr-2 accent-green-600"
              />
              <span className="text-sm">{layer.name}</span>
            </label>
          ))}
          <div className="px-2 pt-2 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Locations
          </div>
          <label className="flex items-center p-2 hover:bg-gray-50 cursor-pointer rounded">
            <input
              type="checkbox"
              checked={pinsVisible}
              onChange={onTogglePins}
              className="mr-2 accent-green-600"
            />
            <span className="text-sm">UFG Locations (42)</span>
          </label>
          <div className="px-2 pt-2 text-xs text-gray-400">
            Basemaps: use the layers icon at top-right
          </div>
        </div>
      )}
    </div>
  );
};
