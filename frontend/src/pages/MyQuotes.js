import { useState, useEffect } from "react";
import axios from "axios";
import AddQuote from "../components/AddQuote";
import QuoteCard from "../components/QuoteCard";
import myQuotes from "../pages/MyQuotes.css"

const API_URL = "http://localhost:5005";


function MyQuotes() {
  const [quotes, setQuotes] = useState([]);

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

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllQuotes();
  }, [] );

  
  return (
    <div className="myQuotesPage">
      
      <AddQuote refreshQuotes={getAllQuotes} />
      
      { quotes.map((quote) => <QuoteCard key={quote._id} {...quote} />  )} 
       
    </div>
  );
}

export default MyQuotes;

