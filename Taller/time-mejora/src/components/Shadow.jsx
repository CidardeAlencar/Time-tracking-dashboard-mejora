import React from 'react'
import {TypeRow} from './TypeRow'
//import work from'../assets/icon-work.svg'
import '../styles/Shadow.css'
//  import '../CardAPI/ShadowList'

function Shadow(props) {
  const theme='Shadow '+props.theme
  return (
    <div className='card'>
    <div className={theme}>
      <img src={props.img} alt='icono de trabajo'></img>
      
    </div>
    <div className='Body'>
      {
       // TypeList.map(
        //  (card)=>
          <TypeRow
          Type={props.Type}
          Houres={props.Houres}
          hrsweek={props.hrsweek}
         // theme={props.theme}
        //  Houres={card.Houres}
        //  hrsweek={card.hrsweek}
          />
      //  )
      }
  </div>
  </div>

  )
}

export {Shadow}