import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div className="SignupPage">
      <br/>
      <h2>Sign Up</h2>
      <br/>
      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <br/>
        <label>Password:</label>
        
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <br/>
        <label>Name:</label>
        
        <input type="text" name="name" value={name} onChange={handleName} />
        <br/>
        <button type="submit">Sign Up</button>  
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have account?</p>
      <Link to={"/login"} className="link"> Login</Link>
    </div>
  )
}

export default SignupPage;