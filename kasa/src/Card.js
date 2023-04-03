import React from "react";
import "./Card.css";
import Data from "./CardItems";


function Card() {
    return (
        
        <div className="Gallery">
         {Data.map((item) => {
            return (
                <div className="Card">
                   <div className="divImg"><img className="imgCard" src={item.cover} alt="photo"/></div>
                    <h3 className="TitleCard">{item.title}</h3>
                </div>
            )
         })

         }


        </div>
    )
}

export default Card;