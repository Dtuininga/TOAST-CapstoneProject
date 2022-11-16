import React from 'react'
import BeerCard from './BeerCard'
import {useStore} from 'react-redux'
import axios from 'axios'

function BeerList(props){
    const[beerArray, setBeerArray] = React.useState([])
    const[isHidden, setIsHidden] = React.useState(true)

    const [formData, setFormData] = React.useState({
        reviewId: "",
        beerId: ""
    })

    const store = useStore()
    const userState = store.getState()
    const username = userState.user.username ? userState.user.username : "No User"
    const role = userState.user.authorities.length > 0 ? userState.user.authorities[0].name : "No role"
    const token = store.getState().token.token

    console.log("Role = " + role)
    console.log("Username = " + username)

    React.useEffect(()=>{
        fetch('http://localhost:8081/beers', {headers: {'Authorization' : 'Bearer ' + token}})
        .then(res => res.json())
        .then(data => setBeerArray(data.map(item => <BeerCard  role={role} beerId={item.beerId} beerImage={item.beerImg} brewery={item.breweryId} beerAbv={item.beerAbv} beerName={item.beerName} beerType={item.beerType} beerDesc={item.beerDescription}  />)))
    },[])

    function showElement() {
        setIsHidden("")
    }

    function hideElement() {
        setIsHidden("hidden")
    }

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
        console.log(formData)
    }

    function handleDeleteReview (event) {
        event.preventDefault()
        axios.delete("http://localhost:8081/deleteReview/" + parseInt(formData.reviewId))
        setFormData(prevFormData => ({
            ...prevFormData,
            reviewId: ""
        }))
        alert("Review Deleted!")
    }

    function handleDeleteBeer(event) {
        event.preventDefault()
        axios.delete("http://localhost:8081/deletebeer/" + parseInt(formData.beerId))
        setFormData(prevFormData => ({
            ...prevFormData,
            beerId: ""
        }))
        alert("Beer Deleted!")
    }

    // console.log(beerArray)

    return(
        <div className='beerList content'>
            {beerArray}
            {role === "ROLE_ADMIN" && <div className='admin-tools' onMouseEnter={showElement} onMouseLeave={hideElement}>
                <h2 className='show-tools'>Admin Tools</h2>
                <div className={isHidden ? "hidden" : ""}>
                    <form>
                        <div className='delete-review-form'>
                            <label for='reviewId' className='reviewId-label'>Review ID</label>
                            <input type='number' id='reviewId' name='reviewId' value={formData.reviewId} onChange={handleChange}></input>
                            <button className='delete-button' onClick={handleDeleteReview}>Delete Review</button>
                        </div>

                        <div className='form-separator'></div>

                        <div className='delete-beer-form'>
                            <label for='beerId' className='beerId-label'>Beer ID</label>
                            <input type='number' id='beerID' name='beerId' value={formData.beerId} onChange={handleChange}></input>
                            <button className='delete-button' onClick={handleDeleteBeer}>Delete Beer</button>
                        </div>
                    </form>
                </div>
            </div>}
        </div>
    )
}

export default BeerList