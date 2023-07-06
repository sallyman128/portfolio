// @ts-nocheck
import React, { useState } from 'react';
import "./Sidebar.css"

import {
    FaHome,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaLinkedin,
    FaGithub,
    FaCode,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {

    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem =  [
        {
            path:"/",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaRegChartBar/>
        },
        {
            path: "/projects",
            name:"Projects",
            icon: <FaCode/>
        }
    ]

    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Portfolio</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
                </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <footer className='bottom_section'>
                    <a href="https://www.linkedin.com/in/salmaan-ali/" className='link'>
                        <div className='icon'><FaLinkedin/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">LinkedIn</div>
                    </a>
                    <a href="https://github.com/sallyman128" className='link'>
                        <div className='icon'><FaGithub/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Github</div>
                    </a>
               </footer>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;