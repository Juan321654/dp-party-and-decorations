import React from 'react'
import './examples.css'

function Examples({ data }) {

  // console.log(data.records)
  function createCards(){
    return data.records.map((e, idx) => {
      console.log(e)
      return (
        <div key={idx} className="card__container">
          <img src={e.fields.attachment[0].url} alt="party" />
          <p style={{fontWeight: 'bold'}}>{e.fields.attachment_title}</p>
          <p>{e.fields.attachment_description}</p>
        </div>
      )
    })
  }
  return (
    <div className="example__container">
      {createCards()}
    </div>
  )
}

export default Examples
