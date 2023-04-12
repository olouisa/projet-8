import React from "react";
import Data from "./CardItems";
import pictures from "./CardItems";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function SlidesBanner({item}){


    <Carousel className="Carousel">
       
        { pictures.map((item) => {
        return (
             <div>
        <img className="SlidePicture" src={item.pictures} alt="" />
         </div>
        )})}
       
    </Carousel>


}


export default SlidesBanner;