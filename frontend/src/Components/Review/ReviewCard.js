import React from 'react'

export default function ReviewCard(props) {
    
    return (
        <div className='review'>
            {props.role === "ROLE_ADMIN" && <h3 className='review-id'>Review ID: {props.reviewId}</h3>}
            <h3 className='review-author'>{props.author}</h3>
            <h5 className='review-rating'>Rating: {props.rating}</h5>
            <p className='review-body'>Review: {props.review}</p>
        </div>
    )
}