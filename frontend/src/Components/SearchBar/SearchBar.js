import React from "react";
import {baseUrl} from '../../Shared/baseUrl'

const SearchBar = ({searchChange})=>{
  
  return(
    <div className="container">
      <header>
        <h1 className="title">Lets find a brewery to Toast to!</h1>
        <a href="" className="href">Brewery watchlist</a>
      </header>
    <form className="searchBar--form">
      <div className="search-bar-icon" id="search-bar-icon">
        <img src="./search-img/icon-sb.png" alt="search icon" />
      </div>
      <input 
          className="searchBar--form--input" 
          placeholder="Lets search for a brewery"
          type="search" 
          // name={}
          // value={}
          onChange={searchChange}
      />
      <button title="search--btn"
              className="searchBar--button" 
              id="search--btn" >  
              </button>
    </form>
    <section id="brewery--searched" className="brewery--searched">
    </section>

    </div>
  );
}
export default SearchBar;