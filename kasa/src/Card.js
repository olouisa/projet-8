import React from "react";
import "./Home.css";
import Data from "./CardItems";
import { Link, useNavigate } from "react-router-dom";



function Card({title, cover}) {
    let navigate = useNavigate();

    const propriete = () => {
        console.log("click");
        navigate("/FicheLogements");
        
    }
    
    return (
     
                <div className="Card">
                    <div className="CardLink" onClick={propriete}>
                   <div className="divImg"><img className="imgCard" src={cover} alt="photo"/></div>
                    <div className="h3_container"><h3 className="TitleCard">{title}</h3></div>
                    </div>
                </div>
          
    )
}

export default Card;