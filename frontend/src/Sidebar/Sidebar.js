import React from "react";

function Sidebar(){
    
    return(
        <div className="sidebar">
        <div className = "userInfo">
                <div className="userImg">?</div>
            <h3 className="user">User ID: Barney</h3>
            <h4 className="userReviews">Reviews Written: 1</h4>
            </div>
            <div classname= "shortcutButtons">
            <button><a href="./BreweryList" className="shortcut">Brewery List</a></button>
            <button><a href="./BeerList" className="shortcut">Global Beer List</a></button>
            <button><a href="./admin_tools" className="shortcut">Admin/Brewer Tools</a></button>
        </div>
        </div>
    )
}

export default Sidebar