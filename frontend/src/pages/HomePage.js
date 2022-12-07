import React from "react";
import { Link } from "react-router-dom";
import moviesQuotes from "../assets/moviesQuotes.jpg";
import booksQuotes from "../assets/booksQuotes.jpg";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import Homepage from "./HomePage.css"


function HomePage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


  return (
    <div>
      <h1>Quoting Life</h1>


     

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
    <br />
    <Link to="/signup">
      {" "}
      <button>Sign Up</button>{" "}
    </Link>
    <Link to="/login">
      {" "}
      <button>Login</button>{" "}
    </Link>
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
