import React from 'react'
import './midHeader.css'
import ballons from '../../images/balloons.jpg'

function MidHeader() {
  return (
    <div className="midHeader__container gb-padding-container">
      <img src={ballons} style={{transform: 'scale(2)', filter: 'opacity(0.5)'}}/>
      <div className="midHeader__text">
        <p style={{textAlign: 'center'}}>DP</p> <p>party and decorations</p>
      </div>
    </div>
  )
}

export default MidHeader
