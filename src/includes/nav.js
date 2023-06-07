import React from "react";
import logo from "../images/qh.png"
import { Link } from "gatsby";

const Nav = () => {
    return (
        <>  
            <div className="logo flex align-center"><img src={logo} /> Sales/Marketing</div>
            <nav className="flex col">
            <Link className="act mb1" to="/playbooks"><i class="fa-solid fa-book"></i> Playbooks</Link>
            <Link className="act" to="/assets"><i class="fa-solid fa-folder-open"></i> Resources</Link>
            </nav>
        </>
    )
}

export default Nav