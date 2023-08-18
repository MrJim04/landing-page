import React from 'react'
import Label from '../Label'

function LandingSkills() {
  return (
    <>
        <div className="container">
              <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-20">

                <Label text='JavaScript' background="bg-yellow-500"></Label>
                <Label text='Python' background="bg-cyan-800"></Label>
                <Label text='React' background="bg-blue-800"></Label>
                <Label text='Django' background="bg-green-800"></Label>

                <Label text='HTML' background='bg-orange-700'></Label>
                <Label text='CSS' background='bg-sky-700'></Label>
                <Label text='Boostrap' background='bg-violet-700'></Label>
                <Label text='Tailwind' background='bg-indigo-900'></Label>

              </div>
        </div>
    </>
  )
}

export default LandingSkills