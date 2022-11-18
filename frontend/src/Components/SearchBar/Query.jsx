import React, {useState} from 'react';
import BreweryData from "./BreweryData";
import { baseUrl } from '../../Shared/baseUrl';
import { useStore } from 'react-redux';
import {Link} from 'react-router-dom';


export default function Query() {
  // states to attribute
  const [queryData, setQueryData] = useState({BreweryData});
  console.log(queryData);

  const [results, setResults] =  useState([]);

  // functions

  //input field value change
  const handleChange = (e) => {
    e.preventDefault();
    const {} = e.target
    setQueryData(prevQueryData => {
      return {
        ...prevQueryData,
        [queryData]:value
      }
  })
}

//Handle the submit of the query

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formData);
} 
  return (
          <form onSubmit={handleSubmit}>
            <input 
              className="query" placeholder="Lets search for a brewery" type="text"
              value={queryData} 
              onChange={handleChange}
            />
            <button type='submit'>
              Submit
            </button>
          </form>
  )
}
