import React from "react";
import Navbar from "../Home/Navbar";
import BeerList from "../Beer/BeerList"

export default function BeerDetails() {
    //ToDo: add review list to bottom, pretty up the info text, shrink pic with window resize, standardize pic size/aspect
    // use math for average rating


        return(
            <div>
            <Navbar />
               <div className="beerStats">
                <div className="beerImage">
                 <img src="https://pyxis.nymag.com/v1/imgs/1ef/403/49499034ebf7c1fc90c366162319691a36-13-duff-beer.rsquare.w700.jpg" className="breweryBanner" />
                </div>
                <div className="beerInfo">
                    <h1 className="beerName">Duff</h1>
                    <a href="./BreweryDetails" >Brewed by: Moe's Tavern</a>
                    <ul>
                    <li>Beer Type: Lager</li>
                    <li>ABV: 4.6%</li>
                    <li>Description: Sweet nectar of the gods. Endorsed by Duffman himself.</li>
                    <li>Average Rating: &#127866;</li>
                    
                    </ul>
                </div>
                
            </div>
            <div className="reviewSection">
                    (import review section by beer)
            </div>
            </div>
        )

}