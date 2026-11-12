'use client';

import type { NearbyUser } from '@/lib/api/location';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { Circle, CircleMarker, MapContainer, Marker, TileLayer, Tooltip, useMap } from 'react-leaflet';
import { formatNearbyDistance } from './NearbyUserProfileCard';

// OpenStreetMap tiles need no API key. Others' markers use server-approximated positions only.
const PERSON_ICON = L.divIcon({
  className: '',
  html: '<div style="width:16px;height:16px;border-radius:50%;background:#7c3aed;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></div>',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

function FitRadius({ center, radiusKm }: { center: { lat: number; lng: number }; radiusKm: number }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(L.latLng(center.lat, center.lng).toBounds(radiusKm * 2000), { animate: false });
  }, [map, center.lat, center.lng, radiusKm]);
  return null;
}

export function NearbyMap({
  center,
  radiusKm,
  users,
  onUserClick,
}: {
  center: { lat: number; lng: number };
  radiusKm: number;
  users: NearbyUser[];
  onUserClick: (user: NearbyUser) => void;
}) {
  return (
    <MapContainer center={[center.lat, center.lng]} zoom={10} scrollWheelZoom={false} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitRadius center={center} radiusKm={radiusKm} />
      <Circle
        center={[center.lat, center.lng]}
        radius={radiusKm * 1000}
        pathOptions={{ color: '#3b82f6', fillOpacity: 0.08, weight: 2 }}
      />
      <CircleMarker
        center={[center.lat, center.lng]}
        radius={8}
        pathOptions={{ color: '#fff', weight: 3, fillColor: '#2563eb', fillOpacity: 1 }}
      >
        <Tooltip>You are here</Tooltip>
      </CircleMarker>
      {users.map((user) =>
        user.approxPosition ? (
          <Marker
            key={user.id}
            position={[user.approxPosition.lat, user.approxPosition.lng]}
            icon={PERSON_ICON}
            eventHandlers={{ click: () => onUserClick(user) }}
          >
            <Tooltip>
              {user.name} · {formatNearbyDistance(user.distance)}
            </Tooltip>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
}
