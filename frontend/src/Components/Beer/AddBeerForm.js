import React, { useState } from "react";
import { baseUrl } from '../../Shared/baseUrl'
import { Component } from "react";
import axios from "axios";


class AddBeerForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            beername: '',
            beerImageUrl:'',
            beerABV: '',
            beerdesc:'',
            beerActive: false,
            beerType:'',
            breweryId: `$(props.breweryId)`

        }
    }
    handleSubmit = () => { 
        const beerData = {beerName: this.state.beername, 
        beerImg: this.state.beerImageUrl,
        beerAbv: this.state.beerABV,
        beerType: this.state.beerType,
        beerDescription: this.state.beerdesc,
        beerActive:'false'}
        
            axios.post(baseUrl + "/addbeer", beerData)
            //can we make this conditional based on response?
            alert("Beer added successfully.")
     
    }
   

    handleBeerChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

render(){ 
return(
    <form>
        Add a new brew! 
             <input
                            type="text"
                            id="beername"
                            name="beername"
                            class="form-control"
                            placeholder="New Beer Name"
                            v-model="beer.beername"
                            onChange={this.handleBeerChange}
                            required
                        />
                        <input
                            type="text"
                            id="beerImageUrl"
                            name="beerImageUrl"
                            class="form-control"
                            placeholder="Beer Picture URL"
                            v-model="beer.beerImageUrl"
                            onChange={this.handleBeerChange}
                            required
                        />
                        <input
                            type="text"
                            id="beerABV"
                            name="beerABV"
                            class="form-control"
                            placeholder="Alcohol By Volume"
                            v-model="beer.beerABV"
                            onChange={this.handleBeerChange}
                            required
                        />
                        <input
                            type="textbox"
                            id="beerdesc"
                            name="beerdesc"
                            class="form-control"
                            placeholder="Description"
                            v-model="beer.beerdesc"
                            onChange={this.handleBeerChange}
                            required
                        />
                       <div>
        Beer Type:    
        <select id="beerType" name="beerType">
                        <option value="Pilsner">Pilsner</option>
                        <option value="Lager">Lager</option>
                        <option value="IPA">IPA</option>
                        <option value="Lite Beer">Lite</option>
                        <option value="Non-Alcoholic">Non-Alcoholic</option>
                        <option value="Stout">Stout</option>
                        <option value="Ale">Ale</option>
                        
                    </select>
                    </div>
            
                <button type="submit" onClick={this.handleSubmit}>Update Changes</button>     
        </form>
)

}
}
export default AddBeerForm;