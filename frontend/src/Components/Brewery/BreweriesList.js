import React from "react";
import Navbar from "../Home/Navbar";

export default function BreweriesList() {
    //TODO: change hardcoded values to props, map over data list. pics should alternate
    //left to right by line for interest and visual distinction from beer list

return(
    <div>
        <Navbar />
    <div className="brewerycard">
            <img src="./Images/MoesTavern.jpg" className="card-image" />
            <div className="card-details">
                <h1>Moe's Tavern </h1>
                <h4 className="address">ADDRESS Main st, Springfield MA</h4> 
                <h4 className="hours">HOURS: 4pm-2am weekdays & Saturday, Sunday 12pm-10pm</h4>
                <h3>Rating: &#127866; &#127866;</h3>
            </div>
            </div>
        </div>
)
}