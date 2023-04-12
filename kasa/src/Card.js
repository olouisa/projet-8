import React from "react";
import "./Home.css";
import Data from "./CardItems";
import { Link } from "react-router-dom";


function Card({title, cover}) {
    return (
     
                <div className="Card">
                    <Link className="CardLink" to="/FicheLogement">
                   <div className="divImg"><img className="imgCard" src={cover} alt="photo"/></div>
                    <div className="h3_container"><h3 className="TitleCard">{title}</h3></div>
                    </Link>
                </div>
          
    )
}

export default Card;