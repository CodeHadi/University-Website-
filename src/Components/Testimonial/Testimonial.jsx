import React, { useRef } from 'react'
import './Testimonial.css'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import User1 from '../../assets/I-1.jpg/'
import User2 from '../../assets/I-2.jpg/'
import User3 from '../../assets/I-3.jpg/'
import User4 from '../../assets/I-4.jpg/'

const Testimonial = () => {
    const slide = useRef();
    let tx = 0;
    const slideforword = () => {
        if(tx > -50){
            tx -= 25;
        }
        slide.current.style.transform = `translateX(${tx}%)`;
    }
    const slidebackword = () => {
        if(tx < 0){
            tx += 25;
        }
        slide.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div>
      <div className="testimonial">
        <HiOutlineArrowNarrowRight className='next-btn' onClick={slideforword}/>   
        <HiOutlineArrowNarrowLeft className='back-btn' onClick={slidebackword}/>
        <div className="slider">
            <ul ref={slide}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User1} alt="" />
                            <div>
                                <h3>Willian Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>A degree can enhance career prospects by providing specialized knowledge and skills, often leading to higher earning potential. It also offers networking opportunities and credentials that can open doors to professional growth.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={User2} alt="" />
                            <div>
                                <h3>Willian Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>A degree can enhance career prospects by providing specialized knowledge and skills, often leading to higher earning potential. It also offers networking opportunities and credentials that can open doors to professional growth.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User3} alt="" />
                            <div>
                                <h3>Willian Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>A degree can enhance career prospects by providing specialized knowledge and skills, often leading to higher earning potential. It also offers networking opportunities and credentials that can open doors to professional growth.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User4} alt="" />
                            <div>
                                <h3>Willian Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>A degree can enhance career prospects by providing specialized knowledge and skills, often leading to higher earning potential. It also offers networking opportunities and credentials that can open doors to professional growth.</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
