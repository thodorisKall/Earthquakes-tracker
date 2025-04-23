import "./App.css"
import { useEffect, useState } from "react"
import Map from "./Map"
import axios from "axios"

function App() {
  const [earthQuakesData, setEarthQuakesData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDataApi()
  }, [])

  function fetchDataApi() {
    setIsLoading(true)
    axios
      .get(
        "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2025-04-21&minmagnitude=2"
      )
      .then((res) => setEarthQuakesData(res.data.features))
      .catch((err) =>
        console.error(`Error fetch Earthquakes API ${err.message}`)
      )
      .finally(() => setIsLoading(false))
  }

  return (
    <div className='App'>
      {!isLoading ? <Map apiData={earthQuakesData} /> : "Loading..."}
    </div>
  )
}

export default App
