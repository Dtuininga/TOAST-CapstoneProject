import React from "react";


export default function BeerList() {
    //TODO: change hardcoded values to props, map over data list. Have Navbar appear when list by itself
    //able to arrange list by rating? alphabet? 

        //fetch: get all beers
return(
    <div>
    <a href="./BeerDetails" className="beercard">
            <img src="https://pyxis.nymag.com/v1/imgs/1ef/403/49499034ebf7c1fc90c366162319691a36-13-duff-beer.rsquare.w700.jpg" className="beercard-image" />
            <div className="beercard-details">
                <h1>Name: Duff</h1>
                <h4 className="beerType">lager</h4> 
                <h4 className="beerDesc">Sweet nectar of the gods. Endorsed by Duffman himself.</h4>
                <h3>Rating: &#127866; &#127866;</h3>
            </div>
            </a>
            <a href="./BeerDetails"  className="beercard">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d8/85/f5/duff-beer.jpg?w=200&h=-1&s=1" className="beercard-image" />
            <div className="beercard-details">
                <h1>Name: Duff Lite</h1>
                <h4 className="beerType">lite beer</h4> 
                <h4 className="beerDesc">Sweet nectar of the gods. Endorsed by Duffman himself.</h4>
                <h3>Rating: &#127866; &#127866;</h3>
            </div>
            </a>
            <a href="./BeerDetails"  className="beercard">
            <img src="https://i.ebayimg.com/images/g/q~wAAOSwleBfpxFj/s-l500.jpg" className="beercard-image" />
            <div className="beercard-details">
                <h1>Name: Duff Gold</h1>
                <h4 className="beerType">lager</h4> 
                <h4 className="beerDesc">Sweet nectar of the gods. Endorsed by Duffman himself.</h4>
                <h3>Rating: &#127866; &#127866;</h3>
            </div>
            </a>
        </div>
        
        
)
}