import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../index.css"
import Button from 'react-bootstrap/Button';
import "./FavPage.css"
import Container from 'react-bootstrap/Container';
import logo from "../assets/logo.png"





const API_URL = "http://localhost:5005";

function FavouritesQuotes({refresh}) {
  const [x, setX] = useState(false)
  const {user, logOutUser} = useContext(AuthContext)

  const [favQuotes, setFavQuotes] = useState([]);

const deleteQuote = (_id) => {
  axios
    .put(
      `${process.env.REACT_APP_SERVER_URL}/favourites/${_id}`, user
                 
    )
    .then (()=> window.location.reload())
    .catch((err) => console.log(err));
}; 

  useEffect(() => {
    setTimeout(()=> {
      if(user._id) { axios
        .get(
        `${process.env.REACT_APP_SERVER_URL}/favourites/${user._id}`,
      )
        .then((response) => setFavQuotes(response.data))
    
        .catch((error) => console.log(error));
    };
    }, 100)
 
  }, [user] );

  return (

<>



<div className="FavouritesPage">
    
      <div>
         
      <div className="UserContainer">
        
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>

          <div className="UserList">
            
            <br />
          
            <input type="search" placeholder="Search..." className="search"/>



            <ul id="LeftList">
              <li><Link to="/"><button>Home</button></Link></li>
              <li><Link to="/my-quotes"><button>Quotes Page</button></Link></li>
              <li><button onClick={logOutUser}>Logout</button></li>
            </ul>
            {/* <button className="ButtonMyQuotes" onClick={() => {setSelectedUser(user.name)}}>{user.name}</button> */}
            {/* <h4 className="UserButtons"><UsersList names={names}  setSelectedUser={setSelectedUser}/></h4> */}
          </div>
                
        </div>
         <p className="FavTitle">My favourite quotes</p>
        </div>
      
      {favQuotes.length && favQuotes?.map((favQuote) =>{
        return <div className="FavPageCardContainer">
                <div className="cards"> <p className="text" style={{ maxWidth: "400px" }}>"{favQuote.description}." <b className="owner">- {favQuote.owner} -</b> </p><button id="DeleteFav" className="buttonQuote" onClick={(e)=>{deleteQuote(favQuote._id)}}>Delete</button></div>
              </div>
      })}
      <div>
      
 </div>

       
     </div>
</>
  )
}

export default FavouritesQuotes;