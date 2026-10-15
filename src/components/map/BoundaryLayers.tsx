import React from 'react';
import { GeoJSON } from 'react-leaflet';
import type { Layer, PathOptions } from 'leaflet';
import {
  loadBoundaries,
  escapeHtml,
  type BoundaryFeature,
  type BoundaryCollection,
  type BoundaryData,
} from '../../data/boundaries';

export type OverlayId = 'mask' | 'national' | 'provinces' | 'districts' | 'tehsils';

/* ------------------------------------------------------------------ */
/* Pakistan "clip" mask: a world-sized polygon with Pakistan cut out,  */
/* so everything outside the national boundary is dimmed away.          */
/* ------------------------------------------------------------------ */
function buildMask(national: BoundaryCollection): BoundaryCollection {
  const outer = [
    [-180, -90],
    [180, -90],
    [180, 90],
    [-180, 90],
    [-180, -90],
  ];
  const holes: number[][][] = [];
  for (const f of national.features) {
    if (f.geometry.type === 'Polygon') {
      holes.push(...(f.geometry.coordinates as number[][][]));
    } else {
      for (const poly of f.geometry.coordinates as number[][][][]) {
        holes.push(...poly);
      }
    }
  }
  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: { type: 'Polygon', coordinates: [outer, ...holes] },
      },
    ],
  };
}

const maskStyle: PathOptions = {
  fillColor: '#475569',
  fillOpacity: 0.55,
  stroke: false,
  interactive: false,
};

const nationalStyle: PathOptions = {
  color: '#14532d',
  weight: 3,
  opacity: 1,
  fill: false,
  interactive: false,
};

/* ------------------------------------------------------------------ */
/* Provinces                                                           */
/* ------------------------------------------------------------------ */
const PROVINCE_COLORS = [
  '#16a34a',
  '#0ea5e9',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
  '#ec4899',
  '#14b8a6',
  '#84cc16',
  '#f97316',
];

function provinceColor(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return PROVINCE_COLORS[h % PROVINCE_COLORS.length];
}

const provinceStyle = (feature?: BoundaryFeature): PathOptions => ({
  fillColor: provinceColor(String(feature?.properties.PROVINCE ?? '')),
  fillOpacity: 0.3,
  color: '#ffffff',
  weight: 1.5,
});

function onProvinceFeature(feature: BoundaryFeature, layer: Layer) {
  const name = String(feature.properties.PROVINCE ?? '');
  const area = feature.properties.Area_Sq_Km;
  layer.bindTooltip(escapeHtml(name), {
    permanent: true,
    direction: 'center',
    className: 'province-label',
  });
  layer.bindPopup(
    `<b>${escapeHtml(name)}</b>` +
      (typeof area === 'number'
        ? `<br/>Area: ${Math.round(area).toLocaleString()} km&sup2;`
        : '')
  );
}

/* ------------------------------------------------------------------ */
/* Districts                                                           */
/* ------------------------------------------------------------------ */
const districtStyle: PathOptions = {
  color: '#166534',
  weight: 0.8,
  fillColor: '#22c55e',
  fillOpacity: 0.05,
};

function onDistrictFeature(feature: BoundaryFeature, layer: Layer) {
  const d = String(feature.properties.DISTRICT ?? '');
  const p = String(feature.properties.PROVINCE ?? '');
  const pop = feature.properties.Population;
  layer.bindTooltip(`${escapeHtml(d)}`, { sticky: true, className: 'pk-tooltip' });
  layer.bindPopup(
    `<b>${escapeHtml(d)}</b><br/>` +
      `Province: ${escapeHtml(p)}` +
      (typeof pop === 'number' && pop > 0
        ? `<br/>Population: ${Math.round(pop).toLocaleString()}`
        : '')
  );
}

/* ------------------------------------------------------------------ */
/* Tehsils                                                             */
/* ------------------------------------------------------------------ */
const tehsilStyle: PathOptions = {
  color: '#3f6212',
  weight: 0.5,
  fillColor: '#a3e635',
  fillOpacity: 0.04,
};

function onTehsilFeature(feature: BoundaryFeature, layer: Layer) {
  const t = String(feature.properties.TEHSIL ?? '');
  const d = String(feature.properties.DISTRICT ?? '');
  const p = String(feature.properties.PROVINCE ?? '');
  const area = feature.properties.Area_Sq_Km;
  layer.bindTooltip(`${escapeHtml(t)}`, { sticky: true, className: 'pk-tooltip' });
  layer.bindPopup(
    `<b>${escapeHtml(t)}</b><br/>` +
      `District: ${escapeHtml(d)}<br/>` +
      `Province: ${escapeHtml(p)}` +
      (typeof area === 'number'
        ? `<br/>Area: ${Math.round(area).toLocaleString()} km&sup2;`
        : '')
  );
}

/* ------------------------------------------------------------------ */
export const BoundaryLayers = ({
  visible,
}: {
  visible: Record<OverlayId, boolean>;
}) => {
  const [data, setData] = React.useState<BoundaryData | null>(null);

  React.useEffect(() => {
    let alive = true;
    loadBoundaries()
      .then((d) => {
        if (alive) setData(d);
      })
      .catch(() => {
        /* boundary layers simply stay hidden if the fetch fails */
      });
    return () => {
      alive = false;
    };
  }, []);

  const mask = React.useMemo(() => (data ? buildMask(data.national) : null), [data]);

  if (!data || !mask) return null;

  return (
    <>
      {visible.mask && <GeoJSON data={mask as any} style={maskStyle} />}
      {visible.tehsils && (
        <GeoJSON data={data.tehsil as any} style={tehsilStyle} onEachFeature={onTehsilFeature} />
      )}
      {visible.districts && (
        <GeoJSON
          data={data.district as any}
          style={districtStyle}
          onEachFeature={onDistrictFeature}
        />
      )}
      {visible.provinces && (
        <GeoJSON
          data={data.provincial as any}
          style={provinceStyle}
          onEachFeature={onProvinceFeature}
        />
      )}
      {visible.national && <GeoJSON data={data.national as any} style={nationalStyle} />}
    </>
  );
};
