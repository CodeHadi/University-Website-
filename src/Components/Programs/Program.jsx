import React from 'react';
import './Programs.css';
import program_1 from '../../assets/im-2.jpg';
import program_2 from '../../assets/IM-1.jpg';
import program_3 from '../../assets/im-3.jpg';
import { PiStudentFill } from "react-icons/pi";
import { SlUserFemale } from "react-icons/sl";
import { BiBookReader } from "react-icons/bi";

const Program = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="Program 1" />
        <div className="caption">
           <SlUserFemale className='isp'/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="Program 2" />
        <div className="caption">
         <PiStudentFill className='isp'/>
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="Program 3" />
        <div className="caption">
          <BiBookReader className='isp'/>
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Program;
