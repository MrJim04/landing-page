import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typed from 'typed.js'

function App() {

  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Jimwell Ibay.', 'Web Developer.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="font-mono 
        font-bold 
        text-gray-50 
        text-4xl 
        md:text-8xl 
        text-center 
        md:text-left 
        uppercase 
        py-20 
        md:ml-10" ref={el}></div>
      </div>
      <div className="container 
      mx-auto 
      md:mb-10">
        <div className="bg-gray-900 py-80"></div>
      </div>
    </>
  )
}

export default App

