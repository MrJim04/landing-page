import React from 'react'
import TextCard from '../TextCard'
import LandingSkills from '../LandingPage/LandingSkills'
import MainButton from '../MainButton'

function SlideIntro() {
  return (
    <>
        <div id="page" className="page-item">
            <div className="m-10 flex flex-col items-center justify-center md:flex-row gap-10 md:pt-20">
                <TextCard text="Hi, I'm Jimwell Ibay, an IT professional with expertise in web technologies. I have a strong foundation in creating modern minimalist websites or web apps. I believe that I can contribute and gain skills and experience in your organization or company. Click the proceed button to check out my smaple projects."></TextCard>
                <MainButton text="Proceed"></MainButton>
            </div>
        </div>
    </>
  )
}

export default SlideIntro