import { Link } from "react-router-dom";
import Logo from "./LOGO.png";
import "./Header.css";



function Header() {
    return (
        <header className="header">
            <div className="logoDiv"><img className="logoImg" src={Logo} alt="Logo de Kasa"/></div>
            <nav className="navHeader">
                <ul className="listHeader">
                   <li className="puceLink"><Link className="Link" to="/">Accueil</Link></li>

                    <li  className="puceLink"><Link className="Link" to="APropos">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;