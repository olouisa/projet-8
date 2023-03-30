import { Link } from "react-router-dom";



function Header() {
    return (
        <header>
            <nav>
                <ul>
                   <li><Link to="Home">Accueil</Link></li>

                    <li><Link to="APropos">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;