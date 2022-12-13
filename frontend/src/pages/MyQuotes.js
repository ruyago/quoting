import { useState, useEffect } from "react";
import axios from "axios";
import AddQuote from "../components/AddQuote";
import QuoteCard from "../components/QuoteCard";
import UsersList from "../pages/UsersList";
import myQuotes from "../pages/MyQuotes.css"
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ApiQuotes from "../pages/ApiQuotes";
import logout from "../assets/logout.png"
import home from "../assets/home.png"
import quote from "../assets/quote.png"
import Dropdown from 'react-bootstrap/Dropdown';
import logo from "../assets/logo.png"


const API_URL = "http://localhost:5005";


function MyQuotes({apiQuotes}) {
  const {user, logOutUser} = useContext(AuthContext)
  

  const [quotes, setQuotes] = useState([]);
  const [names, setNames] = useState([])
  const [selectedUser, setSelectedUser] = useState(user.name)


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

  const filtered = quotes.filter((quote) =>{return quote.owner === selectedUser} )
  const getAllUsers = () => {
    
    axios
      .get(  `${API_URL}/auth/userslist`  )
      .then((response) => setNames(response.data))
      .catch((error) => console.log(error));
  };
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllQuotes();
  }, [] );
    // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllUsers();
  }, [] );

 //updateewrwr
  
  return (
    <div className="myQuotesPage">
      <div>
        <div className="UserContainer">

        <Link to="/">
              <img className="logo" src={logo} alt="logo" />
        </Link>

          <div className="UserList">
            <h2>Users</h2>

            
          
            <input type="search" placeholder="    Search..." className="search"/>

            <ul id="LeftList">

            
              <li>

              <Link to="/my-quotes">
                  <button>  Home</button>

              </Link>
              </li>

              <li>
              <Link to="/my-quotes">
                <button>  My qoutes</button>
              </Link>
              </li>

              <li>

             
            <button onClick={logOutUser}>Logout</button>
        

              </li>
             

             <li>
             
             </li>
            </ul>

            
            
            {/* <button className="ButtonMyQuotes" onClick={() => {setSelectedUser(user.name)}}>{user.name}</button> */}
            {/* <h4 className="UserButtons"><UsersList names={names}  setSelectedUser={setSelectedUser}/></h4> */}
          </div>
          <Dropdown>
              <Dropdown.Toggle  id="dropdown-basic">
                Users
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><h4 className="UserButtons"><UsersList names={names}  setSelectedUser={setSelectedUser}/></h4></Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>
        </div>
      </div>
      
      
      <div><AddQuote refreshQuotes={getAllQuotes} />
        <div className="QuoteCards"><h2></h2>{ filtered.length === 0 ? <div> {selectedUser} didnt add any quotes. </div> : filtered
        .map((quote) => <QuoteCard key={quote._id} {...quote} refresh={getAllQuotes} />  )} </div>
      </div>
      
      <div>
        
      </div>
      
       
     </div>

    
  );
}

export default MyQuotes;

