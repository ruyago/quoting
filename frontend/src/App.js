import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MyQuotes from "./pages/MyQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import EditQuote from "./pages/EditQuote";
import React, { useEffect, useState } from "react";
import Data from "./pages/Quotes.json"
import MoviesQuotes from "./pages/MoviesQuotes"
import ApiQuotes from "./pages/ApiQuotes"
import FavouritesQuotes from "./pages/FavouritesQuotes";

import axios from "axios";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

const API_URL = "http://localhost:5005";

function App() {
 

  const [quotes, setQuotes] = useState(Data)
  const [apiQuotes, setApiQuotes] = useState([]);

  let responseAPI = []

  useEffect(() => {
    for(let i =0; i<2 ; i++){
    axios
      .get("https://favqs.com/api/qotd")
      .then((response) => {
         responseAPI.push(response.data.quote);
      });

      setApiQuotes(responseAPI)
  }}, []);

      getAllQuotes()
  }, []);

  console.log(apiQuotes)

  const getAllQuotes = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/my-quotes`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setQuotes(response.data))
  
      .catch((error) => console.log(error));
  };

  


  return (
    <div className="App">
      <Navbar />
      
      <Routes>      
    
        <Route path="/" element={<HomePage  quotes={quotes}/>} />
        <Route path="/favourites" element={<FavouritesQuotes  favQuotes={favQuotes} refresh={getAllQuotes}/>} />
        <Route path="/favourites/:user_id" element={<FavouritesQuotes  favQuotes={favQuotes}/>} />
       
        

        <Route
          path="/my-quotes"
          element={ <IsPrivate><MyQuotes getAllQuotes={getAllQuotes} apiQuotes={apiQuotes} quotes={quotes}/></IsPrivate>  } 
          
        />


        <Route
          path="/my-quotes/:quoteId"
          element={ <IsPrivate> <QuoteDetails /> </IsPrivate> }
        />

        <Route
          path="/my-quotes/edit/:quoteId"
          element={ <IsPrivate> <EditQuote /> </IsPrivate> } 
        />
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;
