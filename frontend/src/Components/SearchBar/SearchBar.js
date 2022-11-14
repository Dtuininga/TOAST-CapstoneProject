import React from "react";
import {baseUrl} from '../../Shared/baseUrl'

const SearchBar = ({searchChange})=>{
  
  return(
    <form className="searchBar--form">
      <input 
      className="searchBar--form--input" 
      placeholder="Search"
      type="search" 
      // name={}
      // value={}
      onChange={searchChange}
      />
      <button className="searchBar--button"></button>
    </form>
  );
}
export default SearchBar;