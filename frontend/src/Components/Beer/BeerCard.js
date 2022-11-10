import React from "react";


export default function BeerList(props) {

    const[selected, setSelected] = React.useState(false)

    function toggle(){
        setSelected(oldSelect => !oldSelect)
    }

    //TODO:
    //able to arrange list by rating? alphabet? Brewery? 

return(
    <div className="beercard">
            <img src={props.beerImage} className='cardImage'/>
            <div className="beercard-details">
                <h2>{props.beerName}</h2>
                <h4 className="beerType">Type: {props.beerType}</h4> 
                <h5>Rating: {props.beerRating}</h5>
                <div className="accordion">
                        <div className={selected ? 'info show' : 'info'}>
                            <h6 className="beerAbv">ABV: {props.beerAbv}</h6>
                            <h6 className="beerDesc">{props.beerDesc}</h6>
                            <h6 className="brewedBy">Brewed by: {props.breweryId}</h6>
                            <a href="/BeerDetails" className="breweryLink">For this beer's full details and reviews, click here!</a>
                        </div>
                    <div className="title" onClick={toggle}>
                        <h6>{selected ? 'See less...' : 'See more...'}</h6>
                        
                    </div>
            
                </div>
            </div>
            
    </div>    
)
}