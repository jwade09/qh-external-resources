import React from "react";
import logo from "../images/qh.png"

const Nav = () => {
    return (
        <>  
            <div className="logo flex align-center"><img src={logo} /> Sales/Marketing</div>
            <nav className="flex col">
                <a href="#videos"><i class="fa-solid fa-video"></i> Videos</a>
                <a href="#solutions"><i class="fa-solid fa-book"></i> Solution Overviews / Research</a>
                <a href="#ccs"><i class="fa-solid fa-wand-magic-sparkles"></i> Comprehensive Care Solutions</a>
                <a href="#paper"><i class="fa-solid fa-scroll"></i> White Papers</a>
                <a href="#webinars"><i class="fa-solid fa-desktop"></i> Webinars</a>
                <a href="#case"><i class="fa-solid fa-briefcase"></i> Case Studies</a>
                <a href="#insider"><i class="fa-solid fa-newspaper"></i> Navigation Insider</a>
                <a href="#landing"><i class="fa-solid fa-map"></i> Landing Pages</a>
                <a href="#member"><i class="fa-solid fa-user"></i> Member Stories</a>
            </nav>
        </>
    )
}

export default Nav