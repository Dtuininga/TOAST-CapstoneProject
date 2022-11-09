import React from "react";
import Navbar from "../Home/Navbar";
import BreweryDetails from "./BreweryDetails";
import { checkPropTypes } from "prop-types";

export default function BreweriesList(props) {
    //TODO: change hardcoded values to props, map over data list. pics should alternate
    //left to right by line for interest and visual distinction from beer list
    //each "card" should be clickable to direct to brewery detaisl for that brewery 

    const [clicked, setClicked]= React.useState(false)

    function toggle(){
        setClicked(oldClick => !oldClick)
        console.log('clicked')
    }


    return(
    <div onClick={toggle}>
    <a href={props.brewLink} className="brewerycard">
            <img src={props.brewImage} className="cardImage" />
            <div className="card-details">
                <h1>{props.brewName}</h1>
                <h4 className="address">Address: {props.brewAddress}</h4> 
                <h4 className="hours">Hours: {props.brewHours}</h4>
                <h4>Rating: {props.brewRating}</h4>
                {clicked && <h4>{props.history}</h4>} 
            </div>
            </a>
           </div>
)
}