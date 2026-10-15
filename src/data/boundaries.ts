// Typed access to the Pakistan administrative boundary datasets
// (converted from Tariq's shapefiles: National/Provincial/District/Tehsil).
// The GeoJSON files live in public/data and are fetched lazily so the
// initial JS bundle stays small. All four are loaded once and cached.

export interface BoundaryFeature {
  type: 'Feature';
  properties: Record<string, string | number | null>;
  geometry: {
    type: 'Polygon' | 'MultiPolygon';
    coordinates: number[][][] | number[][][][];
  };
}

export interface BoundaryCollection {
  type: 'FeatureCollection';
  features: BoundaryFeature[];
}

export interface BoundaryData {
  national: BoundaryCollection;
  provincial: BoundaryCollection;
  district: BoundaryCollection;
  tehsil: BoundaryCollection;
}

let cache: Promise<BoundaryData> | null = null;

async function fetchOne(name: 'national' | 'provincial' | 'district' | 'tehsil') {
  const res = await fetch(`${import.meta.env.BASE_URL}data/${name}.json`);
  if (!res.ok) throw new Error(`Failed to load boundary data: ${name}`);
  return (await res.json()) as BoundaryCollection;
}

/** Loads all four boundary datasets (cached after the first call). */
export function loadBoundaries(): Promise<BoundaryData> {
  if (!cache) {
    cache = Promise.all([
      fetchOne('national'),
      fetchOne('provincial'),
      fetchOne('district'),
      fetchOne('tehsil'),
    ]).then(([national, provincial, district, tehsil]) => ({
      national,
      provincial,
      district,
      tehsil,
    }));
  }
  return cache;
}

/** Sorted unique values of a property, optionally filtered. */
export function uniqueValues(
  fc: BoundaryCollection,
  key: string,
  filter?: (f: BoundaryFeature) => boolean
): string[] {
  const set = new Set<string>();
  for (const f of fc.features) {
    if (filter && !filter(f)) continue;
    const v = f.properties[key];
    if (v !== null && v !== undefined && v !== '') set.add(String(v));
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}

/** Minimal HTML escaping for popup content. */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
