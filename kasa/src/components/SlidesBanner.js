import React from "react";
import { useEffect, useState } from "react";
import "../styles/SlidesBanner.css";
import Right_Arrow from "../assets/right_arrow.png";
import Left_Arrow from "../assets/left_arrow.png";
import { useLogement } from "../Hooks";



function SlidesBanner({ img }) {
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

        <div className="slidesBanner">
            <div className="slides"><img className="slidesImg" src={img[Image]} alt="" /></div>
            <div className={img.length > 1 ? `right_arrow` : `arrows_hidden`} onClick={Next} ><img className="right_arrow_img" src={Right_Arrow} alt="Flèche droite" /></div>
            <div className={img.length > 1 ? `left_arrow` : `arrows_hidden`} onClick={Previous}><img className="left_arrow_img" src={Left_Arrow} alt="Flèche gauche" /></div>
            <div className={img.length > 1 ? `pagination` : `pagination_hidden`}>{Image + 1}/{img.length}</div>


        </div>
    )
}

export default SlidesBanner;