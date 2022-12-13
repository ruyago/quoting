import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import navbar from "../components/Navbar.css"
import logo from "../assets/logo.png"


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <header>

      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      
      
      {isLoggedIn && (
        <>


        <li>
          <Link to="/my-quotes">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </li>

        

        {/* <ul className="list">

        
          
         
          <li>
            <button onClick={logOutUser}>Logout</button>
          </li>

          <li>
            <Link to="/my-quotes">
              <button id="username">{user && user.name}</button>
            </Link>
          </li>
        </ul> */}
          
        </>
        
      )}

      {!isLoggedIn && (
        <>
        <ul className="list">
          <li>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          </li>

          <li>
          <Link to="/login"> <button>Login</button> </Link>
          </li>
        </ul>
          
          
        </>
      )}      
    </header>
  );
}

export default Navbar;