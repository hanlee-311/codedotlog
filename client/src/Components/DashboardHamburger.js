import React, {useState} from 'react'
import Styled from 'styled-components';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import { IconContext } from "react-icons";

const DashboardHamburger = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
     <DashboardContainer>
        <DashboardNav>
        {/* React Icons Styling */}
        <IconContext.Provider value={{ color: "white", className: "menu-bars" , size: '140px' }}>
        <Link to='#' className='menu-bars'>
           <FaIcons.FaBars oncClick={showSidebar}/> 
        </Link>
        </IconContext.Provider>

        </DashboardNav>
        <nav className = { sidebar ? 'nav-menu active' : 'nav-menu'} >
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) =>{
                    return (
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </nav>
     </ DashboardContainer >
    )
}

const DashboardContainer = Styled.div
`
`
const DashboardNav = Styled.div
`
height: 80px;
display: flex;
justify-content: start;
align-items: center;
`


export default DashboardHamburger
