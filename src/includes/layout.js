import React from "react";
import Nav from "./nav";

import "../styles/styles.scss"

const Layout = ({children}) => {
    return (
        <main>  
            <div className="wrapper flex">
                <aside className="well gutter">
                    <Nav />
                </aside>
                <section className="well gutter">
                    {children}
                </section>
            </div>
        </main>
    )
}

export default Layout