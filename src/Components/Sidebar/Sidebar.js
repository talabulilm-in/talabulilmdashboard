import React from "react";
import './Sidebar.css';
import { AiOutlineHome } from "react-icons/ai";
import logo from "../Images/Logo.png";
import { IoTimeOutline,IoCallOutline } from "react-icons/io5";
import { BsBookmark,BsCalendarCheck } from "react-icons/bs";
import { GiStarsStack } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";



const Sidebar = ({isClass,setClassName}) => {
    return (
        <>
          <div className={` Sidebar-Navigation ${isClass ? 'nav-slided' : '' } `}>
          <div className="header-section__item sidebar">
                <img src={logo} className="mob-logo"  alt="logo"/>
            </div>
             <ul className="Sidebar-Navigation__List">
                <li className="Sidebar-Navigation__List--item"> 
                   <div className="Sidebar-Navigation__ListItem">
                    <Link to='/' >
                     <AiOutlineHome />
                     <span className="menusName" onClick={setClassName}>Dashboard</span>
                     </Link>
                     <span onClick={setClassName} className='crossIcon' >
                     <RxCross1 />
                     </span>
                     
                   </div>
                </li>
                <li className="Sidebar-Navigation__List--item"> 
                  <div className="Sidebar-Navigation__ListItem">
                    <IoTimeOutline />
                    <span className="menusName">Time-Table</span>
                  </div>
                  <ul className="Sidebar-Navigation__SubList">
                    <Link to='selectmonthtt'>
                       <li onClick={setClassName}><span className="menusName">Namaz Time-Table</span></li>
                    </Link>
                    <Link to='selectmonthsi'>
                      <li onClick={setClassName}><span className="menusName">Sehri & Iftaar</span></li>
                    </Link>
                  </ul>
                </li>
                <li className="Sidebar-Navigation__List--item">
                  <div className="Sidebar-Navigation__ListItem">
                    <GiStarsStack />
                    <span className="menusName">Ibadat</span>
                  </div>     
                  <ul className="Sidebar-Navigation__SubList">
                    <Link to='ramzanulmubarak'>
                      <li onClick={setClassName}><span className="menusName">Ramzan-Ul-Mubarak</span></li>
                    </Link>
                    <Link to='shabeqadr'>
                       <li  onClick={setClassName}><span className="menusName">Shab-E-Qadr</span></li>
                    </Link>
                    <Link to='shabebarat'>
                    <li onClick={setClassName}><span className="menusName">Shab-E-Baaraat</span></li>
                    </Link>
                  </ul>
                </li>
                <Link to='esalesawab'>
                  <li className="Sidebar-Navigation__List--item" onClick={setClassName}> 
                    <div className="Sidebar-Navigation__ListItem">
                      <BsBookmark />
                      <span className="menusName">Esal-E-Sawab</span>
                    </div>
                  </li>
                </Link>
                <Link to='ramzancalendar'>
                  <li className="Sidebar-Navigation__List--item" onClick={setClassName}> 
                    <div className="Sidebar-Navigation__ListItem">
                      <BsCalendarCheck />
                      <span className="menusName">Ramzan calendar</span>
                    </div>
                  </li>
                </Link>
                <li className="Sidebar-Navigation__List--item"> 
                 <div className="Sidebar-Navigation__ListItem">
                    <IoCallOutline />
                    <span className="menusName">Contact</span>
                 </div>
                </li>
             </ul>
          </div>
        </>
    )
}

export default Sidebar;