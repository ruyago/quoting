import { useState, useEffect } from "react";
import axios from "axios";

import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from 'react-bootstrap/Button';




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

    <div className="ContainerFavourites">
      
            <div className="LeftElements">
              <div className="home-element">
                <Link to="/">
                <Button
                      type="button"
                      variant="primary"
                    >
                      Home
                    </Button>
                </Link></div>
             
                <div className="quotes-element">
                <Link to="/my-quotes">
                <Button
                      type="button"
                      variant="primary"
                    >
                      Quotes
                    </Button>
                </Link></div>
                <div className="logout">
              <Button onClick={logOutUser}
                      type="button"
                      variant="primary"
                    >
                      Logout
                    </Button></div>
            
            </div>

 <div className="favQuotes">
      {favQuotes.length && favQuotes?.map((favQuote) =>{
        return <div className="cardsFavourites">{favQuote.description} - @{favQuote.owner}<button className="buttonQuote" onClick={(e)=>{deleteQuote(favQuote._id)}}>✖️</button></div>
      })}
 </div></div>

</>    
  )
}

export default FavouritesQuotes;