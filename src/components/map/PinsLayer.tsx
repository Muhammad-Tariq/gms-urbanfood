import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { loadPins, escapeHtml, type UfgPin } from '../../data/pins';

/** Green teardrop pin rendered as a divIcon (no image assets needed). */
const pinIcon = L.divIcon({
  className: 'ufg-pin',
  html: `
    <svg width="30" height="42" viewBox="0 0 30 42" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 1C7.3 1 1 7.3 1 15c0 10.5 14 26 14 26s14-15.5 14-26C29 7.3 22.7 1 15 1z"
            fill="#16a34a" stroke="#ffffff" stroke-width="2"/>
      <circle cx="15" cy="15" r="6" fill="#ffffff"/>
    </svg>`,
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -40],
});

function popupHtml(p: UfgPin): string {
  const digits = p.mobile.replace(/\D/g, '');
  const mobile = digits
    ? `<a href="tel:+92${digits.slice(-10)}" class="text-green-700 underline">${escapeHtml(p.mobile)}</a>`
    : escapeHtml(p.mobile);
  const imgs =
    p.images.length > 0
      ? `<div class="grid grid-cols-2 gap-1 mt-2">` +
        p.images
          .slice(0, 4)
          .map(
            (src) =>
              `<a href="${escapeHtml(src)}" target="_blank" rel="noopener">` +
              `<img src="${escapeHtml(src)}" class="w-full h-16 object-cover rounded" loading="lazy" alt=""/></a>`
          )
          .join('') +
        `</div>`
      : '';
  return (
    `<div class="min-w-[200px] max-w-[260px]">` +
    `<div class="font-bold text-sm mb-1">${escapeHtml(p.name)}</div>` +
    (p.mobile ? `<div class="text-xs text-gray-600">📞 ${mobile}</div>` : '') +
    (p.address ? `<div class="text-xs text-gray-600 mt-1">📍 ${escapeHtml(p.address)}</div>` : '') +
    (p.pin
      ? `<div class="text-xs mt-1"><a href="${escapeHtml(p.pin)}" target="_blank" rel="noopener" class="text-green-700 underline">Open in Google Maps</a></div>`
      : '') +
    imgs +
    `</div>`
  );
}

export const PinsLayer = () => {
  const [pins, setPins] = React.useState<UfgPin[] | null>(null);

  React.useEffect(() => {
    let alive = true;
    loadPins()
      .then((d) => {
        if (alive) setPins(d);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  if (!pins) return null;

  return (
    <>
      {pins.map((p, i) => (
        <Marker key={`${p.name}-${i}`} position={[p.lat, p.lng]} icon={pinIcon}>
          <Popup>
            <div dangerouslySetInnerHTML={{ __html: popupHtml(p) }} />
          </Popup>
        </Marker>
      ))}
    </>
  );
};
