import "./App.css"
import { useEffect, useState } from "react"
import Map from "./Map"
import axios from "axios"

function App() {
  const [earthQuakesData, setEarthQuakesData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // calculate the date 2 days before
  let twoDaysBefore = new Date()
  twoDaysBefore.setDate(twoDaysBefore.getDate() - 2)
  const formatDate = (date) => date.toISOString().split("T")[0] //format the date in proper format for the API url
  twoDaysBefore = formatDate(twoDaysBefore)

  useEffect(() => {
    fetchDataApi(twoDaysBefore)
  }, [])

  function fetchDataApi(date) {
    setIsLoading(true)
    axios
      .get(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${date}&minmagnitude=2`
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
