import React, { useState } from "react";


export default function AddBeerForm(props) {

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
                            //onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="beerImageUrl"
                            name="beerImageUrl"
                            class="form-control"
                            placeholder="Beer Picture URL"
                            v-model="beer.beerImageUrl"
                            //onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="beerABV"
                            name="beerABV"
                            class="form-control"
                            placeholder="Alcohol By Volume"
                            v-model="beer.beerABV"
                            //onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="textbox"
                            id="beerdesc"
                            name="beerdesc"
                            class="form-control"
                            placeholder="Description"
                            v-model="beer.beerdesc"
                            //onChange={this.handleInputChange}
                            required
                        />
                       <div>
        Beer Type:    
        <select id="avatarColor" name="avatarColor">
                        <option value="Pilsner">Pilsner</option>
                        <option value="Lager">Lager</option>
                        <option value="IPA">IPA</option>
                        <option value="Lite Beer">Lite</option>
                        <option value="Non-Alcoholic">Non-Alcoholic</option>
                        
                    </select>
                    </div>
            
                <button type="submit">Update Changes</button>     
        </form>
)

}