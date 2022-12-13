import { useState, useEffect } from "react";
import axios from "axios";

import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";




const API_URL = "http://localhost:5005";




function FavouritesQuotes({refresh}) {
  const [x, setX] = useState(false)
  const {user} = useContext(AuthContext)

  const [favQuotes, setFavQuotes] = useState([]);

const deleteQuote = (_id) => {
  axios
    .put(
      `${API_URL}/favourites/${_id}`, user
                 
    )
    .then (()=> window.location.reload())
    .catch((err) => console.log(err));
}; 

  useEffect(() => {
    setTimeout(()=> {
      if(user._id) { axios
        .get(
        `${API_URL}/favourites/${user._id}`,
      )
        .then((response) => setFavQuotes(response.data))
    
        .catch((error) => console.log(error));
    };
    }, 100)
      
  
  
 
  }, [user] );

  return (
 <>
      {favQuotes.length && favQuotes?.map((favQuote) =>{

        return <div>{favQuote.description} - @{favQuote.owner}<button className="buttonQuote" onClick={(e)=>{deleteQuote(favQuote._id)}}>➕</button></div>
       
    

      })}
      {/* {favQuotes.map((favQuote) =>{
      return <button className="buttonQuote" onClick={deleteQuote}>➕</button>
    })} */}
      </>
    

  );
}

export default FavouritesQuotes;