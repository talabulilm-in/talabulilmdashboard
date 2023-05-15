import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from "react-icons/md";


function SelectMonthTT() {
   const navigate = useNavigate();
  return (
    <div className='selectmonthsection contain' >
       <div className="page-header">
          <span className="backBtn" onClick={()=> window.history.back()}>
            <MdArrowBackIosNew />
          </span>
          <div className="page-header__content">
            <h2 className="pagetitle">Select Month</h2>
          </div>
       </div>
       <div className='monthsection'>
         <div className='monthsection__item' onClick={()=>navigate('../januarytimetable') }>
            <span>January</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../februarytimetable') }>
            <span>February</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../marchtimetable') }>
            <span>March</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../apriltimetable') }>
            <span>April</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../maytimetable')}>
            <span>May</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../junetimetable')}>
            <span>june</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../julytimetable')}>
            <span>July</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../augusttimetable')}>
            <span>August</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../septembertimetable')}>
            <span>September</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../octobertimetable')}>
            <span>October</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../novembertimetable')}>
            <span>November</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../decembertimetable')}>
            <span>December</span>
         </div>
       </div>
    </div>
  )
}

export default SelectMonthTT