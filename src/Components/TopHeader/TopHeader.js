import React from "react";
import logo from "../Images/Logo.png";
import './TopHeader.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const TopHeader = ({setClassName})=> {
    return (
       <>
        <div className="header-section">
            <Link to='/'>
            <div className="header-section__item">
                <img src={logo} className="logo"  alt="logo"/>
            </div>
            </Link>
            <div className="header-section__item2">
                <div className="header-section__hadees">
                    <p className="urduHadees">
                    <marquee direction="right" width='100%'>
                        طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ 
                        </marquee>
                        </p>
                 </div>
                <span className="hamburgerIcon" onClick={setClassName}><GiHamburgerMenu /></span>
                <input type="text" placeholder="Serch here" className="searchInput"/>
            </div>
        </div>
       </>
    )
}

export default TopHeader;
