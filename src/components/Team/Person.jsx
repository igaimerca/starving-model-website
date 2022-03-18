import React from 'react'

function Person({name, image, position}) {
  return (
    <div className="person-container">
        <div className="person-info">
            <h3>{name}</h3>
            <div className="position">{position}</div>
        </div>
        <img src={image} alt="" />
    </div>
  )
}

export default Person