import React from "react";


export default function BeerList(props) {

    const[selected, setSelected] = React.useState(false)

    function toggle(){
        setSelected(oldSelect => !oldSelect)
    }

    //TODO:
    //able to arrange list by rating? alphabet? 

        //fetch: get all beers
return(
    <div className="beercard">
            <img src={props.beerImage} className='cardImage'/>
            <div className="beercard-details">
                <h1>{props.beerName}</h1>
                <h4 className="beerType">Type: {props.beerType}</h4> 
                <h4 className="beerDesc">{props.beerDesc}</h4>
                <h3>Rating: {props.beerRating}</h3>
                <div className="accordion">
                <div className={selected ? 'info show' : 'info'}>
                        <div>Hi</div>
                        <div>Hello</div>
                        <div>Howdy</div>
                        <div>Howareya</div>
                        </div>
                    <div className="title" onClick={toggle}>
                        <h6>{selected ? 'See less...' : 'See more...'}</h6>
                        
                    </div>
            
                </div>
            </div>
            
    </div>    
)
}