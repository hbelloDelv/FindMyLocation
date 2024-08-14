import React,{useState, useRef} from 'react'
import { MapContainer, TileLayer, Marker, Popup,useMapEvents, FeatureGroup, useMap } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw'
import './mapcontainer.css'
import L from 'leaflet'
import Geolocate from '../GeoLocation/Geolocation';
import Form from '../form/Form';


const icon = L.icon({
  iconUrl: './marker_icon.png',
  iconSize: [38, 38]
})

const _created = (e) => console.log(e)

const MapContent = () => {
  const position = [9.0820, 8.6753]; // Default position for Nigeria
  const mapRef = useRef()
  const ZOOM_LEVEL = 5
  // const leafletElement = useMap()
  //using the Geolocate function on the map
  const locatFinder = Geolocate()


  const handleFindMe = ()=>{
    if(locatFinder.loaded && !locatFinder.error){
      mapRef.current.flyTo([
        locatFinder.coordinates.lat,
        locatFinder.coordinates.lng,
      ], ZOOM_LEVEL, {animate: true})
    }else{
      alert(locatFinder.error.message)
    }
  }
  
  return (
    <>
    <MapContainer center={position} zoom={5} ref={mapRef}>
      {/* <FeatureGroup>
        <EditControl position='topright' onCreated={_created}/>
      </FeatureGroup> */}
    <TileLayer
     url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
 
      attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
        {/* <Marker position={position} icon={icon}>
          <Popup>
            Current Location: {position[0]}, {position[1]}
          </Popup>
        </Marker> */}
        {
          locatFinder.loaded && !locatFinder.error && (
            <Marker position={[
              locatFinder.coordinates.lat,
              locatFinder.coordinates.lng,
              ]}  
              icon={icon}
              >
              </Marker>
          )
        }
    </MapContainer>
    <div className="location-container">
        <button onClick={handleFindMe}>Find my location</button>
    </div>
    {/* <Form locatFinder={locatFinder}/> */}
    {
      locatFinder.loaded && !locatFinder.error ? <Form locatFinder={locatFinder}/> : "No location access"
    }
  </>        

  )
}



export default MapContent;

