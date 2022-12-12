import { useState, useEffect } from "react";
import axios from "axios";

import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";




const API_URL = "http://localhost:5005";


function FavouritesQuotes() {
  const {user} = useContext(AuthContext)

  const [quotes, setQuotes] = useState([]);
 


  const getAllFavourites = () => {
    if(user._id) { axios
      .get(
      `${API_URL}/favourites/${user._id}`,
    )
      .then((response) => setQuotes(response.data))
  
      .catch((error) => console.log(error));
  };}
   

  useEffect(() => {
    getAllFavourites();
  }, [] );

quotes && console.log(quotes)
  return (
 <>
      {quotes && quotes.map((quote) =>{

        return <h1>{quote.description}</h1>




      })}
      </>
    

  );
}

export default FavouritesQuotes;