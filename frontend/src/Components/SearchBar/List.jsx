import React, {useState} from 'react'
import BreweryData from "./BreweryData";
import {Link} from 'react-router-dom'


export const List = () => {
  // states to attribute
  const [query, setQuery] = useState("");
  const [results, setResults] =  useState([]);

  // functions
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    
    fetch('http://localhost:8081/breweries', 
    {headers: {'Authorization' : 'Bearer ' + token}} )
    
    .then(res => res.json())
    .then(data => {
      if(!data.errors){
        setResults(data.map(item => 
      <BreweryCard 
        key={item.breweryId} 
        breweryId={item.breweryId} 
        phone={item.breweryPhone} 
        history={item.breweryHistory} 
        email={item.breweryEmail} 
        website={item.breweryWebsite} 
        address={item.breweryAddress} 
        active={item.breweryActive} 
        brewImage={item.breweryImg} 
        brewName={item.breweryName} 
        brewHours={item.breweryHours} 
        brewAddress={item.breweryAddress}  
        />)
        )

      }
      else{
        setResults([]);
      }
    }
    )
  }

  return (
   <div className="list-page">
    <div className="container">
      <div className="list-content">
        <div className="input-wrapper">
          <input 
            className="input" placeholder="Lets search for a brewery" type="text"
            value={query} 
            onChange={onChange}
          />
        </div>
        {/* {results.length > 0 &&(
          <ul  className='results'>
              results.map(BreweryData) => (
                <li>{BreweryData.breweryName}</li>
              )
          </ul>
        )} */}
      </div>
    </div>
   </div>
  )
}
