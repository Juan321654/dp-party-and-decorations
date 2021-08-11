import React from 'react'
import './navbar.css'
import {links} from '../../helpers/links'

function createLinks() {
  return links.map((e, idx) => {
    return (
      <div key={idx}>
        <a href={e.ref} className="navLink">{e.name}</a>
      </div>
    )
  })
}

function Navbar() {
  return (
    <div className="navbar__container gb-padding-container" id="#home">
      {createLinks()}
    </div>
  )
}

export default Navbar
