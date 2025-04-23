import React from "react"

function BoxInfo({ info }) {
  return (
    <div className='box'>
      <h2>Earthquake Info</h2>
      <h3>ID: {info.id}</h3>
      <h3>Location:{info.location} </h3>
      <h3>Magnitude:{info.magnitude} </h3>
    </div>
  )
}

export default BoxInfo
