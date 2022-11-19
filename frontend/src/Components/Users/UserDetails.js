import React from "react";
import { Axios } from "axios";
import ReviewCard from "../Users/ReviewCard";

export default function UserDetails(props) {

//fetch: user by user id; reviews by user ID?  user should only be able to see and edit their own profile & delete their own reviews


return (
    <div className="userUpdate">
        <h3>User Profile: {props.username} </h3>
        <form>

    <div className="avatarContainer">
        <div className="userUpdatePic">
            Current avatar:
            <img src={props.userpic}/>
        </div>
        <div>
        Change Avatar color:   
        
        <select id="avatarColor" name="avatarColor" className="avatarSelect">
                        <option value="./Images/beeravatars/pinkavatar.png">Pink</option>
                        <option value="./Images/beeravatars/redavatar.png">Red</option>
                        <option value="./Images/beeravatars/orangeavatar.png">Orange</option>
                        <option value="./Images/beeravatars/yellowavatar.png">Yellow</option>
                        <option value="./Images/beeravatars/greenavatar.png">Green</option>
                        <option value="./Images/beeravatars/blueavatar.png">Blue</option>
                        <option value="./Images/beeravatars/purpleavatar.png">Purple</option>
                        <option value="./Images/beeravatars/blackavatar.png">Black</option>
                        <option value="./Images/beeravatars/whiteavatar.png">White</option>
                    </select>
                    </div> 
                    </div>
       
        Change Password: 
        <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="user.password"
                    //onChange={this.handleInputChange}
                    
                />
                <input
                    type="password"
                    id="password-confirm"
                    name="confirmPassword"
                    class="form-control"
                    placeholder="Confirm Password"
                    v-model="user.password"
                    //onChange={this.handleInputChange}
                    
                />   
                <button type="submit">Update Changes</button><button >DELETE ACCOUNT</button>  
        </form>
        <h4>My Reviews (get # of reviews, "badges" for 1,5,10 etc)</h4>
    </div>

)

}