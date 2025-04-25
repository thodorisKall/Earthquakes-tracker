import React from "react"

function BoxInfo({ info }) {
  const timestamp = new Date(info.time)

  const datePart = timestamp.toLocaleDateString()
  const timePart = timestamp.toLocaleTimeString()

  // removes 2nd decimal digit
  function cutToOneDecimal(num) {
    const shifted = num * 10
    const cut = parseInt(shifted)
    return cut / 10
  }

  //pick class based on the magnitude value
  function getMagnitudeClass(mag) {
    if (mag < 3) {
      return "low-mag"
    } else if (mag >= 3 && mag <= 4.8) {
      return "medium-mag"
    } else {
      return "high-mag"
    }
  }

  return (
    <div className='box'>
      <div className='box_title'>
        <h2>Earthquake </h2>
      </div>
      <div className='box_data'>
        <h3>
          <span className='label'>Location:</span> <span>{info.location}</span>
        </h3>
        <div className='box_info'>
          <h3 id='box_mag'>
            <span className='label'>Magnitude: </span>
            <span id='magnitude' className={getMagnitudeClass(info.magnitude)}>
              {cutToOneDecimal(info.magnitude).toFixed(1)}
            </span>
            <span id='magUnit'> {info.magUnit}</span>
          </h3>
          <h3 id='box_depth'>
            <span className='label'>Depth:</span> <span>{info.depth} km</span>
          </h3>
          <h3 id='box_time'>
            <span className='label'>Time:</span>
            <span> {timePart} </span> <span className='label'>at</span>
            <span> {datePart}</span>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default BoxInfo
