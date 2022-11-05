import React from "react";


export default function BeerList() {
    //TODO: change hardcoded values to props, map over data list. (card duplicated for now 'cos I'm lazy)

return(
    <div>
    <div className="beercard">
            <img src="beerpic.jpg" className="beercard-image" />
            <div className="beercard-details">
                <h1>Name: Duff</h1>
                <h4 className="beerType">lager</h4> 
                <h4 className="beerDesc">Sweet nectar of the gods. Endorsed by Duffman himself.</h4>
                <h3>Rating: &#127866; &#127866;</h3>
            </div>
            </div>
            <div className="beercard">
            <img src="beerpic.jpg" className="beercard-image" />
            <div className="beercard-details">
                <h1>Name: Duff Lite</h1>
                <h4 className="beerType">lite beer</h4> 
                <h4 className="beerDesc">Sweet nectar of the gods. Endorsed by Duffman himself.</h4>
                <h3>Rating: &#127866; &#127866;</h3>
            </div>
            </div>
            <div className="beercard">
            <img src="beerpic.jpg" className="beercard-image" />
            <div className="beercard-details">
                <h1>Name: Duff Gold</h1>
                <h4 className="beerType">lager</h4> 
                <h4 className="beerDesc">Sweet nectar of the gods. Endorsed by Duffman himself.</h4>
                <h3>Rating: &#127866; &#127866;</h3>
            </div>
            </div>
        </div>
        
        
)
}