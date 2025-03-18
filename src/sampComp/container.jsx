import React from 'react'
import "./Container.css"
const Container = ({details}) => {
    console.log(details)
  return (
    
    <div className={`${details.className}`}>
        <div>
      <div className='technologyHeading'>{details.title}</div>
      <div className="technologyDescription">{details.description}</div>
    </div>
    <div>
        <img src={details.imgUrl} class="imageClass"/>
    </div>
    </div>
  )
}

export default Container
