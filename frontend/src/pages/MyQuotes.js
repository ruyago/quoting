import { useState, useEffect } from "react";
import axios from "axios";
import AddQuote from "../components/AddQuote";
import QuoteCard from "../components/QuoteCard";
import myQuotes from "../pages/MyQuotes.css"
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";


const API_URL = "http://localhost:5005";


function MyQuotes() {
  const [quotes, setQuotes] = useState([]);
  const {user} = useContext(AuthContext)

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
      
      <div><h2>Post</h2><AddQuote refreshQuotes={getAllQuotes} /></div>
      
      <div><h2>Quotes</h2>{ quotes.filter((quote) =>{
    
        return quote.owner === user.name

      } )
      
      .map((quote) => <QuoteCard key={quote._id} {...quote} />  )} </div>
      <div><h2>Users</h2><AddQuote refreshQuotes={getAllQuotes} /></div>
       
    </div>
  );
}

export default MyQuotes;

