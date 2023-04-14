import React from "react";
import "../styles/Home.css";
import Img from "../assets/IMGbanner.png";

function Banner() {
    return (
    <div className="banner">
        <div className="imgBannerdiv"><img className="imgBanner" src={Img} alt="Image de montagnes"/></div>
        <h3 className="TitleBanner">Chez vous, partout et ailleurs</h3>
    </div>
    )
}

export default Banner;