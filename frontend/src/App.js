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
  console.log(apiQuotes)

  


  return (
    <div className="App">
      <Navbar />
      
      <Routes>      
    
        <Route path="/" element={<HomePage  quotes={quotes}/>} />
        <Route path="/favourites" element={<FavouritesQuotes  quotes={quotes}/>} />
        <Route path="/favourites/:user_id" element={<FavouritesQuotes  quotes={quotes}/>} />
       
        

        <Route
          path="/my-quotes"
          element={ <IsPrivate><MyQuotes apiQuotes={apiQuotes} /></IsPrivate>  } 
          
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
