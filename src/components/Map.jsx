import React, { useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./css/map.css";
import ListImage from './ListImage';

const Map = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedNamePoint, setSeletedNamePoint] = useState(null);
  useEffect(() => {
    maptilersdk.config.apiKey = 'HdytUnvmTT1prWizoLq7';

    const geojson = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'description':
                  '<strong>Quebrada Mono Aullador</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
            'name': 'Quebrada Mono Aullador',
            'iconSize': [60, 60]
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-79.977968939, -2.149937974]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description':
                  '<strong>Camino Ciclistas</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
            
            'name': 'Camino Ciclistas',
            'iconSize': [50, 50]
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-79.97474173, -2.148778407]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description':
                  '<strong>Escopión</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
            
            'name': 'Escorpión',
            'iconSize': [50, 50]
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-79.966518633, -2.155907043]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description':
                  '<strong>Fadcom</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
            
            'name': 'Fadcom',
            'iconSize': [50, 50]
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-79.962598492, -2.142296033]
          }
        }
      ]
    };
    const map = new maptilersdk.Map({
      container: 'map',
      style: maptilersdk.MapStyle.SATELLITE,
      center: [-79.9703923, -2.1482008],
      zoom: 14
    });
    map.on('load', function () {
      map.on('mouseenter', 'places', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
  
      map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
      });
      
    })
    
    const handleMarkerClick = (marker) => {
      // Set the selected feature when a marker is clicked
      setSelectedFeature(marker);
      setSeletedNamePoint(marker.properties.name);
    };

    // Add markers to map
    geojson.features.forEach((marker) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage =
        `url(https://placekitten.com/g/${marker.properties.iconSize.join('/')}/)`;
      el.style.width = `${marker.properties.iconSize[0]}px`;
      el.style.height = `${marker.properties.iconSize[1]}px`;
  
      new maptilersdk.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new maptilersdk.Popup().setHTML(marker.properties.description))
        .addTo(map)
        .getElement()
        .addEventListener('click', () => handleMarkerClick(marker));
        
    
    });

    

    // // // Handle click event on the map
    // // map.on('click', () => {
    // //   // Clear the selected feature when the map is clicked
    // //   setSelectedFeature(null);
    // // });

    // Cleanup function
    return () => {
      map.remove(); // Remove the map when the component is unmounted
    };
  }, []);

  return (
    <><div className="map-wrap">
      <div id="map" className='map-wrap' style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
      <ListImage carpetaSeleccionada={selectedNamePoint}></ListImage>
    </div></>
  );
};

export default Map;