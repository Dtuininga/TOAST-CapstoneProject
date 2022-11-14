import React from "react";
// import BreweryDetails from "./BreweryDetails";
import BeerList from "../Beer/BeerCard";
import BeerCard from '../Beer/BeerCard'

export default function BreweryData(props) {
    const[beerArray, setBeerArray] = React.useState([])

    React.useEffect(()=>{
        fetch(`http://localhost:8081/beersbybrewery/${props.breweryId}`)
        .then(res => res.json())
        .then(data => setBeerArray(data.map(item => <BeerCard beerId={item.beerId} beerImage={item.beerImg} brewery={item.breweryId} beerAbv={item.beerAbv} beerName={item.beerName} beerType={item.beerType} beerDesc={item.beerDescription}  />)))
    },[props.breweryId])

    return(
        <div>
       
        <div className="breweryHeader">
        <img src={props.breweryImg} className="breweryBanner" />
        <h1 className="breweryName"> {props.breweryName}</h1>
        </div>
        <div className="breweryDetails">
            <div className="breweryInfo">
            <p>address: {props.breweryAddress}</p>
            <p>hours: {props.breweryHours}</p>
            <p>contactPhone: {props.breweryPhone}</p>
            <p>contactEmail: {props.breweryEmail}</p>
            <p>{props.breweryHistory}</p>
            <p>Website: {props.breweryWebsite}</p>
            </div>
            <div className='beerList content'>
            {beerArray}
        </div>

        </div>

        </div>
    )

}