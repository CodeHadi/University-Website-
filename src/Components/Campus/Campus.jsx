import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/h1.jpg' 
import gallery2 from '../../assets/G-2.jpg'
import gallery3 from '../../assets/G-3.jpg'
import gallery4 from '../../assets/h2.jpg'
import { MdArrowRightAlt } from "react-icons/md";


const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here<MdArrowRightAlt  className='btnimg' />
</button>
    </div>
  )
}

export default Campus
