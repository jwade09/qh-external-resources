import React from "react";
import logo from "../images/qh.png"
import { Link } from "gatsby";

const Nav = () => {
    return (
        <>  
            <Link to="/" className="logo flex align-center"><img src={logo} alt="QH Logo" /> Sales/Marketing</Link>
            <nav className="flex col">
            <Link className="act mb1" to="/playbooks"><i class="fa-solid fa-book"></i> Playbooks</Link>
            <Link className="act" to="/"><i class="fa-solid fa-folder-open"></i> Resources</Link>
            </nav>
        </>
    )
}

export default Nav