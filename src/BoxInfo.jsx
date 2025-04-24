import React from "react"

function BoxInfo({ info }) {
  const timestamp = new Date(info.time)

  const datePart = timestamp.toLocaleDateString()
  const timePart = timestamp.toLocaleTimeString()
  return (
    <div className='box'>
      <div className='box_title'>
        <h2>Earthquake </h2>
      </div>
      <div className='box_data'>
        <h3>
          Location: <span>{info.location}</span>
        </h3>
        <h3>
          Magnitude: <span>{info.magnitude}</span>
          <span id='magUnit'>{info.magUnit}</span>
        </h3>
        <h3>
          Depth: <span>{info.depth} km</span>
        </h3>
        <h3>
          Time:
          <span>
            {timePart} at {datePart}
          </span>
        </h3>
      </div>
    </div>
  )
}

export default BoxInfo
