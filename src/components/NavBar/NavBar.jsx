import React from 'react'
import "./NavBar.css";
function NavBar() {
    return (
        <nav className="navbar">
            <h1>Starving <br /> Models</h1>
            <div className="nav-items">
                <ul className="nav-links">
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

        </nav>
    )
}

export default NavBar
