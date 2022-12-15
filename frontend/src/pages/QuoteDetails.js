import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";



const API_URL = "http://localhost:5005";
const API_URL2 = "https://plain-belt.cyclic.app"


function QuoteDetails (props) {
  const [quote, setQuote] = useState(null);
  const { quoteId } = useParams();
  
  
  const getQuote = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL2}/api/my-quotes/${quoteId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneQuote = response.data;
        setQuote(oneQuote);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getQuote();
  }, [] );

  
  return (
    <div className="QuoteDetails">
      {quote && (
        <>
          <h1>{quote.title}</h1>
          <p>{quote.description}</p>
        </>
      )}

    

      <Link to="/my-quotes">
        <button>Back to my quotes</button>
      </Link>
          
      <Link to={`/my-quotes/edit/${quoteId}`}>
        <button>Edit the quote</button>
      </Link>
      
    </div>
  );
}

export default QuoteDetails;