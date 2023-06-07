import * as React from "react"
import { useState } from "react";
import { Link } from "gatsby";

const BookCard = ({hit}) => {
    
    const [isCopy, setIsCopy] = useState('Copy link');


    const copy = () => {
        navigator.clipboard.writeText(hit.data.resource.url);
        setIsCopy('Copied');
        setTimeout(() => { setIsCopy('Copy link'); }, 2000);
    };  

    return (
        <>
            <Link to={`/${hit.uid}`}>
                <div className="card-content">
                    <span className="title">
                        {hit.data.title.text}
                        </span>
                    <div className="desc" dangerouslySetInnerHTML={{ __html: hit.data.description.text }} />
                    
                    
                </div>
            </Link>
       </>
    )
}

export default BookCard;