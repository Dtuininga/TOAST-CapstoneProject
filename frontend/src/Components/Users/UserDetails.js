import React from "react";
import Navbar from "../Home/Navbar";
import ReviewCard from "../Users/ReviewCard";

export default function UserDetails(props) {

//fetch: user by user id; reviews by user ID?  user should only be able to see and edit their own profile & delete their own reviews

return (
    <div className="userUpdate">
        
        <form>

    <div>
        Change Avatar color:    
        <select id="avatarColor" name="avatarColor">
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
        Change Username:
        <input
                    type="text"
                    id="username"
                    name="username"
                    class="form-control"
                    placeholder={props.username}
                    v-model="user.username"
                    //onChange={this.handleInputChange}
                    
                />
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
                <button type="submit">Update Changes</button><button>DELETE ACCOUNT</button>  
        </form>
        <h3>My Reviews (get reviews by userid?)</h3>
    </div>

)

}