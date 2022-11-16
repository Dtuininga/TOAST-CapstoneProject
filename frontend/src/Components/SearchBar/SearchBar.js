// vendor libraries
import React, {useState} from "react";
import {baseUrl} from '../../Shared/baseUrl'

// Styles
import '../SearchBar/search-img/search.css'

//place components to search later

export default function SearchBar (){

   const [query, setQuery] = useState('');
   const [brewery, setBrewery] = useState([]);

  return(
    <div className="container">
      <header className="search-header">
        <h1 className="title">Lets find a brewery to Toast to!</h1>
        <a href="" className="href">Brewery watchlist</a>
      </header>
    <form className="searchBar--form">
      <label htmlFor=""></label>
      <div className="search-bar-icon" id="search-bar-icon">
        <img src="./search-img/icon-sb.png" alt="search icon" />
      </div>
      <input 
          className="searchBar--form--input" 
          placeholder="Lets search for a brewery"
          type="search" 
          name="query"
          // value={}
          onChange={(e) => setQuery(e.target.value)}
      />
      <button title="search-btn"
              className="searchBar--button" 
              id="search--btn" > 
              Submit 
              </button>
    </form>

    {/* <section id="brewery--searched" className="brewery--searched">
    </section> */}

    </div>
  );
}
