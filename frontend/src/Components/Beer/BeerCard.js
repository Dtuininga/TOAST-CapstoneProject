import React from "react";


export default function BeerList(props) {

    const[selected, setSelected] = React.useState(false)
    const[reviews, setReviews] = React.useState("This is where they'll show up")



    const beerHref = "/BeerDetails/" + props.beerId;
    const customFetchUrl = "http://localhost:8081/reviews/" + props.beerId;

    function toggle(){
        setSelected(oldSelect => !oldSelect)
    }

    React.useEffect(() => {
        fetch(customFetchUrl)
            .then(res => res.json())
            .then(data => setReviews(data.map(review => 

            <div className="review-container">
                <h3>{review.reviewAuthor}</h3>
                <h5>Their Rating: {review.rating}</h5>
                <p>{review.review}</p>
            </div>

        )))
    })



    //TODO:
    //able to arrange list by rating? alphabet? Brewery? 

return(
    <div className="beercard">
            <img src={props.beerImage} className='cardImage'/>
            <div className="beercard-details">
                <h2>{props.beerName}</h2>
                <h2>Beer ID: {props.beerId}</h2>
                <h4 className="beerType">Type: {props.beerType}</h4> 
                <h5>Rating: {props.beerRating}</h5>
                <div className="accordion">
                        <div className={selected ? 'info show' : 'info'}>
                            <h6 className="beerAbv">ABV: {props.beerAbv}</h6>
                            <h6 className="beerDesc">{props.beerDesc}</h6>
<<<<<<< HEAD
                            <h6 className="brewedBy">Brewed by: {props.breweryId}</h6>
                            <div>What beer lovers have to say about this beer!</div>
                            <div className = "reviews">{reviews}</div>
                            <a href={beerHref} className="breweryLink">For this beer's full details and reviews, click here!</a>
=======
                            <h6 className="brewedBy">Brewed by Brewery ID# {props.brewery}</h6>
                            <a href="/BeerDetails" className="breweryLink">For this beer's full details and reviews, click here!</a>
>>>>>>> aefe61c55ac77314b3156a60de04ed32e50dfb40
                        </div>
                    <div className="title" onClick={toggle}>
                        <h6>{selected ? 'See less...' : 'See more...'}</h6>
                        
                    </div>
            
                </div>
            </div>
            
    </div>    
)
}