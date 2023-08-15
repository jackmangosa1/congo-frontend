import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const CongoMap = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/geoData.json');
        const data = await response.json();
        setGeoData(data);
      } catch (error) {
        console.error('Error fetching GeoJSON data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFeatureClick = (event) => {
    const provinceName = event.target.feature.properties.name
    alert(`Clicked on province: ${provinceName}`);
  };

  return (
    <MapContainer
      center={[-4, 23]}
      zoom={5}
      style={{ width: '100%', height: '500px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geoData && (
       <GeoJSON
       data={geoData}
       onEachFeature={(feature, layer) => {
         layer.on({
           click: handleFeatureClick,
           mouseover: () => {
             layer.setStyle({
               fillColor: 'blue',
             });
             layer.openTooltip(); 
           },
           mouseout: () => {
             layer.setStyle({
               fillColor: 'black',
               fillOpacity: 0.2,
             });
             layer.closeTooltip(); 
           },
         });
     
         const provinceName = feature.properties.name;
         const tooltipContent = `<strong>${provinceName}</strong>`;
         layer.bindTooltip(tooltipContent); 
       }}
       style={() => ({
         color: 'black',
         weight: 1,
         fillOpacity: 0.2,
       })}
     />
     
     
      )}
    </MapContainer>
  );
};

export default CongoMap;
