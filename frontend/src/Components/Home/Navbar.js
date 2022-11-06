import React from "react";

export default function Navbar() {
    //TODO: change circle to user's chosen color? favorite beer? userpic?
    //admin/brewer tools should change or dissappear depending on login level
    //remove "home" link in top left corner, make clicking logo return to login screen?

return(
    
        <div className="navbar">
            <div className="branding">
            <img src="./Images/TOAST!logoColor.jpg" className="toastLogo" alt="BeerToaster logo"></img>
                <h1>TOAST!</h1>
            </div>
            <div classname= "shortcutButtons">
                <button><a href="./BreweriesList" className="shortcut">Breweries List</a></button>
                <button><a href="./BeerList" className="shortcut">Global Beer List</a></button>
                <button><a href="./admin_tools" className="shortcut">Admin/Brewer Tools</a></button>
            </div>
            <div className = "userInfo">
                <div className="userImg">?</div>
            <h3 className="user">User ID: Barney</h3>
            <h4 className="userReviews">Reviews Written: 1</h4>
            </div>
        </div>
    
)

}