import React from 'react'




const Paginacion = ({prev,next,onPrevious, onNext}) => {

    const Previous = () => {
        onPrevious();
    }

    const Next = () => {
        onNext();
    }


  return (
    <nav >
       
      <ul className='paginacion'>
        {
            prev ? (
            <li>
            <button className='btn' onClick={Previous}>Preview</button>
            </li>)
            :
            null}
        
        {
            next ?(
            <li>
            <button className='btn' onClick={Next}>Next</button>
            </li>)
            : 
            null}
      </ul>  
    </nav>
  )
}

export default Paginacion