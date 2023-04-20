import React from "react";
import Data from "../Lists/CardItems";
import { Link, useParams } from "react-router-dom";
import SlidesBanner from "../components/SlidesBanner";
import Accordion from "../components/Accordion";
import "../styles/FicheLogement.css";
import { useOneLogement } from "../Hooks";
import Stars from "../components/Stars";
import Stars2 from "../components/Stars2";



function FicheLogement() {
    const { id } = useParams();
    const { logement } = useOneLogement(id);
    console.log(logement);


    return (
        <div className="container">
            <SlidesBanner img={logement.pictures} />
            <div className="main">
                <div className="colums">
                    <div className="left_column">
                        <h1 className="title">{logement.title}</h1>
                        <h3 className="location">{logement.location}</h3>
                        <div className="tags_container">
                            {logement.tags.map((tag) => {
                                return (
                                    <div className="tags">{tag}</div>

                                )
                            })}</div>

                    </div>
                    <div className="right_column">
                        <div className="name_and_photo">
                            <p className="name">{logement.host.name}</p>
                            <div className="photo"><img className="photo_img" src={logement.host.picture} alt="photo" /></div>
                        </div>
                        <Stars rating={logement.rating} />


                    </div>
                </div>

                <div className="Accordions2">
                    <Accordion title="Description" content={logement.description} />


                    <Accordion title="Équipements" content={logement.equipments.map((item) => {
                        return (
                            <ul className="list">
                                <li className="listElement">{item}</li>
                            </ul>)
                    })} />

                </div>

            </div>
        </div>

    )
}

export default FicheLogement;