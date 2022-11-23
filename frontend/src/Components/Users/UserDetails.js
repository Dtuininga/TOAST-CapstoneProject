import React from "react";
import axios from "axios";
import ReviewCard from "../Users/ReviewCard";
import { baseUrl } from "../../Shared/baseUrl";
import { useStore } from "react-redux";

export default function UserDetails(props) {
    const store = useStore()
const token = store.getState().token.token

const[userdetails, setUserDetails] =React.useState({
    userId: props.userId,
    username: props.username,
    avatar: props.userpic
})

    function handleDelete(event){
        event.preventDefault()
        axios.delete("http://localhost:8081/deleteuser/" + props.userId)
        alert("Profile deleted successfully. You will now be logged out.")
        window.location.href = '/login'
    
}



return (
    <div className="userUpdate">
        <h3>User Profile: {props.username} UserId: {props.userId}</h3>
        <form>

    <div className="avatarContainer">
        <div className="userUpdatePic">
            <h3>Current Avatar</h3> 
            <img src={props.userpic}/>
        </div>
        <div>
        <h3 className="changecolortext">Change Avatar color</h3>   
        
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
                <button type="submit">Update Changes</button><button onClick={handleDelete}>DELETE ACCOUNT</button>  
        </form>
        <h4>My Reviews (get # of reviews, "badges" for 1,5,10 etc)</h4>
    </div>

)

}