import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

// We are deconstructing props object directly in the parentheses of the function
function QuoteCard ( { title, description, _id, owner, refresh, likes} ) {
  
  const {user} = useContext(AuthContext)
   const navigate = useNavigate() 
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
  const addLike = () => {
    const storedToken = localStorage.getItem('authToken'); 

    // Send the token through the request "Authorization" Headers   
    axios
      .put(
        `${API_URL}/api/my-quotes/add-like/${_id}`,    
        { headers: { Authorization: `Bearer ${storedToken}` } }           
            
      )
      .then (()=> refresh())
      .catch((err) => console.log(err));
  }; 
  console.log("sdf addFavourite", user._id)

const addFavourite = () => {
 const reqBody = { title, description, _id, owner, likes, user }
    axios
      .post(
        `${API_URL}/favourites`, reqBody
      )
      .then((response) => { console.log(response)
        navigate("/favourites");
      })
      
      .catch((err) => console.log(err));
  }; 

  
  return (
    <div className="cards">
    
      

      <p className="text" style={{ maxWidth: "400px" }}>"{description}." <b className="owner">- {owner} -</b> </p>
      <br /> 
      <br />
      <br />
       <div className="Interaction">
       
        {owner !== user.name ? <><button className="buttonQuote" id="LikeButton" onClick={addLike}>👍 <b className="Likes">{likes}</b></button> </> : <></>}
        {owner === user.name ? <button className="buttonQuote" onClick={deleteQuote}>✖️</button> : <></>}
        {<button id="AddToFav" onClick={addFavourite}>⭐</button>}
        
       </div>
    </div>
  );
}

export default QuoteCard;