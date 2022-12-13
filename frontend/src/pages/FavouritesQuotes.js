import { useState, useEffect } from "react";
import axios from "axios";

import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";




const API_URL = "http://localhost:5005";


function FavouritesQuotes() {
  const {user} = useContext(AuthContext)

  const [favQuotes, setFavQuotes] = useState([]);
 
  useEffect(() => {
    const getAllFavourites = () => {
      if(user._id) { axios
        .get(
        `${API_URL}/favourites/${user._id}`,
      )
        .then((response) => setFavQuotes(response.data))
    
        .catch((error) => console.log(error));
    };}


    getAllFavourites();
  }, [user._id] );

favQuotes && console.log(favQuotes)
  return (
 <>
      {favQuotes.length && favQuotes.map((favQuote) =>{

        return <h1>{favQuote.description}</h1>

      })}
      </>
    

  );
}

export default FavouritesQuotes;