// UFG location pins: geocoded from the Google Map pin links in UFGLocations.csv
// (DMS values converted, the rest resolved from the short links).
// Served from public/data/pins.json and fetched lazily.

export interface UfgPin {
  name: string;
  mobile: string;
  address: string;
  lat: number;
  lng: number;
  pin: string;
  images: string[];
  coordSource: string;
}

let cache: Promise<UfgPin[]> | null = null;

/** Loads the pin dataset (cached after the first call). */
export function loadPins(): Promise<UfgPin[]> {
  if (!cache) {
    cache = fetch(`${import.meta.env.BASE_URL}data/pins.json`).then((res) => {
      if (!res.ok) throw new Error('Failed to load pin data');
      return res.json() as Promise<UfgPin[]>;
    });
  }
  return cache;
}

/** Minimal HTML escaping for popup content. */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
