import "./APropos.css";
import Arrow from "./Arrow.png";
import { useState } from "react";
import Data2 from "./AccordionItems";




function Accordion({title, content}) {
    const [text, setText] = useState(false);
   const Toggle = (e) => {
   setText(!text);
   }
    return (
        <div className="Accordions">
            {Data2.map((item) => {
                return (
                <div className="accordion">
                <div className="accordionTitle" onClick={Toggle}>{item.title}<div className="arrow"><img className="arrowimg" src={Arrow} alt="flèche d'ouverture/fermeture"/></div></div>
                <div className="accordionContent">{item.content}</div>
            </div>
                )

            })
        
       
        }
    </div>
    )


        }










export default Accordion;