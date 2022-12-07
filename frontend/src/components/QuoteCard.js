import { Link, Navigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";


// We are deconstructing props object directly in the parentheses of the function
function QuoteCard ( { title, description, _id, owner, refresh} ) {

  
  
  const deleteQuote = () => {
    const storedToken = localStorage.getItem('authToken'); 
      
    
    // Send the token through the request "Authorization" Headers   
    axios
      .delete(
        `${API_URL}/api/my-quotes/${_id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }           
      )
      .then (()=> refresh())
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="QuoteCard card">
     <Link to={`/my-quotes/${_id}`}>
        <h3>{title}</h3>
        </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <p>@{owner} </p>
      <button onClick={deleteQuote}>Delete Quote</button>
    </div>
  );
}

export default QuoteCard;