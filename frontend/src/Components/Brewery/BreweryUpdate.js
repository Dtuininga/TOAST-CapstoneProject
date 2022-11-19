import React from "react";
import Navbar from "../Home/Navbar";
import ReviewCard from "../Users/ReviewCard";
import AddBeerForm from "../Beer/AddBeerForm";
import UserDetails from "../Users/UserDetails";
import SmallBeerCard from '../Brewery/SmallBeerCard';
import { useStore } from "react-redux";

export default function BreweryUpdate(props){
//form where brewer can update brewery info and add/deactivate beers
//ToDo: brewery "update changes" button needs to PUT/resubmit any changes to the input fields, and keep spread of input that has not been changed
//ToDo: user profile update needs to allow for avatar and password change (pw change not part of MVP, delete inputs if not viable)


const[beerArray, setBeerArray] = React.useState([])
const store = useStore()
const token = store.getState().token.token

React.useEffect(()=>{
    fetch(`http://localhost:8081/beersbybrewery/${props.breweryId}`, {headers: {'Authorization' : 'Bearer ' + token}} )
    .then(res => res.json())
    .then(data => setBeerArray(data.map(item => <SmallBeerCard beerId={item.beerId} beerImage={item.beerImg} brewery={item.breweryId} beerAbv={item.beerAbv} beerName={item.beerName} beerType={item.beerType} beerDesc={item.beerDescription} isActive={item.beerActive} breweryActive={props.status}/>)))
},[props.breweryId])

    return(
        <div classname="brewerControlBoard">
            <UserDetails username={props.userName} userpic={props.userAvatar} />
        <div className="breweryUpdate">
            <h3>Brewery Status: {props.status ? 'Approved' : 'Pending'}</h3>
            <h6>{props.status ? 'Your brewery profile is active! You can update your information and add beers to your Beer List!' : 
            'Your brewery in being reviewed. Please allow up to 24 hours for approval'} </h6>
            <form>
             <input
                            type="text"
                            id="breweryname"
                            name="breweryname"
                            class="form-control"
                            placeholder={props.breweryName}
                            v-model="brewery.breweryname"
                            //onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryImageUrl"
                            name="breweryImageUrl"
                            class="form-control"
                            placeholder={props.breweryImg}
                            v-model="brewery.breweryImageUrl"
                            //onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="brewerywebsite"
                            name="brewerywebsite"
                            class="form-control"
                            placeholder={props.breweryWebsite}
                            v-model="brewery.brewerywebsite"
                            //onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryphone"
                            name="breweryphone"
                            class="form-control"
                            placeholder={props.breweryPhone}
                            v-model="brewery.breweryphone"
                            //onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryemail"
                            name="breweryemail"
                            class="form-control"
                            placeholder={props.breweryEmail}
                            v-model="brewery.breweryemail"
                            //onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryaddress"
                            name="breweryaddress"
                            class="form-control"
                            placeholder={props.breweryAddress}
                            v-model="brewery.breweryaddress"
                            //onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryhours"
                            name="breweryhours"
                            class="form-control"
                            placeholder={props.breweryHours}
                            v-model="brewery.breweryhours"
                            //onChange={this.handleInputChange}
                            required
                        />
                        <textarea
                            rows = "5"
                            id="brewerydesc"
                            name="brewerydesc"
                            class="form-control"
                            placeholder={props.breweryHistory}
                            v-model="brewery.brewerydesc"
                            //onChange={this.handleInputChange}
                            required
                        />
        
                <div className='buttondiv'><button className="submitbutton" type="submit">Update Changes</button></div>  
        </form>
    
        <AddBeerForm breweryId={props.breweryId} breweryActive={props.breweryActive}/>
        <h2 className='mybeers'>My Beer List </h2>
        {beerArray}
        </div>
        
        
        </div>
    )
}