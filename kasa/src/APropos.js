import React from "react";
import BannerPropos from "./BannerPropos";
import "./Home.css";
import "./APropos.css";
import "./Footer.css"
import Accordion from "./Accordion";
import Data2 from "./AccordionItems";



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