import * as React from "react"
import { useState } from "react";

const PlayCard = (props) => {
    
    const [isCopy, setIsCopy] = useState('Copy link');


    const copy = () => {
        navigator.clipboard.writeText(props.url);
        setIsCopy('Copied');
        setTimeout(() => { setIsCopy('Copy link'); }, 2000);
    };

    return (
        <>
        
                <div className="card">
                    <div className="card-content">
                    <div className="flex align-center">
                        <div className="cat">{props.cat === "Member Stories" ? "Member Marketing" : (props.cat)}</div>
                        {props.new ? <div className="new">{props.new}</div> : ''}
                    </div>
                        <span className="title">
                            {props.title}
                            </span>
                        <p className="desc">{props.desc}</p>
                        {props.hide ? <div className="disclaimer flex align-center"><i class="fa-solid fa-circle-xmark"></i><span>Do not forward link externally. Share live with clients/prospects only.</span></div> : ''}
                        <div className="date"><i class="fa-regular fa-calendar" /> {props.date}</div>
                        
                        
                        
                    </div>
                    <div className="flex links">
                            <a href={props.url} target="_blank">View resource <i class="fa-solid fa-arrow-up-right-from-square" /></a>
                            <a onClick={copy} className={isCopy} target="_blank">{isCopy} <i class="fa-regular fa-copy" /></a>
                    </div>
                </div>
            
       </>
    )
}

export default PlayCard;