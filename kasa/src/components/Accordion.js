import "../styles/APropos.css";
import Arrow from "../assets/Arrow.png";
import { useState } from "react";




function Accordion({title, content, styleAccordion={}}) {
    const [text, setText] = useState(false);
   const Toggle = (e) => {
   setText(!text);
   }
    return (
        <div style={{ ...styleAccordion}} className="Accordions">
            
                <div className="accordion">
                <div className="accordionTitle" onClick={Toggle}>{title}<div className="arrow"><img className="arrowImg" src={Arrow} alt="flèche d'ouverture/fermeture"/></div></div>
                <div  className={ !text ? `accordionContent_hidden` : `accordionContent`}><div className="accordionContent2">{content}</div></div>
            </div>
                

            
        
       
        
    </div>
    )


        }










export default Accordion;