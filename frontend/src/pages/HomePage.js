import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import "./HomePage.css";

import Homepage from "./HomePage.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function HomePage({quotes}) {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [singleQuote, setSingleQuote] = useState()

 /*  useEffect(()=> {
    const random = quotes[Math.floor(quotes.length * Math.random())]
    setSingleQuote(random)
  },[quotes]) */

singleQuote && console.log(singleQuote)

  return (
  <div className="HomePageContainer"> 
    
    <div className="HomePage">
      
{!isLoggedIn && (
      <>
      <div className="QuotingLife">
        <h1>QUOTING LIFE</h1>
        <p>Add your own quotes and discover <br /> favourite ones of your friends.</p>
      </div>
      <div>
        <SignupPage />
      </div>

    <div className="LoginBlock">
      <div>
        <LoginPage />
      </div>
    </div>  
             
        
      </>
    )}

    {isLoggedIn && (
       <>

      
       <div className="LoggedInPage">

        <div className="QuotesBlock">
          <div id="QuotesTitle">
            <Link id="NoUnderline" to="/my-quotes">
              <h1>Quotes Page</h1>
            </Link>
          </div>
          <Link to="/my-quotes"> <input type="image" name="" id="" src="https://images.unsplash.com/photo-1606607291535-b0adfbf7424f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" /></Link>
        </div>  

        <div className="LogoutHome">
          
            <button id="HomeLogout" onClick={logOutUser}>
              <div className="LogoutHomeWImg">
                <p>Log out</p> 
                </div>
              </button>
              
          
        </div>
        <div className="FavouritesBlock">
        <Link id="NoUnderline" to="/favourites">
          <h1 id="FavouritesTitle">Favourite Quotes</h1>
        </Link>
          <Link to="/favourites"><input type="image" name="" id="" src="https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" /></Link>
        </div>


       </div>

        
      </>
    )}


     
    </div>
  </div>  
  );
}

export default HomePage;
