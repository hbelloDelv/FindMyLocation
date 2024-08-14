import React from 'react'
import './home.css'
import MapContent from '../MapConatent/MapContainer'
// import Geolocate from '../GeoLocation/Geolocation'
import Form from '../form/Form'


const Home = () => {
  return (
    <div className="home">
        <MapContent />
        {/* <Form /> */}
    </div>
  )
}

export default Home
