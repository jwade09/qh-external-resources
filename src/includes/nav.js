import React from "react";
import logo from "../images/qh.png"

const Nav = () => {
    return (
        <>  
            <div className="logo flex align-center"><img src={logo} /> Sales/Marketing</div>
            <nav className="flex col">
                <a href="#"><i class="fa-solid fa-video"></i> Videos</a>
                <a href="#"><i class="fa-solid fa-video"></i> Solution Overviews / Research</a>
                <a href="#"><i class="fa-solid fa-video"></i> Comprehensive Care Solutions</a>
                <a href="#"><i class="fa-solid fa-video"></i> White Papers</a>
                <a href="#"><i class="fa-solid fa-video"></i> Webinars</a>
                <a href="#"><i class="fa-solid fa-video"></i> Case Studies</a>
                <a href="#"><i class="fa-solid fa-video"></i> Navigation Insider</a>
                <a href="#"><i class="fa-solid fa-video"></i> Landing Pages</a>
                <a href="#"><i class="fa-solid fa-video"></i> Member Stories</a>
            </nav>
        </>
    )
}

export default Nav