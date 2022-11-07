import React from 'react'
import BeerCard from './BeerCard'

function BeerList(){
    const[beerArray, setBeerArray] = React.useState([])
    
    React.useEffect(()=>{
        fetch('http://localhost:8081/beers')
        .then(res => res.json())
        .then(data => setBeerArray(data.map(item => <BeerCard beerImage={item.beerImg} beerName={item.beerName} beerType={item.beerType} beerDesc={item.beerDescription}  />)))
    },[])

    return(
        <div>
            {beerArray}
        </div>
    )
}

export default BeerList