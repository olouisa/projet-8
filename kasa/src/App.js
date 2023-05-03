import "./styles/App.css";
import RoutesApp from "./Routes";
import "./styles/Home.css";
import "./styles/Footer.css";
import { useLogement } from "./Hooks";
import { useOneLogement } from "./Hooks";
import { useParams } from "react-router-dom";


function App() {
 
  return (
    <RoutesApp  />

  );
}

export default App;
