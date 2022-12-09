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



const API_URL = "http://localhost:5005";


function MyQuotes({apiQuotes}) {
  const {user} = useContext(AuthContext)

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

      <div className="UserContainer">
        <div className="UserList">
          <h2>Users</h2>
          <button className="ButtonMyQuotes" onClick={() => {setSelectedUser(user.name)}}>{user.name}</button>
          <UsersList names={names}  setSelectedUser={setSelectedUser}/>
        </div>
      </div>
      
      <div><AddQuote refreshQuotes={getAllQuotes} />
<<<<<<< HEAD
        <div className="QuoteCards"><h2></h2>{ filtered.length === 0 ? <div> {selectedUser} didnt add any quotes. </div> : filtered
        .map((quote) => <QuoteCard key={quote._id} {...quote} refresh={getAllQuotes} />  )} </div>
      </div>
      
     
      <div className="QuotesOfTheDay"><h2>Quotes of the day</h2><ApiQuotes apiQuotes={apiQuotes} /></div>
=======
      <div><h2></h2>{ filtered.length === 0 ? <div> {selectedUser} didnt add any quotes. </div> : filtered
      .map((quote) => <QuoteCard key={quote._id} {...quote} refresh={getAllQuotes} />  )} </div>
</div>
      
     
      <div><h2>Quotes of the day</h2><ApiQuotes apiQuotes={apiQuotes} /></div>
>>>>>>> 59cd0b00537301501fe3ffdfc05c85e1e1c51e06

      
       
    </div>
  );
}

export default MyQuotes;

