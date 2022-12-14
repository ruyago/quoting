import { useState, useEffect } from "react";
import axios from "axios";

import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";




const API_URL = "http://localhost:5005";

function FavouritesQuotes({refresh}) {
  const [x, setX] = useState(false)
  const {user, logOutUser} = useContext(AuthContext)

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
<h1>Favourites</h1>

<div className="UserList">

            <ul id="LeftList">

              <li>
                <Link to="/">
                    <button>Home</button>
                </Link>
              </li>
              <li>
                <Link to="/my-quotes">
                  <button>Quotes</button>
                </Link>
              </li>
              <li>
    
            <button onClick={logOutUser}>Logout</button>

              </li>
             <li>
             </li>
            </ul>
</div>
 <div>
      {favQuotes.length && favQuotes?.map((favQuote) =>{
        return <div className="cards">{favQuote.description} - @{favQuote.owner}<button className="buttonQuote" onClick={(e)=>{deleteQuote(favQuote._id)}}>Delete</button></div>
      })}
 </div>

</>    
  )
}

export default FavouritesQuotes;