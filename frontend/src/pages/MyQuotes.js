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
import "./Dropdown.css"


const API_URL = "http://localhost:5005";


function MyQuotes({apiQuotes, getAllQuotes, quotes}) {
  const {user, logOutUser} = useContext(AuthContext)
  

  const [names, setNames] = useState([])
  const [selectedUser, setSelectedUser] = useState(user.name)


  

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
          
          
            <input type="search" placeholder="    Search..." className="search"/>

            <ul id="LeftList">

            
              <li>

                <Link to="/">
                    <button>Home</button>

                </Link>
              </li>

              <li>
                <Link to="/favourites">
                  <button>My favourites</button>
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
              <Dropdown.Toggle className="UserButtonColor">
                Users
              </Dropdown.Toggle>

              <Dropdown.Menu className="MenuColor">
                <h4 className="Users"> 
                  <Link to="/my-quotes" className="UserList">
                    <button id="me">Me</button>
                   </Link>
                  <UsersList names={names}  setSelectedUser={setSelectedUser}/>
                </h4>
              </Dropdown.Menu>
            </Dropdown>
        </div>
      </div>
      
      
      <div><AddQuote refreshQuotes={getAllQuotes} />
        <div className="QuoteCards"><h2></h2>{ filtered.length === 0 ? <div> {selectedUser} didnt add any quotes. </div> : filtered
        .map((quote) => <QuoteCard key={quote._id} {...quote} refresh={getAllQuotes} />  )} </div>
      </div>
      <div className="MoreQuoteContainer">
        <div className="MoreQuote">
      
            <p id="MoreQuoteAuthor">@{apiQuotes.author}</p>

            <p id="MoreQuoteText">"{apiQuotes.body}"</p>
          
            <div id="TopQuotes">Top quotes of the day</div>
        </div>
      </div>
       
     </div>

    
  );
}

export default MyQuotes;

