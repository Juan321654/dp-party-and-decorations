import React from 'react'
import './midHeader.css'
import ballons from '../../images/balloons.jpg'
import logo from '../../images/dp-logo.png'

function MidHeader() {
  return (
    <div className="midHeader__container gb-padding-container">
      <img src={ballons} style={{transform: 'scale(2)', filter: 'opacity(0.5)'}} alt="main screen"/>
      <div className="midHeader__text">
        <p style={{textAlign: 'center'}}><img src={logo} style={{width: '300px'}} alt="decoration"/></p> <p>party and decorations</p>
      </div>
    </div>
  )
}

export default MidHeader
