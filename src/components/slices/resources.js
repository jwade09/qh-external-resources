import React from "react";
import { PrismicRichText } from "@prismicio/react";
import PlayCard from "../play-card";

export const Resources = (props) => {
    
    return (
        <>
            <div className="pl">
                <h2>{props.slice.primary.resource_title.text}</h2>
                <PrismicRichText field={props.slice.primary.resource_description.richText} />
            </div>
            <div className="ais-Hits-list gutter-sm">
            {props.slice.items.map(card =>{
                return <PlayCard title={card.resource.document.data.title.text} url={card.resource.document.data.resource.url} desc={card.resource.document.data.description.text} cat={card.resource.document.data.category} date={card.resource.document.data.date_created} />
            })}
            </div>
        </>
    )
}