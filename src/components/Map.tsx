// @ts-ignore
import L from 'leaflet';
import React, { useEffect, useRef } from 'react';
// @ts-ignore
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:
    'https://cdn5.vectorstock.com/i/1000x1000/99/84/map-marker-icon-vector-13489984.jpg', // URL for the default icon image
  // iconRetinaUrl:
  //   'https://cdn5.vectorstock.com/i/1000x1000/99/84/map-marker-icon-vector-13489984.jpg', // URL for the retina icon image (2x resolution)
  // shadowUrl:
  //   'https://cdn5.vectorstock.com/i/1000x1000/99/84/map-marker-icon-vector-13489984.jpg', // URL for the marker shadow image
});

interface MapProps {
  center?: number[];
}

const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({ center = [51.5074, -0.1278] }) => {
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
    <MapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 8 : 4}
      scrollWheelZoom={false}
      className='h-[35vh] rounded-lg shadow-lg'
      // @ts-ignore
      whenCreated={(map) => {
        mapRef.current = map;
      }}
      zoomControl={false} // Hide the zoom controls
    >
      <TileLayer url={url} attribution={attribution} />
      <FlyToLocation />
      {center && <Marker position={center as L.LatLngExpression} />}
    </MapContainer>
  );
};

export default Map;
