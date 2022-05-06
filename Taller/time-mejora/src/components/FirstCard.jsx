import React from 'react'
import '../styles/FirstCard.css'

function FirstCard() {
  return (
    <div className='FirstCard'>
        <div className='description'>
        {/* <span>{props.Daily}</span>
        <span>{props.Weekly}</span>
        <span>{props.Monthly}</span> */}
        <span>Daily</span>
        <span>Weekly</span>
        <span>Monthly</span>
        </div>
    </div>
  )
}

export {FirstCard}