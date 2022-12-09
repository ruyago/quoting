import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Favourite from "../components/Favourite";

const API_URL = "http://localhost:5005";

// We are deconstructing props object directly in the parentheses of the function
function QuoteCard ( { title, description, _id, owner, refresh} ) {
  
  const {user} = useContext(AuthContext)

  const [quotes, setQuotes] = useState([]);
  
  
  const deleteQuote = () => {
    const storedToken = localStorage.getItem('authToken'); 
      
    
    // Send the token through the request "Authorization" Headers   
    axios
      .delete(
        `${API_URL}/api/my-quotes/${_id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }           
      )
      .then (()=> refresh())
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="QuoteCard card">
     <Link to={`/my-quotes/${_id}`}>
        <h3>{title}</h3>
        </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <p>@{owner} </p>
      {owner !== user.name ? <button onClick={Favourite}>Favourite Quote</button> : <></>}
     {owner === user.name ? <button onClick={deleteQuote}>Delete Quote</button> : <></>}
     
    </div>
  );
}

export default QuoteCard;