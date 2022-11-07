import React from 'react'
import BreweryCard from './BreweryCard'

function BreweryList(){
    const[brewArray, setBrewArray] = React.useState([])
    
    React.useEffect(()=>{
        fetch('http://localhost:8081/breweries')
        .then(res => res.json())
        .then(data => setBrewArray(data.map(item => <BreweryCard brewImage={item.breweryImg} brewName={item.breweryName} brewHours={item.breweryHours} brewAddress={item.breweryAddress}  />)))
    },[])

    return(
        <div>
            {brewArray}
        </div>
    )
}

export default BreweryList