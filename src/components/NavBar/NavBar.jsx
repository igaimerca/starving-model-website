import React, { useRef, useState } from 'react'
import "./NavBar.css";
import useWindowDimensions from "../../utils/useWindowDimensions";
function NavBar() {
    const menuIcon = useRef(null);
    const [showNavBar, setShowNavBar] = useState(null);
    let { width } = useWindowDimensions();
    console.log(width);

    return (
        <nav className={`${width <= 837 && showNavBar ? "mobile-navbar" : ""} navbar`}>
            <h1>Starving <br /> Models</h1>
            <div className={`${width <= 837 && showNavBar ? "mobile-nav-items" : ""} nav-items`}>
                <ul className={`${width <= 837 ? "mobile-nav-links" : ""} nav-links`}>
                    <li>Project</li>
                    <li>Art</li>
                    <li>Charities</li>
                    <li onClick={() => window.location = '#utilities'}>Utilities</li>
                    <li onClick={() => window.location = "#roadmap"}>Roadmap</li>
                    <li onClick={() => window.location = '#team'} >Team</li>
                </ul>
                <ul className="nav-social-links">
                    <li><img src="/images/social/twitter.svg" alt="" /></li>
                    <li><img src="/images/social/discord.svg" alt="" /></li>
                    <li><img src="/images/social/instagram.svg" alt="" /></li>
                    <li><img src="/images/social/angrybearz.svg" alt="" /></li>
                </ul>
            </div>
            <div className="menu-icon" ref={menuIcon} onClick={() => setShowNavBar(!showNavBar)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>

        </nav>
    )
}

export default NavBar
