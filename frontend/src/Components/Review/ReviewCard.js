import React from 'react'

export default function ReviewCard(props) {
    return (
        <div className='reviewcard'>
            <h1 className='review-author'>{props.reviewAuthor}</h1>
            <span className='review-rating'>Rating: {props.rating}</span>
            <p className='review-body'>Review: {props.review}</p>
        </div>
    )
}