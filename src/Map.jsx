import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

function Map() {
  const center = {
    lat: 37.98381,
    lng: 23.727539,
  }

  const style = {
    width: "100%",
    height: "100vh",
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyD1ZFtWfmCKjwXJaPGLe4HuQHXrgpsZTPk'>
      <GoogleMap mapContainerStyle={style} center={center} zoom={8}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
