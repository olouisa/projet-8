import Card from "./Card";
import Banner from "./Banner";
import "./Home.css";
import Data from "./CardItems";


function Home() {
    return (
        <div className="container">
        <Banner/> 
        <div className="Gallery">
            {
                Data.map((item) => {
                    return ( <Card title={item.title} cover={item.cover}  /> 
                    )

                })
            }
        </div>
        </div>

    )
}
export default Home;