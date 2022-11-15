import { checkPropTypes } from "prop-types";
import React from "react";
import {Switch, Route, Redirect, Link} from 'react-router-dom'

function Sidebar(props){

    const token = props.userToken
    const avatarPic= props.userpic
    
    return(
        <div className="sidebar">
            <img className="burger" src="./Images/burger.png" />
        <div className = "userInfo">
                <img className="userImg" src={"./Images/beeravatars/whiteavatar.png"} />
            <h3 className="user">{props.currentUser}</h3>
            </div>
            <div classname= "shortcutButtons">
            <button><Link to="/BreweryList" className="shortcut">Brewery List</Link></button>
            <button><Link to="/BeerList" className="shortcut">Global Beer List</Link></button>
            {/* <button><Link href="./admin_tools" className="shortcut">Admin/Brewer Tools</a></button> */}
        
        </div>
        </div>
    )
}

export default Sidebar