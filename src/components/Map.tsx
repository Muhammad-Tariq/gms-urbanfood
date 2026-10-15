import React from 'react';
import { MapContainer } from 'react-leaflet';
import { MapLayers } from './map/MapLayers';
import { MapControls } from './MapControls';
import { LayerControl } from './map/LayerControl';
import { BoundaryLayers, type OverlayId } from './map/BoundaryLayers';
import { BoundarySelector } from './BoundarySelector';
import 'leaflet/dist/leaflet.css';

// Pakistan extent (padded) — the map cannot be panned outside this.
const PAK_BOUNDS: [[number, number], [number, number]] = [
  [22.0, 59.0],
  [38.5, 81.0],
];

export const Map = () => {
  const [visible, setVisible] = React.useState<Record<OverlayId, boolean>>({
    mask: true,
    national: true,
    provinces: true,
    districts: true,
    tehsils: true,
  });

  const toggle = (id: OverlayId) =>
    setVisible((v) => ({ ...v, [id]: !v[id] }));

  return (
    <div className="relative flex-1 h-full">
      <MapContainer
        center={[30.3753, 69.3451]} // Pakistan center coordinates
        zoom={6}
        minZoom={5}
        maxZoom={18}
        maxBounds={PAK_BOUNDS}
        maxBoundsViscosity={1.0}
        className="h-full w-full"
      >
        <MapLayers />
        <BoundaryLayers visible={visible} />
        <BoundarySelector />
        <MapControls />
        <LayerControl visible={visible} onToggle={toggle} />
      </MapContainer>
    </div>
  );
};
