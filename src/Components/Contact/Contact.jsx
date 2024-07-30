import React from 'react'
import './Contact.css'
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send use a message<BsFillEnvelopeOpenFill className='imgs'/></h3>
        <p>A university is a higher education institution offering undergraduate and postgraduate degrees in various fields. It serves as a hub for advanced learning and research, fostering academic and professional development.</p>
        <ul>
            <li><SiGmail className='pak'/>Contact@gmail.com</li>
            <li><BiSolidPhoneCall className='pak'/>123 123 123</li>
            <li><IoLocation className='pak'/>77 Massachusetts Ave, Cambriage <br/>MA 0115586, United this.state</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>  
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name here' required/>
            <label>Phone number</label>
            <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
            <textarea name="message" rows={10} placeholder='Enter your message here' required></textarea>
            <button type='submit' className='btn dark-btn btnimg'>Submit now<MdArrowRightAlt />
            </button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact
