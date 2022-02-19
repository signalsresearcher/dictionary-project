import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
    return (
        <section className="Photos">
            <div className="row-6"> 
            {props.photos.map(function (photo, index) {
            
                return ( <img src={photo.src.tiny} key={index} alt="image"/>
                );
                })}
            </div>
        </section>
    );
    } else {
        return null;
    }
}