import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from "react-icons/md";
   

function SelectMonthSI() {
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
         <div className='monthsection__item' onClick={()=>navigate('../januarysehriiftaar') }>
            <span>January</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../februarysehriiftaar') }>
            <span>February</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../marchsehriiftaar') }>
            <span>March</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../aprilsehriiftaar') }>
            <span>April</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../maysehriiftaar')}>
            <span>May</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../junesehriiftaar')}>
            <span>june</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../julysehriiftaar')}>
            <span>July</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../augustsehriiftaar')}>
            <span>August</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../septembersehriiftaar')}>
            <span>September</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../octobersehriiftaar')}>
            <span>October</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../novembersehriiftaar')}>
            <span>November</span>
         </div>
         <div className='monthsection__item' onClick={()=>navigate('../decembersehriiftaar')}>
            <span>December</span>
         </div>
       </div>
    </div>
  )
}

export default SelectMonthSI