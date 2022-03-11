import React from 'react'

const CarousalItem = ({img,title, desc}) => {
  return (
    <div className='item'>
        <img src={img} />
        <h5>{title}</h5>
        <p>{desc}</p>
        </div>
  )
}

export default CarousalItem