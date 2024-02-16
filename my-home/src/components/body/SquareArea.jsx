import React from 'react'
import "./squarearea.css"

const SquareArea = () => {
  return (
    <div className='square_container'>
     <div className='square_container_1'>
         <div className='square_container_items'>
         <div className="num" >412</div>
          <p className='square_text_p'>square areas</p>
         </div>
         <div className='square_container_items'>
         <div className="num" >519</div>
          <p className='square_text_p'>car parking</p>
         </div>
         <div className='square_container_items'>
         <div className="num" >170</div>
          <p className='square_text_p'> apartments</p>
         </div>
         <div className='square_container_items'>
         <div className="num" >263</div>
          <p className='square_text_p'>rooms</p>
         </div>
     </div>
    </div>
  )
}

export default SquareArea