import React from "react";
import BreweryDetails from "./BreweryDetails";
import BeerList from "../Beer/BeerCard";

export default function BreweryData(props) {

    return(
        <div>
       
        <div className="breweryHeader">
        <img src={props.breweryImg} className="breweryBanner" />
        <h1 className="breweryName"> {props.breweryName}</h1>
        </div>
        <div className="breweryDetails">
            <div className="breweryInfo">
                <ul>
                <li>Average Beer Score: &{props.breweryRating}</li>
                <li>breweryOwner: {props.userId}</li>
                <li>address: {props.breweryAddress}</li>
                <li>hours: {props.breweryHours}</li>
                <li>contactPhone: {props.breweryPhone}</li>
                <li>contactEmail: {props.breweryEmail}</li>
                <li>{props.breweryHistory}</li>
                <li>Website: {props.breweryWebsite}</li>
                </ul>
            </div>
            <div className="breweryBeers">
                <h4>fetch by brewery id</h4>
                <BeerList />
            </div>

        </div>

        </div>
    )

}