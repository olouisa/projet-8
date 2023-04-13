import React from "react";
import Data from "./CardItems";
import pictures from "./CardItems";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function SlidesBanner(){


    <Carousel className="Carousel">
       <div>
        { Data.map((item) => {
            console.log(Data.title);
        return (
             <div>
        <img className="SlidePicture" src={pictures} alt="" />
         </div>
        )})}
        </div>
       
    </Carousel>


}


export default SlidesBanner;