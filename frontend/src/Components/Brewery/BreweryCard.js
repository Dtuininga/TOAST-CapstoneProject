import React from "react";
import Navbar from "../Home/Navbar";
import BreweryDetails from "./BreweryDetails";
import { checkPropTypes } from "prop-types";

export default function BreweriesList(props) {
    //TODO: change hardcoded values to props, map over data list. pics should alternate
    //left to right by line for interest and visual distinction from beer list
    //each "card" should be clickable to direct to brewery detaisl for that brewery 

    const[brewSelected, setBrewSelected] = React.useState(false)

    function toggle(){
        setBrewSelected(oldSelect => !oldSelect)
    }


    return(
    <div className="brewerycard">
    
            <img src={props.brewImage} className="cardImage" />
            <div className="card-details">
                <h1>{props.brewName}</h1>
                <h4 className="address">Address: {props.brewAddress}</h4> 
                <h4 className="hours">Hours: {props.brewHours}</h4>
                <h4>Rating: {props.brewRating}</h4>
                <div className="accordion">
                <div className={brewSelected ? 'info show' : 'info'}>
                        <div>Hi</div>
                        <div>Hello</div>
                        <div>Howdy</div>
                        <div>Howareya</div>
                        </div>
                    <div className="title" onClick={toggle}>
                        <h6>{brewSelected ? 'See less...' : 'See more...'}</h6>
                        
                    </div>
            
                </div> 
            </div>
            
           </div>
)
}