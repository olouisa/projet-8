import React from "react";
import Data from "./CardItems";
import { Link } from "react-router-dom";
import SlidesBanner from "./SlidesBanner";
import "./FicheLogement.css";
import Accordion from "./Accordion";


function FicheLogement() {
    return (
        <div className="container">
        <SlidesBanner />
        <div className="main">
            <div className="left_column">
                <h1 className="title"></h1>
                <h3 className="location"></h3>
                <div className="tags"></div>
                <Accordion title="Description" />
            </div>
             <div className="right_column">
                <div className="name_and_photo">
                    <p className="name"></p>
                    <div className="photo"><img className="photo_img" src="" alt="photo"/></div>
                    <div className="rating"></div>
                </div>
             <Accordion title="Équipements"/>
            </div>
         </div>
        </div>

    )
}

export default FicheLogement;