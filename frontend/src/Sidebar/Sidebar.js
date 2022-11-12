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
            <button><a href="./BreweryList" className="shortcut">Brewery List</a></button>
            <button><a href="./BeerList" className="shortcut">Global Beer List</a></button>
            <button><a href="./admin_tools" className="shortcut">Admin/Brewer Tools</a></button>
        
        </div>
        </div>
    )
}

export default Sidebar