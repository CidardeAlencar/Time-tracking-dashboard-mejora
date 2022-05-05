import React from 'react'
import {TypeRow} from './TypeRow'
import work from'../assets/icon-work.svg'
import '../styles/Shadow.css'
import TypeList from '../CardAPI/TypeRow'

function Shadow() {
  return (
    <div className='card'>
    <div className='Shadow'>
      <img src={work} alt='icono de trabajo'></img>
      
    </div>
    <div className='Body'>
      {
        TypeList.map(
          (card)=>
          <TypeRow
          Type={card.Type}
          Houres={card.Houres}
          hrsweek={card.hrsweek}
          />
        )
      }
  </div>
  </div>

  )
}

export {Shadow}