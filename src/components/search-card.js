import * as React from "react"

const SearchCard = ({hit}) => {

    console.log(hit)

    return (
        <>
        <a href={hit.data.resource.url} target="_blank">
                <div className="card-content">
                    <span className="title">
                        {hit.data.title.text}
                        </span>
                    <div className="desc" dangerouslySetInnerHTML={{ __html: hit.data.description.html }} />
                    <div className="date">{hit.data.date_created}</div>
                </div>
            </a>
       </>
    )
}

export default SearchCard;