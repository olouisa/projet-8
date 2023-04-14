import React from "react";
import "../styles/Home.css";
import Data from "../Lists/CardItems";
import ImgP from "../assets/IMGbanner2.png";

function BannerPropos () {
    return (
    <div className="banner banner2">
                <div className="imgBannerdiv"><img className="imgBanner" src={ImgP} alt="Image de montagnes"/></div>


    </div>
    )
   
}

export default BannerPropos;