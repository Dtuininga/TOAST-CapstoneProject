import React from "react";
import BreweryDetails from "./BreweryDetails";
import { checkPropTypes } from "prop-types";
import {Switch, Route, Redirect, Link, useParams} from 'react-router-dom'
import axios from "axios";
import { baseUrl } from "../../Shared/baseUrl";
import { useStore } from "react-redux";

export default function UserCard(){
    const [userDetails, setuserDetails] = React.useState({
        beerLover=""

    })
    

    return (
        <div className="userUpdate">
            <h3>User: {userDetails.beerLover} {role === 'ROLE_ADMIN' &&<span>UserId: {props.userId}</span>}</h3>
            
    
        
            
                    <button onClick={handleDelete} >DELETE ACCOUNT</button>  
            
            
        </div>
    
    )
}