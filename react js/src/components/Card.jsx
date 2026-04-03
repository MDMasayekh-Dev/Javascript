import React from 'react'

const Card = ({title,text,buttonText}) => {
  return (
    <div className='main'>
        <h1> {title}</h1>
        <p> {text}</p>
       <button>{buttonText}</button>
    
    </div>
  )
}

export default Card