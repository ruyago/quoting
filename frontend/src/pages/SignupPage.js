import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignupLoginCard.css"

const API_URL = "http://localhost:5005";


function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  
  return (
    <div className="login">
      <br/>
      <h1 className="legend">Sign up</h1>
      <br/>
      <form onSubmit={handleSignupSubmit}>
        
        <div className="input">
        <input placeholder="Email" type="email" name="email" value={email} onChange={handleEmail} />
        </div>

        
       
        <div className="input">
        <input placeholder="Password" type="password" name="password" value={password} onChange={handlePassword} />
        
        </div>
        
        <div className="input">
        <input placeholder=" Username" type="text" name="name" value={name} onChange={handleName} />
        </div>

        <button type="submit" class="submit">Enter</button>  
      </form>
        <br />
      { errorMessage && <p className="error-message">{errorMessage}</p> }
    </div>
  
  )
}

export default SignupPage;