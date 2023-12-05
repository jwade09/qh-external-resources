import React from "react";
import logo from "../images/qh.png"
import { Link } from "gatsby";

const NavAssets = () => {
    return (
        <>  
            <Link to="/" className="logo flex align-center"><img src={logo} alt="QH Logo" /> <span>External Resources</span></Link>
            <nav className="flex col">
            {/* <Link className="act mb1" to="/playbooks"><i className="fa-solid fa-book"></i> <span>Playbooks</span></Link> */}
            {/* <Link className="act" to="/"><i className="fa-solid fa-folder-open"></i> <span>Resources</span></Link> */}
                <a href="#collections"><i className="fa-solid fa-grid-2"></i> <span>Collections</span></a>
                <a href="#videos"><i className="fa-solid fa-video"></i> <span>Videos</span></a>
                <a href="#solutions"><i className="fa-solid fa-flask"></i> <span>Solution Overviews / Research</span></a>
                <a href="#ccs"><i className="fa-solid fa-wand-magic-sparkles"></i> <span>Comprehensive Care Solutions</span></a>
                <a href="#paper"><i className="fa-solid fa-scroll"></i> <span>White Papers</span></a>
                <a href="#webinars"><i className="fa-solid fa-desktop"></i> <span>Webinars</span></a>
                <a href="#case"><i className="fa-solid fa-briefcase"></i> <span>Case Studies</span></a>
                <a href="#insider"><i className="fa-solid fa-newspaper"></i> <span>Navigation Insider</span></a>
                <a href="#landing"><i className="fa-solid fa-map"></i> <span>Landing Pages</span></a>
                <a href="#member"><i className="fa-solid fa-user"></i> <span>Member Marketing</span></a>
            </nav>
        </>
    )
}

export default NavAssets