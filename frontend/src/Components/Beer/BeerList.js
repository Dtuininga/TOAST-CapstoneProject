import React from 'react'
import BeerCard from './BeerCard'

function BeerList(){
    const[beerArray, setBeerArray] = React.useState([])
    
    React.useEffect(()=>{
        fetch('http://localhost:8081/beers')
        .then(res => res.json())
<<<<<<< HEAD
        .then(data => setBeerArray(data.map(item => <BeerCard beerId={item.beerId} beerImage={item.beerImg} beerRating={item.beerRating} beerAbv={item.beerAbv} beerName={item.beerName} beerType={item.beerType} beerDesc={item.beerDescription}  />)))
=======
        .then(data => setBeerArray(data.map(item => <BeerCard beerImage={item.beerImg} brewery={item.breweryId} beerAbv={item.beerAbv} beerName={item.beerName} beerType={item.beerType} beerDesc={item.beerDescription}  />)))
>>>>>>> aefe61c55ac77314b3156a60de04ed32e50dfb40
    },[])

    console.log(beerArray)

    return(
        <div className='beerList content'>
            {beerArray}
        </div>
    )
}

export default BeerList