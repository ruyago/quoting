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
    

    
    axios
      .get(
      `${API_URL}/my-favourites`,
    )
      .then((response) => setQuotes(response.data))
  
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllFavourites();
  }, [] );
  return (
 
     
      <div quotes={quotes}></div>


      
       

  );
}

export default FavouritesQuotes;