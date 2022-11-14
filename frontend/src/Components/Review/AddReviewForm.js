import React from 'react'

export default function AddReviewForm(props) {
    const [reviewAuthor, setReviewAuthor] = React.useState();


    function handleSubmit() {
        const reviewFormData = {}
    }

    return (
        <form>
            <input type='text' placeholder='Leave your review here!'></input>
            <select>
                <option value='placeholder'>---Your Rating---</option>
                <option value='1'>&#127866;</option>
                <option value='2'>&#127866;&#127866;</option>
                <option value='3'>&#127866;&#127866;&#127866;</option>
                <option value='4'>&#127866;&#127866;&#127866;&#127866;</option>
                <option value='5'>&#127866;&#127866;&#127866;&#127866;&#127866;</option>
            </select>
        </form>
    )
}