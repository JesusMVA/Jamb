import { isContentEditable } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Cards = ({characters = []}) => {
  return (
    <div className='cartas'>
        {
            characters.map((item,index) => (
                <div key={index} className='col'>
                    <div className='card'>
                       <img src={item.image}></img>
                       <center><h1>{item.name}</h1></center>
                        <p>Status: {item.status}</p>
                        <p>Specie: {item.species}</p>
                        <p>Gender: {item.gender}</p>
                        <p>Origin: {item.origin.name}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cards