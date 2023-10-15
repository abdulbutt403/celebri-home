import React from 'react'

export default function Card({src, width, text}) {
  return (
    <div className='card'>
        <div style={{height: '72%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img className='card-img' src={src} style={{ width}}/>
        </div>
        <p className='card-text'>{text}</p>
    </div>
  )
}
