import React from "react";
import BannerPropos from "./BannerPropos";
import "./Home.css";
import "./APropos.css";
import Accordion from "./Accordion";


function APropos() {
    
    return (
<div className="container" > 
        <BannerPropos/>
        <div className="Accordions">
            <Accordion title="Titre 1" content="Contenu 1" />
            <Accordion title="Titre 2" content="Contenu 2"/>
            <Accordion title="Titre 3" content="Contenu 3"/>
            <Accordion title="Titre 4" content="Contenu 4"/>

        </div>
        </div>
    )
}

export default APropos;