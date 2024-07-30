import React from 'react'
import './About.css'
import aboutimage from '../../assets/About.jpg'
import { IoIosPlayCircle } from "react-icons/io";

const About = ({setplaystate}) => {
  return (
    <div>
      <div className="about">
        <div className="about-left">
            <img src={aboutimage} alt="" className='about-img'/>
            <IoIosPlayCircle  className='play-icon' onClick={()=>{setplaystate(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>University programs offer diverse educational paths, from broad undergraduate degrees to specialized graduate studies. These programs build critical thinking and practical skills through comprehensive coursework and research opportunities.</p>
            <p>Graduate programs focus on advancing expertise, offering master's and doctoral degrees in specialized fields. Students engage in intensive research, often collaborating with faculty, preparing for leadership roles in various industries.</p><p>Continuing education programs provide flexible learning options like certificates and online courses, helping professionals stay current with industry trends and enhance their careers. These programs support lifelong learning and adaptability in a dynamic job market.</p>
        </div>
      </div>
    </div>
  )
}

export default About
