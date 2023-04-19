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
    const { logement } = useLogement();
    useEffect(() => {
        console.log(logement);
        console.log(logement.length);


    }, []);

    const [Image, setImage] = useState(0);


    const Next = () => {
        console.log(logement.length);
        console.log("click");
        setImage((Image + 1) % img.length);
    }

    const Previous = () => {
        console.log("click");
        setImage((Image - 1 + img.length) % img.length);
    }

    return (
        // <Carousel>

        //     {img.map((item, index) => {
        //         return (
        //             <div className="slides"><img className="slidesImg" src={item} alt="" /></div>
        //         )
        //     })}
        // </Carousel>


        <div className="slidesBanner">
            <div className="slides"><img className="slidesImg" src={img[Image]} alt="" /></div>
            <div className="right_arrow" onClick={Next} ><img className="right_arrow_img" src={Right_Arrow} alt="Flèche droite" /></div>
            <div className="left_arrow" onClick={Previous}><img className="left_arrow_img" src={Left_Arrow} alt="Flèche gauche" /></div>
            <div className="pagination">{Image+1}/{img.length}</div>


        </div>
    )
}





export default SlidesBanner;