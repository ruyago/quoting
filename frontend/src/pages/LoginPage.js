import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import Button from 'react-bootstrap/Button';
import "./LoginPage.css"

const API_URL = "http://localhost:5005";


function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios.post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
        
      })
      .catch((error) => {
      	const errorDescription = error.response.data.message;
      	setErrorMessage(errorDescription);
    	})
  };
  
  return (

    <container className="LoginPage">
    <div className="login">
      <br/>
      <h1 className="legend">Login</h1>
      <br/>

      <form onSubmit={handleLoginSubmit}>
        
        <div className="input" >
          <input placeholder="Email" type="email" name="email" value={email} onChange={handleEmail} />
        </div>
        

        <div className="input" >
          <input placeholder="Password" type="password" name="password" value={password} onChange={handlePassword} />
        </div>


        <button className="submit" type="submit">Login</button>

        {/* <div className="input" >
          <button className="forgot">Forgotten password?</button>
        </div> */}

        <br />     

      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }

    </div></container>
  )
}

export default LoginPage;