import "./APropos.css";
import Arrow from "./Arrow.png";
import { useState } from "react";




function Accordion({title, content}) {
    const [active, setactive] = useState(false);
   const Toggle = (e) => {
    console.log(e);
   }
    return (
        <div className="accordion">
            <div className="accordionTitle" onClick={Toggle}>{title}<div className="arrow"><img src={Arrow} alt="flèche d'ouverture/fermeture"/></div></div>
            <div className="accordionContent">{content}</div>
        </div>
    )


}










export default Accordion;