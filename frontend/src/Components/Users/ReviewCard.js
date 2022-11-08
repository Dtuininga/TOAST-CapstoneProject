import React from "react";
import Navbar from "../Home/Navbar";

export default function ReviewCard(props) {
//formatting matches BreweryList or BeerList? (incomplete)


return(
    <div>
    <a href={props.brewLink} className="reviewcard">
            <h2 className="reviewAuthor">{props.username}</h2>
            <div className="reviewcard-details">
                <h1>{props.brewName}</h1>
                <h4 className="reviewBody">I liked this beer</h4>
                <h4>Rating: {props.brewRating}</h4>
            </div>
            </a>
           </div>
)
}