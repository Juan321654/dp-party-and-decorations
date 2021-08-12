import React from 'react'
import './contact.css'
import {links} from '../../helpers/links'

function Contact() {
  function createLinks() {
    return links.map((e, idx) => {
      return (
        <div key={idx}>
          <a href={e.ref} className="contact__links">{e.name}</a>
        </div>
      )
    })
  }
  return (
    <div className="contact__container" id="contact">
      <div>
        <p>Diana Arrubla</p>
        <a href="tel:+1-516-451-1725">+1 (516) 451 1725</a>
        <p>dsolcheers@hotmail.com</p>
      </div>
      <div>
      {createLinks()}
      </div>
    </div>
  )
}

export default Contact
