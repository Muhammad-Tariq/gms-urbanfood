import React from 'react';
import { MapContainer } from 'react-leaflet';
import { MapLayers } from './map/MapLayers';
import { MapControls } from './MapControls';
import { LayerControl } from './map/LayerControl';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  return (
    <div className="relative flex-1 h-full">
      <MapContainer
        center={[30.3753, 69.3451]} // Pakistan center coordinates
        zoom={6}
        className="h-full w-full"
      >
        <MapLayers />
        <MapControls />
        <LayerControl />
      </MapContainer>
    </div>
  );
};