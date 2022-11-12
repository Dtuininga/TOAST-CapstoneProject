import React from "react";
import Navbar from "../Home/Navbar";
import BreweryDetails from "./BreweryDetails";
import { checkPropTypes } from "prop-types";
import {Switch, Route, Redirect, Link, useParams} from 'react-router-dom'


export default function BreweriesList(props) {
    //TODO: 
    //each "card" should be clickable to direct to breweryDetails for that brewery 
    

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
                <h4>Rating: {props.brewRating}  (breweryID={props.breweryId})</h4> 
                <div className="accordion">
                <div className={brewSelected ? 'info show' : 'info'}>
                        <div>Phone: {props.phone}</div>
                        <div>Email: {props.email}</div>
                        <div>Website: {props.website}</div>
                        <div>{props.history}</div>
                        <Link to={`/BreweryDetails/${props.breweryId}`} className="breweryLink" >Brewery Details & Brew List</Link>
                        </div>
                    <div className="title" onClick={toggle}>
                        <h6>{brewSelected ? 'See less...' : 'See more...'}</h6>
                        
                    </div>
            
                </div> 
            </div>
            <Switch>
                    <Route path={'/:'}  component={() => <BreweryDetails />}/>
                    
                </Switch>
           </div>
)
//replace the "Link to" information on line 35 with just {"/BreweryDetails"} to remove the janky useParams stuff
}