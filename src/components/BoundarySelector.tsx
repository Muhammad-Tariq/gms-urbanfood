import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, RotateCcw } from 'lucide-react';
import {
  loadBoundaries,
  uniqueValues,
  type BoundaryData,
  type BoundaryFeature,
} from '../data/boundaries';

const HOME: [number, number] = [30.3753, 69.3451];
const HOME_ZOOM = 6;

function zoomTo(features: BoundaryFeature[], map: L.Map) {
  if (features.length === 0) return;
  const bounds = L.geoJSON({
    type: 'FeatureCollection',
    features: features as any,
  }).getBounds();
  if (bounds.isValid()) map.flyToBounds(bounds.pad(0.15));
}

export const BoundarySelector = () => {
  const map = useMap();
  const [data, setData] = React.useState<BoundaryData | null>(null);
  const [province, setProvince] = React.useState('');
  const [districtName, setDistrictName] = React.useState('');
  const [tehsilName, setTehsilName] = React.useState('');

  React.useEffect(() => {
    let alive = true;
    loadBoundaries()
      .then((d) => {
        if (alive) setData(d);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  const provinces = React.useMemo(
    () => (data ? uniqueValues(data.provincial, 'PROVINCE') : []),
    [data]
  );
  const districts = React.useMemo(
    () =>
      data && province
        ? uniqueValues(data.district, 'DISTRICT', (f) => f.properties.PROVINCE === province)
        : [],
    [data, province]
  );
  const tehsils = React.useMemo(
    () =>
      data && districtName
        ? uniqueValues(
            data.tehsil,
            'TEHSIL',
            (f) =>
              f.properties.DISTRICT === districtName &&
              (!province || f.properties.PROVINCE === province)
          )
        : [],
    [data, districtName, province]
  );

  const onProvince = (v: string) => {
    setProvince(v);
    setDistrictName('');
    setTehsilName('');
    if (v && data)
      zoomTo(
        data.provincial.features.filter((f) => f.properties.PROVINCE === v),
        map
      );
  };

  const onDistrict = (v: string) => {
    setDistrictName(v);
    setTehsilName('');
    if (v && data)
      zoomTo(
        data.district.features.filter(
          (f) => f.properties.DISTRICT === v && (!province || f.properties.PROVINCE === province)
        ),
        map
      );
  };

  const onTehsil = (v: string) => {
    setTehsilName(v);
    if (v && data)
      zoomTo(
        data.tehsil.features.filter(
          (f) =>
            f.properties.TEHSIL === v &&
            f.properties.DISTRICT === districtName &&
            (!province || f.properties.PROVINCE === province)
        ),
        map
      );
  };

  const reset = () => {
    setProvince('');
    setDistrictName('');
    setTehsilName('');
    map.flyTo(HOME, HOME_ZOOM);
  };

  const selectCls =
    'w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm disabled:opacity-50';

  return (
    <div className="absolute left-4 bottom-4 z-[1000] bg-white rounded-lg shadow-lg p-4 space-y-3 w-64">
      <h3 className="font-semibold flex items-center gap-2 text-sm">
        <MapPin className="h-5 w-5 text-green-600" />
        Administrative Boundaries
      </h3>

      <div className="space-y-2">
        <select
          className={selectCls}
          value={province}
          disabled={!data}
          onChange={(e) => onProvince(e.target.value)}
        >
          <option value="">{data ? 'Select Province' : 'Loading boundaries…'}</option>
          {provinces.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          className={selectCls}
          value={districtName}
          disabled={!province}
          onChange={(e) => onDistrict(e.target.value)}
        >
          <option value="">Select District</option>
          {districts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select
          className={selectCls}
          value={tehsilName}
          disabled={!districtName}
          onChange={(e) => onTehsil(e.target.value)}
        >
          <option value="">Select Tehsil</option>
          {tehsils.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <button
          onClick={reset}
          className="w-full flex items-center justify-center gap-2 p-2 text-sm text-green-700 hover:bg-green-50 rounded-lg transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          Reset view
        </button>
      </div>
    </div>
  );
};
