import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moviesQuotes from "../assets/moviesQuotes.jpg";
import booksQuotes from "../assets/booksQuotes.jpg";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import Homepage from "./HomePage.css"



function HomePage({quotes}) {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [singleQuote, setSingleQuote] = useState()

  useEffect(()=> {
    const random = quotes[Math.floor(quotes.length * Math.random())]
    console.log(random)
    setSingleQuote(random)
  },[quotes])

singleQuote && console.log(singleQuote)

  return (
    <div>
      <h1>Quoting Life</h1>
      <h3>{singleQuote}</h3>

{isLoggedIn && (
  <>
    <Link to="/my-quotes">
      <button>My quotes</button>
    </Link>

    <button onClick={logOutUser}>Logout</button>
  </>
)}

{!isLoggedIn && (
  <>
    <h3>Add your own quotes and discover the favourite of your friends.</h3>

  </>
)}

      <div className="home">
        <div className="home-left">
          <Link to={`/movies-quotes`}>
          <img src={moviesQuotes} alt="Movies Quotes" />
            <h2>Movies Quotes</h2>
          </Link>
          <p>Check all the movies quotes.</p>
        </div>
        <div className="home-right">
          <Link to={`/book-quotes`}>
          <img src={booksQuotes} alt="Books Quotes" />
            <h2>Books Quotes</h2>
          </Link>
          <p>Check all the books quotes.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
