import React from "react";
import Navbar from "../Home/Navbar";
import BreweryDetails from "./BreweryDetails";
import { checkPropTypes } from "prop-types";

export default function BreweriesList(props) {
    //TODO: change hardcoded values to props, map over data list. pics should alternate
    //left to right by line for interest and visual distinction from beer list
    //each "card" should be clickable to direct to brewery detaisl for that brewery 

    //fetch: get all breweries

    


    return(
    <div>
    <a href={props.brewLink} className="brewerycard">
            <img src={props.brewImage} className="card-image" />
            <div className="card-details">
                <h1>{props.brewName}</h1>
                <h4 className="address">Address: {props.brewAddress}</h4> 
                <h4 className="hours">Hours: {props.brewHours}</h4>
                <h4>Rating: {props.brewRating}</h4>
            </div>
            </a>
           </div>
)
}