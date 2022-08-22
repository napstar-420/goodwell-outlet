import React from 'react'
import Navbar from './navbar'
import Carousal from './carousal.js'

const home = () => {
  return (
    <>
        <Navbar />
        <div>
            <Carousal />
        </div>
    </>
  )
}

export default home