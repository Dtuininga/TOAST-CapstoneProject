import React from "react";


export default function BeerList(props) {
    //TODO:
    //able to arrange list by rating? alphabet? 

        //fetch: get all beers
return(
    <div>
    <a href={props.beerLink} className="beercard">
            <img src={props.beerImage} className='cardImage'/>
            <div className="beercard-details">
                <h1>{props.beerName}</h1>
                <h4 className="beerType">Type: {props.beerType}</h4> 
                <h4 className="beerDesc">{props.beerDesc}</h4>
                <h3>Rating: {props.beerRating}</h3>
            </div>
            </a>
    </div>    
)
}