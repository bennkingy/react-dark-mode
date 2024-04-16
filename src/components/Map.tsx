// @ts-ignore
import L from 'leaflet';
import React, { useEffect, useRef } from 'react';
// @ts-ignore
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
// @ts-ignore
import icon from 'leaflet/dist/images/marker-icon.png';
// @ts-ignore
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
// @ts-ignore
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: icon,
  iconRetinaUrl: iconRetinaUrl,
  shadowUrl: iconShadow,
});

interface MapProps {
  center?: number[];
  height?: number;
}

const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({
  center = [51.5074, -0.1278],
  height = 400,
}) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && center) {
      const map = mapRef.current;
      map.flyTo(center as L.LatLngExpression);
    }
  }, [center]);

  const FlyToLocation = () => {
    const map = useMap();
    if (center) {
      map.flyTo(center as L.LatLngExpression);
    }
    return null;
  };

  return (
    <div style={{ height: height }}>
      <MapContainer
        style={{ height: '100%', minHeight: '100%' }}
        center={(center as L.LatLngExpression) || [51, -0.09]}
        zoom={center ? 12 : 0}
        scrollWheelZoom={false}
        className='h-[35vh] rounded-lg shadow-lg'
        // @ts-ignore
        whenCreated={(map) => {
          mapRef.current = map;
        }}
        zoomControl={false} // Hide the zoom controls
        // mapStyle={customMapStyle}
      >
        <TileLayer url={url} attribution={attribution} />
        <FlyToLocation />
        {center && <Marker position={center as L.LatLngExpression} />}
      </MapContainer>
    </div>
  );
};

export default Map;
