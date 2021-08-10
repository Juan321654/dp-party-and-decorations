import React from 'react'
import './navbar.css'
import {links} from '../../helpers/links'

function createLinks() {
  return links.map((e, idx) => {
    return (
      <div key={idx} className="navbar__links">
        <a href={e.ref}>{e.name}</a>
      </div>
    )
  })
}

function Navbar() {
  return (
    <div className="navbar__container">
      {createLinks()}
    </div>
  )
}

export default Navbar
