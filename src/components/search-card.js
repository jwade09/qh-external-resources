import * as React from "react"
import { useState } from "react";

const SearchCard = ({hit}) => {
    console.log(hit.data.hide_disclaimer)
    const [isCopy, setIsCopy] = useState('Copy link');


    const copy = () => {
        navigator.clipboard.writeText(hit.data.resource.url);
        setIsCopy('Copied');
        setTimeout(() => { setIsCopy('Copy link'); }, 3000);
    };  

    return (
        <>
        
                <div className="card-content">
                    <span className="title">
                        {hit.data.title.text}
                        </span>
                    <div className="desc" dangerouslySetInnerHTML={{ __html: hit.data.description.html }} />
                    {hit.data.hide_disclaimer ? <div className="disclaimer flex align-center"><i class="fa-solid fa-circle-xmark"></i><span>Do not forward link externally. Share live with clients/prospects.</span></div> : ''}
                    <div className="date"><i class="fa-regular fa-calendar" /> {hit.data.date_created}</div>
                    
                    
                </div>
                <div className="flex links">
                        <a href={hit.data.resource.url} target="_blank">View resource <i class="fa-solid fa-arrow-up-right-from-square" /></a>
                        <a onClick={copy} className={isCopy} target="_blank">{isCopy} <i class="fa-regular fa-copy" /></a>
                    </div>
            
       </>
    )
}

export default SearchCard;