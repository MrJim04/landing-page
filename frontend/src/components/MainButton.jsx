import React from 'react'

function MainButton({text = "Button"}) {
  return (
    <button className="bg-gray-900 
    text-gray-50 
    p-10 
    md:text-2xl 
    text-center 
    font-bold 
    uppercase 
    hover:bg-gray-800
    rounded-sm">
        {text}
    </button>
  )
}

export default MainButton