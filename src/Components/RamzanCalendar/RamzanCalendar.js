import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { BsCloudDownload } from "react-icons/bs";
import RamzanCal1 from "../Images/ramzanCal1.png";
import RamzanCal2 from "../Images/ramzanCal2.png";
import RamzanCal3 from "../Images/ramzanCal3.png";
import RamzanCal4 from "../Images/ramzanCal4.png";
import RamzanCal5 from "../Images/ramzanCal5.png";
import RamzanCal6 from "../Images/ramzanCal6.png";
import RamzanCal7 from "../Images/ramzanCal7.png";
import RamzanCal8 from "../Images/ramzanCal8.png";
import RamzanCal9 from "../Images/ramzanCal9.png";
import RamzanCal10 from "../Images/ramzanCal10.png";

import './RamzanCalendar.css';



function RamzanCalendar() {
  return (
    <div className='contain'>
        <div className="page-header">
          <span className="backBtn" onClick={()=> window.history.back()}>
            <MdArrowBackIosNew />
          </span>
          <div className="page-header__content">
            <h2 className="pagetitle">Ramzan Calendar 2023</h2>
          </div>
       </div>
       <div class="contentSection">
       <div className='calendar-section'>
        <a href={RamzanCal1} download> 
         <img src={RamzanCal1} alt='ramzanCal1' />
         <span className='download-text'>Download <BsCloudDownload /></span>
         </a>
         <a href={RamzanCal2} download> 
         <img src={RamzanCal2} alt='ramzanCal2' />
         <span className='download-text'>Download <BsCloudDownload /></span>
         </a>
         <a href={RamzanCal3} download> 
         <img src={RamzanCal3} alt='ramzanCal3' />
         <span className='download-text'>Download <BsCloudDownload /></span>
         </a>
         <a href={RamzanCal4} download> 
         <img src={RamzanCal4} alt='ramzanCal4' />
         <span className='download-text'>Download <BsCloudDownload /></span>
         </a>
         <a href={RamzanCal5} download> 
         <img src={RamzanCal5} alt='ramzanCal5' />
         <span className='download-text'>Download <BsCloudDownload /></span>
         </a>
         <a href={RamzanCal6} download> 
         <img src={RamzanCal6} alt='ramzanCal6' />
         <span className='download-text'>Download <BsCloudDownload /></span>
         </a>
         <a href={RamzanCal7} download> 
         <img src={RamzanCal7} alt='ramzanCal7' />
         <span className='download-text'>Download <BsCloudDownload /></span>
         </a>
         <a href={RamzanCal8} download> 
         <img src={RamzanCal8} alt='ramzanCal8' />
         <span className='download-text'>Download <BsCloudDownload /></span>
         </a>
       
         <a href={RamzanCal9} download> 
         <img src={RamzanCal9} alt='ramzanCal9' />
         <span className='download-text'>Download <BsCloudDownload /></span>
         </a>
         <a href={RamzanCal10} download>    
         <img src={RamzanCal10} alt='ramzanCal10' /> 
         <span className='download-text'>Download <BsCloudDownload /></span>
         </a>

         </div>
         </div>
    </div>
  )
}

export default RamzanCalendar