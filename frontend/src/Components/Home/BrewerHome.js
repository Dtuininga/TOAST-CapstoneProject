import BreweryUpdate from "../Brewery/BreweryUpdate"
import React from "react"
import {useStore} from 'react-redux'
import BreweryCreation from "../Brewery/BreweryCreation"

export default function BrewerHome(props){

    const store = useStore()
    const token = store.getState().token.token
    const user = store.getState().user;
    const userId = store.getState().user.id;

    const [updateBeerProps, setUpdateBeerProps] = React.useState('')

    const [brewerySelected, setBrewerySelected] = React.useState(false)

    function toggleBrewery(){
        setBrewerySelected(!brewerySelected)
    }

    React.useEffect(()=>{ 
        fetch("http://localhost:8081/breweriesbyuser/" + userId, {headers: {'Authorization' : 'Bearer ' + token}} )
        .then(res => res.json())
        .then(data => setUpdateBeerProps(
            data.map((item) =>
            <BreweryUpdate breweryId={item.breweryId}
            breweryName={item.breweryName}
            breweryImg={item.breweryImg}
            breweryHours={item.breweryHours}
            breweryHistory={item.breweryHistory}
            breweryEmail={item.breweryEmail}
            breweryPhone={item.breweryPhone}
            breweryWebsite={item.breweryWebsite}
            breweryAddress={item.breweryAddress}
            userName = {user.username} 
            //userAvatar = {user.userAvatar}
            status ={item.breweryActive}/>
           )
            ))
    }, [])

    return(
        <div>
        <h1>Welcome Brewer {props.userName}!</h1>
        <div className="updateContainer">
        <div className="UpdateBreweryContainer">
        {updateBeerProps}
        <h4>No brewery? make one!</h4>
        <BreweryCreation userId={userId}/>
        </div>
        </div>
        </div>
        
        
    )
}