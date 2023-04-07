import React from "react";
import "./Home.css";
import Data from "./CardItems";
import ImgP from "./IMGbanner2.png";

function BannerPropos () {
    return (
    <div className="banner banner2">
                <div className="imgBannerdiv"><img className="imgBanner" src={ImgP} alt="Image de montagnes"/></div>


    </div>
    )
   
}

export default BannerPropos;