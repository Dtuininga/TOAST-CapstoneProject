import React from "react";

export default function Navbar() {
    //TODO: better logo, change circle to user's chosen color? favorite beer?
    //redesign middle links->buttons, admin/brewer tools should change or 
    //dissappear depending on login level

return(
    
        <div className="navbar">
            <div className="branding">
            <img src="./Images/Toast.jpg" alt="BeerToaster logo"></img>
                <h1>TOAST!</h1>
            </div>
            <div >
                <li><a href="./breweries" className="shortcut">Breweries List</a></li>
                <li><a href="./beers" className="shortcut">Global Beer List</a></li>
                <li><a href="./admin_tools" className="shortcut">Admin/Brewer Tools</a></li>
            </div>
            <div className = "userInfo">
                <div className="userImg">?</div>
            <h3 className="user">User ID: Barney</h3>
            <h4 className="userReviews">Reviews Written: 1</h4>
            </div>
        </div>
    
)

}