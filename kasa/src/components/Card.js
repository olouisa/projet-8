import React from "react";
import "../styles/Home.css";
import { redirect, useNavigate } from "react-router-dom";
import NotFound from "../pages/NotFound";



function Card({title, cover, id}) {
    let navigate = useNavigate();

    const propriete = () => {
        console.log("click");
      navigate("/FicheLogements/"+id)
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