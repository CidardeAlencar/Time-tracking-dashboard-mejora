import React from 'react'
import { FirstCard } from './FirstCard'
import jeremy from '../assets/image-jeremy.png'
import '../styles/FirstCardShadow.css'
function FirstCardShadow(props) {
   // const theme='Shadow '+props.theme
  return (
    <div className='FirstCardShadow'>
    <div className='ShadowCard'>
      <img src={jeremy} alt='perfil'></img>
      <div className='conteiner'>
      <p className='report'>Report for</p>
      <span className='name'>Jeremy Robson</span>
      </div>
    </div>
    <div className='BodyFirstCardShadow'>
      {

          <FirstCard
         // Type={props.Type}
         // Houres={props.Houres}
         // hrsweek={props.hrsweek}
          />
      }
  </div>
  </div>
  )
}

export { FirstCardShadow}