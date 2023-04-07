import React from "react";
import "./Home.css";
import Data from "./CardItems";


function Card({title, cover}) {
    return (
     
                <div className="Card">
                   <div className="divImg"><img className="imgCard" src={cover} alt="photo"/></div>
                    <div className="h3_container"><h3 className="TitleCard">{title}</h3></div>
                </div>
          
    )
}

export default Card;