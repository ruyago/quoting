import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuoteCard from "../components/QuoteCard";
import axios from "axios";

const API_URL = "http://localhost:5005";
const API_URL2 = "https://plain-belt.cyclic.app"


const MoviesQuotes = ({ quotesMovies, refresh }) => {

  const [quote, setQuote] = useState([]);

  const deleteQuote = () => {
    const storedToken = localStorage.getItem('authToken'); 
      
    
    // Send the token through the request "Authorization" Headers   
    axios
      .delete(
        `${API_URL2}/api/movies-quotes`,
        { headers: { Authorization: `Bearer ${storedToken}` } }           
      )
      .then (()=> refresh())
      .catch((err) => console.log(err));
  };  

  useEffect (() => {
axios.get("https://api.kanye.rest")
.then( quote => {
setQuote(quote.data.quote)


})
  }, [])




    console.log(MoviesQuotes);
    return (<div>
      <h1>{quote}</h1>
    {quotesMovies.map((quote) => {
      return (
        <div key={quote._id}>

          
        <div className="QuoteCard card">{quote}</div>
        <button onClick={deleteQuote}>Delete Quote</button>
         
        </div>
      );
    })}
  </div>

);
};

    
    export default MoviesQuotes;