import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import navbar from "../components/Navbar.css"
import logo from "../assets/logo.jpg"


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/my-quotes">
            <button>My quotes</button>
          </Link>
        
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}      
    </nav>
  );
}

export default Navbar;