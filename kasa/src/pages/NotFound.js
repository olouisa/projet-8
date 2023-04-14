import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import ErrorImg from "../assets/404.png";


function NotFound() {
    return (
        <div className="ErrorContainer">
        <h1 className="ErrorTitle"><img className="ErrorImg" src={ErrorImg} alt="Erreur 404"/></h1>
        <h3 className="ErrorMessage">Oups! La page que vous demandez n'existe pas.</h3>
        <Link to="/" className="ErrorLink">Retourner vers la page d'accueil</Link>
        </div>
    )
}

export default NotFound;