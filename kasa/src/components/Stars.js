import React, { useEffect } from 'react';
import { useLogement } from '../Hooks';
import  "../styles/Stars.css";

const fullStars = [
    <i className="fa-solid fa-star" style={{ color: "#FF6060" }}></i>,
    <i className="fa-solid fa-star" style={{ color: "#FF6060" }}></i>,
    <i className="fa-solid fa-star" style={{ color: "#FF6060" }}></i>,
    <i className="fa-solid fa-star" style={{ color: "#FF6060" }}></i>,
    <i className="fa-solid fa-star" style={{ color: "#FF6060" }}></i>
]

const emptyStars = [
    <i className="fa-solid fa-star" style={{ color: "#E3E3E3" }}></i>,
    <i className="fa-solid fa-star" style={{ color: "#E3E3E3" }}></i>,
    <i className="fa-solid fa-star" style={{ color: "#E3E3E3" }}></i>,
    <i className="fa-solid fa-star" style={{ color: "#E3E3E3" }}></i>,
    <i className="fa-solid fa-star" style={{ color: "#E3E3E3" }}></i>,

]





function Stars({ rating }) {
    const length = emptyStars.length;
    useEffect(() => {
        console.log(fullStars);
        console.log(emptyStars.length);
        console.log(logement);
        console.log(rating);
    }, []);

    const { logement } = useLogement();
    return (
        <div className="stars">
            {fullStars.slice(5 - rating).map((item) => {
                return (
                    <span>{item}</span>
                )
            })}
      {emptyStars.slice(rating).map((item) => {
                return (
                    <span>{item}</span>
                )
            })}

        </div>
    )
}

export default Stars

