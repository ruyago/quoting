import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
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
    <div className="Home-top ">
      <h1>QUOTING LIFE</h1>
      <div className="QuoteCard card">{singleQuote}</div>
  

{!isLoggedIn && (
       <>
        <p className="Subtitle">Add your own quotes and discover the favourite of your friends.</p>
       <div className="Home-down">
        <div className="home-left">
          <SignupPage />
        
        </div>
        <div className="home-right">
        <LoginPage />
        </div>
      </div>
      </>
    )}

    {isLoggedIn && (
       <>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/assets/quotes-home." />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to="/my-quotes">Go somewhere</Link></Button>
      </Card.Body>
    </Card>
       <Link to="/my-quotes"><button>Quotes</button></Link>
       <Link to="/favourites"><button>Favourites</button></Link>
      </>
    )}


     
    </div>
  );
}

export default HomePage;
