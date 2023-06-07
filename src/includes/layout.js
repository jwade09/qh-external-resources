import React from "react";
import Nav from "./nav";
import NavAssets from "./nav-assets";

import "../styles/styles.scss"

const Layout = ({children, side}) => {
    console.log(side)
    return (
        <main>  
            <div className="wrapper flex">
                <aside className="well gutter">
                   {side !== "playbook" ? <NavAssets /> : <Nav />}
                </aside>
                <section className="well gutter max">
                    {children}
                </section>
            </div>
        </main>
    )
}

export default Layout