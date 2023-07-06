// @ts-nocheck
import React, { useState } from 'react';
import {
    FaHome,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaLinkedin,
    FaGithub,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {

    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem =  [
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaRegChartBar/>
        }
    ]

    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
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
               <div className='bottom_section'>
                    <a href="https://www.linkedin.com/in/salmaan-ali/" ><FaLinkedin/></a>
                    <a href="https://github.com/sallyman128" ><FaGithub/></a>
               </div>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;