import React from "react";
import Navbar from "../Home/Navbar";
import ReviewCard from "../Users/ReviewCard";
import AddBeerForm from "../Beer/AddBeerForm";
import UpdateUserPassword from "../Users/UpdateUserPassword";

export default function BreweryUpdate(props){
//form where brewer can update brewery info and add/deactivate beers
//form should be blank if no brewery created, but populate with existing info as props to be edited
//add textbox input for brewery description/history
//should not be able to add beer until brewery is built
//make addbeerForm button disabled if breweryID===null? 

    return(
        <div className="breweryUpdate">
            <h3>Status: {props.status ? 'Approved' : 'Pending'}</h3>
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
                            v-model="brewery.breweryimg"
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
        
                <button type="submit">Update Changes</button>     
        </form>
        <UpdateUserPassword />
        <AddBeerForm breweryId={props.breweryId}/>
        <h4>My Beer List (get beers by brewery ID)</h4>
        
        </div>
    )
}