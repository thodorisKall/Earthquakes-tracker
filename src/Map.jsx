import React from "react"
import { useState } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import BoxInfo from "./BoxInfo"

function Map({ apiData }) {
  const [markerIcon, setMarkerIcon] = useState(null)
  const [earthquakeInfo, setEarthquakeInfo] = useState(null)

  const center = {
    lat: 37.98381,
    lng: 23.727539,
  }

  const style = {
    width: "100%",
    height: "100vh",
  }

  console.log(apiData)

  const locations = apiData.map((el, i) => {
    const lat = el.geometry.coordinates[1]
    const lng = el.geometry.coordinates[0]

    return (
      <Marker
        key={i}
        position={{ lat, lng }}
        icon={markerIcon}
        onClick={() =>
          setEarthquakeInfo({
            id: el.id,
            location: el.properties.place,
            magnitude: el.properties.mag,
          })
        }
      />
    )
  })

  const handleMapLoad = () => {
    setMarkerIcon({
      url: "https://i.imgur.com/9FG8kno.png",
      scaledSize: new window.google.maps.Size(40, 40),
    })
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyD1ZFtWfmCKjwXJaPGLe4HuQHXrgpsZTPk'>
      <GoogleMap
        mapContainerStyle={style}
        center={center}
        zoom={8}
        onLoad={handleMapLoad}
      >
        {locations}
        {earthquakeInfo && <BoxInfo info={earthquakeInfo} />}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
