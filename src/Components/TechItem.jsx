import React from 'react'

function TechItem({imageLink}) {
  return (
    <>
        <img src={imageLink} alt="TechIcon" className='w-8 h-8 transition-all duration-500 hover:rotate-[360deg]' />
    </>
  ) 
}

export default TechItem