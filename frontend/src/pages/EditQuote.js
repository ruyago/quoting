import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const API_URL = "http://localhost:5005";

function EditQuote(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate =  useNavigate();
  const { quoteId } = useParams();
  
  
  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // Send the token through the request "Authorization" Headers 
    axios
      .get(
        `${API_URL}/api/my-quotes/${quoteId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }    
      )
      .then((response) => {
        const oneQuote = response.data;
        setTitle(oneQuote.title);
        setDescription(oneQuote.description);
      })
      .catch((error) => console.log(error));
    
  }, [quoteId]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };
  
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');  

    // Send the token through the request "Authorization" Headers   
    axios
      .put(
        `${API_URL}/api/my-quotes/${quoteId}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }              
      )
      .then((response) => {
        navigate(`/my-quotes/${quoteId}`)
      });
  };
  
  
  const deleteQuote = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');      
    
    // Send the token through the request "Authorization" Headers   
    axios
      .delete(
        `${API_URL}/api/my-quotes/${quoteId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }           
      )
      .then(() => navigate("/my-quotes"))
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="EditQuote">
      <h3>Edit the Quote</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Quote</button>
      </form>

      <button onClick={deleteQuote}>Delete Quote</button>
    </div>
  );
}

export default EditQuote;