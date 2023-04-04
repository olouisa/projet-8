import React from "react";
import "./Home.css";
import Img from "./IMGbanner.png";

function Banner() {
    return (
    <div className="banner">
        <div className="imgBannerdiv"><img className="imgBanner" src={Img} alt="Image de montagnes"/></div>
        <h3 className="TitleBanner">Chez vous, partout et ailleurs</h3>
    </div>
    )
}

export default Banner;