import "../styles/Home.css";
import LogoFooter from "../assets/LogoFooter.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="divLogoFooter"><img className="imgLogoFooter" src={LogoFooter} /></div>
            <p className="textFooter">© 2020 Kasa. All rights reserved</p>

        </footer>
    )
}

export default Footer;