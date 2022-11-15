import React from 'react'
import BeerCard from './BeerCard'
import {useStore} from 'react-redux'



function BeerList(props){
    const[beerArray, setBeerArray] = React.useState([])

    // const store = useStore()

    // console.log(store.getState().user.username)
    
   
    React.useEffect(()=>{
        fetch('http://localhost:8081/beers')
        .then(res => res.json())
        .then(data => setBeerArray(data.map(item => <BeerCard  beerId={item.beerId} beerImage={item.beerImg} brewery={item.breweryId} beerAbv={item.beerAbv} beerName={item.beerName} beerType={item.beerType} beerDesc={item.beerDescription}  />)))
    },[])

    console.log(beerArray)

    return(
        <div className='beerList content'>
            {beerArray}
        </div>
    )
}

export default BeerList