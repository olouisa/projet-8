import { Link } from "react-router-dom";



function NotFound() {
    return (
        <div>
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <Link to="/">Retourner vers la page d'accueil</Link>
        </div>
    )
}

export default NotFound;