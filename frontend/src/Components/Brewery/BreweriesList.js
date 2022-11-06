import React from "react";
import Navbar from "../Home/Navbar";
import BreweryDetails from "../Brewery/BreweryDetails";

export default function BreweriesList() {
    //TODO: change hardcoded values to props, map over data list. pics should alternate
    //left to right by line for interest and visual distinction from beer list
    //each "card" should be clickable to direct to brewery detaisl for that brewery 

return(
    <div>
        <Navbar />
    <a href="./BreweryDetails" className="brewerycard">
            <img src="./Images/MoesTavern.jpg" className="card-image" />
            <div className="card-details">
                <h1>Moe's Tavern </h1>
                <h4 className="address">ADDRESS Main st, Springfield MA</h4> 
                <h4 className="hours">HOURS: 4pm-2am weekdays & Saturday, Sunday 12pm-10pm</h4>
                <h3>Rating: &#127866; &#127866;</h3>
            </div>
            </a>
            <a href="./BreweryDetails" className="brewerycard">
            <img src="https://imageio.forbes.com/specials-images/imageserve/495572400/Cheers-Boston-Beacon-Hill--formerly-the-Bull-and-Finch-Pub----/960x0.jpg?format=jpg&width=960" className="card-image" />
            <div className="card-details">
                <h1>Cheers</h1>
                <h4 className="address">Basement of the Bull & Finch Pub, Beacon Hill, Boston</h4> 
                <h4 className="hours">HOURS: 8pm-8:30pm Thursdays</h4>
                <h3>Rating: &#127866; &#127866; &#127866; &#127866;</h3>
            </div>
            </a>
        </div>
)
}