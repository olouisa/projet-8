import React from "react";
import BannerPropos from "../components/BannerPropos";
import "../styles/Home.css";
import "../styles/APropos.css";
import "../styles/Footer.css"
import Accordion from "../components/Accordion";
import Data2 from "../Lists/AccordionItems";



function APropos() {

    return (
        <div className="container" >
            <BannerPropos />
            {
                Data2.map((item) => {
                    return (
                        <Accordion title={item.title} content={item.content} />
                    )
                })
            }


        </div>
    )
}

export default APropos;