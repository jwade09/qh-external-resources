import React from "react";
import logo from "../images/qh.png"
import { Link } from "gatsby";

const NavAssets = () => {
    return (
        <>  
            <Link to="/" className="logo flex align-center"><img src={logo} alt="QH Logo" /> <span>External Resources</span></Link>
            <nav className="flex col">
            {/* <Link className="act mb1" to="/playbooks"><i class="fa-solid fa-book"></i> <span>Playbooks</span></Link> */}
            {/* <Link className="act" to="/"><i class="fa-solid fa-folder-open"></i> <span>Resources</span></Link> */}
                <a href="#videos"><i class="fa-solid fa-video"></i> <span>Videos</span></a>
                <a href="#solutions"><i class="fa-solid fa-flask"></i> <span>Solution Overviews / Research</span></a>
                <a href="#ccs"><i class="fa-solid fa-wand-magic-sparkles"></i> <span>Comprehensive Care Solutions</span></a>
                <a href="#paper"><i class="fa-solid fa-scroll"></i> <span>White Papers</span></a>
                <a href="#webinars"><i class="fa-solid fa-desktop"></i> <span>Webinars</span></a>
                <a href="#case"><i class="fa-solid fa-briefcase"></i> <span>Case Studies</span></a>
                <a href="#insider"><i class="fa-solid fa-newspaper"></i> <span>Navigation Insider</span></a>
                <a href="#landing"><i class="fa-solid fa-map"></i> <span>Landing Pages</span></a>
                <a href="#member"><i class="fa-solid fa-user"></i> <span>Member Marketing</span></a>
            </nav>
        </>
    )
}

export default NavAssets