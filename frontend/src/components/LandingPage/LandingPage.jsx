import React from 'react'
import NameTyper from '../NameTyper'
import LandingLeftSideComponents from './LandingLeftSideComponents'
import LandingRightSideComponents from './LandingRightSideComponents'

function LandingPage() {
  return (
    <>
      <div className="m-5 flex flex-col md:flex-row ">
        <LandingRightSideComponents></LandingRightSideComponents>
        <LandingLeftSideComponents></LandingLeftSideComponents>
      </div>
    </>
  )
}

export default LandingPage