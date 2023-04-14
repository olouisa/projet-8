import Card from "../components/Card";
import Banner from "../components/Banner";
import "../styles/Home.css";
import { useLogement } from "../Hooks";

function Home() {
   const {logement} = useLogement();
    return (
        <div className="container">
        <Banner/> 
        <div className="Gallery">
            {
                logement.map((item) => {
                    return ( <Card id={item.id} title={item.title} cover={item.cover}  /> 
                    )

                })
            }
        </div>
        </div>

    )
}
export default Home;