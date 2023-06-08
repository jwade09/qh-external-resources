import * as React from "react"
import { useState } from "react";
import { Link } from "gatsby";

const BookCard = ({hit}) => {

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