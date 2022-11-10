import React from "react";


export default function ReviewCard(props) {
//formatting matches BreweryList or BeerList? (incomplete)


return(
    
    <div className="reviewcard">
            <div className="reviewheader">
                Reviewer: {props.username} Rating: {props.brewRating}
                </div>

            <div className="reviewcard-details">
                <h4>Beer: {props.brewName}</h4>
                <p className="reviewBody">"I liked this beer"</p>
                
            </div>
           </div>
)
}