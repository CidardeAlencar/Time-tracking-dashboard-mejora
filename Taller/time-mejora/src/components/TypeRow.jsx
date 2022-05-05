import React from 'react'
import '../styles/TypeRow.css'
import Ellipsis from'../assets/icon-ellipsis.svg'

function TypeRow(props) {
    const Type=props.Type
    const Houres=props.Houres
    const hrsweek=props.hrsweek
  return (
    <div className='TypeRow'>
        <div className='description'>
        <span>{Type}</span> <img src={Ellipsis} alt='PuntosSuspencivos'></img>
        </div>
      <div className='Houres'>
        <span>{`${Houres} hrs`}</span>
        <span>{`Last Week - ${hrsweek}hrs`}</span>
      </div>
    </div>
  )
}

export {TypeRow}