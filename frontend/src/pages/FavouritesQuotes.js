import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css"
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





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



<div className="FavouritesPage">
    <div className="myQuotesPage">
      <div>
  
        <div className="Left">
          
          <div className="UserList">
            
            <br />
          
              
              <p>Favourite</p>

            <ul id="LeftList">
              <li><Link to="/"><button>Home</button></Link></li>
              <li><Link to="/my-quotes"><button>Quotes</button></Link></li>
              <li><button onClick={logOutUser}>Logout</button></li>
            </ul>
            {/* <button className="ButtonMyQuotes" onClick={() => {setSelectedUser(user.name)}}>{user.name}</button> */}
            {/* <h4 className="UserButtons"><UsersList names={names}  setSelectedUser={setSelectedUser}/></h4> */}
          </div>
          
        </div>
      </div>


       
     </div>
</div> 
</>
  )
}

export default FavouritesQuotes;