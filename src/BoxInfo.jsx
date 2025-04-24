import React from "react"

function BoxInfo({ info }) {
  const timestamp = new Date(info.time)

  const datePart = timestamp.toLocaleDateString()
  const timePart = timestamp.toLocaleTimeString()
  return (
    <div className='box'>
      <h2>Earthquake </h2>
      <h3>Location:{info.location} </h3>
      <h3>
        Magnitude:{info.magnitude} <span id='magUnit'>{info.magUnit}</span>
      </h3>
      <h3>Depth: {info.depth} km</h3>
      <h3>
        Time: {timePart} at {datePart}
      </h3>
    </div>
  )
}

export default BoxInfo
