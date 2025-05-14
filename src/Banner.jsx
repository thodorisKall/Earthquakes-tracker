import React from "react"
import { IoCloseSharp } from "react-icons/io5"

function Banner({ onCloseBanner }) {
  return (
    <div className='banner'>
      <h2>Explore EarthQuakes around the World with just one click!</h2>
      <button className='banner-btn' onClick={onCloseBanner}>
        <IoCloseSharp />
      </button>
    </div>
  )
}

export default Banner
