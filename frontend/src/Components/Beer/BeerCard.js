import React from "react";
import AddReviewForm from "../Review/AddReviewForm";
import ReviewCard from "../Review/ReviewCard";


export default function BeerList(props) {

    const[selected, setSelected] = React.useState(false)
    const[reviews, setReviews] = React.useState(null)
    const[rating, setRating] = React.useState(0)

    let totalScore = 0;

    const beerHref = "/BeerDetails/" + props.beerId;
    const customReviewsUrl = "http://localhost:8081/reviews/" + props.beerId;
    const customRatingUrl = "http://localhost:8081/beer/rating/" + props.beerId;


    function toggle(){
        setSelected(oldSelect => !oldSelect)
    }

    React.useEffect(() => {
        fetch(customReviewsUrl)
            .then(res => res.json())
            .then(data => setReviews(data.map(review => 
                <ReviewCard
                    reviewId={review.reviewId}
                    author={review.reviewAuthor}
                    rating={review.rating}
                    review={review.review}
                />
        )))
        fetch(customRatingUrl)
            .then(res => res.json())
            .then(data => setRating(data))
    })
    
    //TODO:
    //able to arrange list by rating? alphabet? Brewery? 

return(
    <div className="beercard">
            <img src={props.beerImage} className='cardImage'/>
            <div className="beercard-details">
                <h2>{props.beerName}</h2>
                <h4 className="beerType">Type: {props.beerType}</h4> 
                {rating != 0 && <h5>Average Rating: {rating}/ 5</h5>}
                <div className="accordion">
                        <div className={selected ? 'info show' : 'info'}>
                            <h6 className="beerAbv">ABV: {props.beerAbv}</h6>
                            <h6 className="beerDesc">{props.beerDesc}</h6>
                            <h6 className="brewedBy">Brewed by Brewery ID# {props.brewery}</h6>
                            {reviews != 0 
                            ? <div className='review-section'>
                                <h6>Here's what other Toasters have to say about this beer!</h6>
                                <div className = 'reviews-container'>
                                    {reviews}
                                </div>
                              </div> 
                            : <strong>No reviews for this beer, be the first to leave a review!</strong>}

                        <AddReviewForm
                            beerId={props.beerId}
                        />
                    
                        </div>
                    <div className="title" onClick={toggle}>
                        <h6>{selected ? 'See less...' : 'See more...'}</h6>
                        
                    </div>
            
                </div>
            </div>
            
    </div>    
)
}