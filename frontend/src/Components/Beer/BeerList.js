import React from 'react'
import BeerCard from './BeerCard'

function BeerList(){
    const[beerArray, setBeerArray] = React.useState([])
    
    React.useEffect(()=>{
        fetch('http://localhost:8081/beers')
        .then(res => res.json())
        .then(data => setBeerArray(data.map(item => <BeerCard beerId={item.beerId} beerImage={item.beerImg} brewery={item.breweryId} beerAbv={item.beerAbv} beerName={item.beerName} beerType={item.beerType} beerDesc={item.beerDescription}  />)))
    },[])

    console.log(beerArray)

    return(
        <div className='beerList content'>
            {beerArray}
        </div>
    )
}

export default BeerList