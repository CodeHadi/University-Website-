import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-removebg-preview.png' 
import { Link } from 'react-scroll';
import { CgMenuMotion } from "react-icons/cg";


const Navbar = () => {

  const [sticky , setsticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY > 580 ? setsticky(true) : setsticky(false);
    })
  },[]);
  const [mobilemenu, setmobilemenu] = useState(false);
  const togglemenu = () =>{
    mobilemenu ? setmobilemenu(false) : setmobilemenu(true)
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
     <img src={logo} alt="logo" style={{ height: '90px', width: '100px' }}
    />
     <ul className={mobilemenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-250} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-110} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="testimonial" smooth={true} offset={-310} duration={500}>Testimonial</Link></li>
        <li><Link to="contact" smooth={true} offset={-280} duration={500}>Contact us</Link></li>
     </ul>
     <CgMenuMotion size={'4rem'} className='menu-icon' onClick={togglemenu}/>
    </nav>
  )
}

export default Navbar