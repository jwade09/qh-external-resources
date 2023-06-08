import React from "react";
import logo from "../images/qh.png"
import { Link } from "gatsby";

const NavAssets = () => {
    return (
        <>  
            <Link to="/" className="logo flex align-center"><img src={logo} alt="QH Logo" /> Sales/Marketing</Link>
            <nav className="flex col">
            <Link className="act mb1" to="/playbooks"><i class="fa-solid fa-book"></i> Playbooks</Link>
            <Link className="act" to="/"><i class="fa-solid fa-folder-open"></i> Resources</Link>
                <a href="#videos"><i class="fa-solid fa-video"></i> Videos</a>
                <a href="#solutions"><i class="fa-solid fa-flask"></i> Solution Overviews / Research</a>
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

export default NavAssets