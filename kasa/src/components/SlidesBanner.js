import React from "react";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../styles/SlidesBanner.css";
import Right_Arrow from "../assets/right_arrow.png";
import Left_Arrow from "../assets/left_arrow.png";
import Data from "../Lists/fichierJSON.json";
import { useLogement } from "../Hooks";



function SlidesBanner({ id, img }) {
    const {logement} = useLogement();
    useEffect(() => {
        console.log(logement);
        
    }, [])
    return (
        <div className="slidesBanner">
            <div className="slides"><img  className="slidesImg" src={img[0]} alt="" /></div>
            <div className="right_arrow"><img className="right_arrow_img" src={Right_Arrow} alt="Flèche droite" /></div>
            <div className="left_arrow"><img className="left_arrow_img" src={Left_Arrow} alt="Flèche gauche" /></div>


        </div>
    )
}





export default SlidesBanner;