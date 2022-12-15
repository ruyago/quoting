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
import { queryByTestId } from "@testing-library/react";


const API_URL = "http://localhost:5005";


function MyQuotes({ apiQuotes, getAllQuotes, quotes }) {
  const { user, logOutUser } = useContext(AuthContext)


  const [names, setNames] = useState([])
  const [selectedUser, setSelectedUser] = useState()
  const [search, setSearch] = useState("")

  function refreshPage(){ 
    window.location.reload(); 
}


  const filtered = quotes.filter((quote) => { return quote.owner === selectedUser })
  const getAllUsers = () => {

    axios
      .get(`${API_URL}/auth/userslist`)
      .then((response) => setNames(response.data))
      .catch((error) => console.log(error));
  };
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllQuotes();
  }, []);
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllUsers();
  }, []);

  //updateewrwr

  return (
   <div className="">
    <div className="myQuotesPage">
      <div>
  
        <div className="UserContainer">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>

          <div className="UserList">
            
            <br />
          
            <input type="search" value={search} placeholder="Search..." className="search" onChange={(l)=> setSearch(l.target.value)}/>



            <ul id="LeftList">
              <li><Link to="/"><button>Home</button></Link></li>
              <li><Link to="/favourites"><button>My favourites</button></Link></li>
              <li><button onClick={logOutUser}>Logout</button></li>
            </ul>
            {/* <button className="ButtonMyQuotes" onClick={() => {setSelectedUser(user.name)}}>{user.name}</button> */}
            {/* <h4 className="UserButtons"><UsersList names={names}  setSelectedUser={setSelectedUser}/></h4> */}
          </div>
                <button id="me" onClick={()=>{setSelectedUser(user.name)}}>My quotes only</button>
                <br />
                <br />
                <button id="me" onClick={()=>{setSelectedUser()}}>Every quotes</button>

        </div>
      </div>


      <div><AddQuote refreshQuotes={getAllQuotes} />
        <div className="QuoteCards">{filtered.length === 0 && !selectedUser ? quotes
          .filter((quote)=> { return quote.description.toLowerCase().includes(search.toLowerCase())})
          //Robot's work!!!
          // .map((item, index) => {
          //   // Check if the input value is present in the description
          //   if (item.description.indexOf(search) !== -1) {
          //     // Use substr to highlight the matching text
          //     return <li key={index}>{item.description.substr(0, item.description.indexOf(search))}
          //       <span className="highlight">{search}</span>
          //       {item.description.substr(item.description.indexOf(search) + search.length)}
          //     </li>
          //   } else {
          //     return <li key={index}>{item.description}</li>
          //   }
          // })
        
          .map((quote) => <QuoteCard key={quote._id} {...quote} refresh={getAllQuotes} />) : filtered.length === 0 && selectedUser ? `No quotes`: filtered
          .map((quote) => <QuoteCard key={quote._id} {...quote} refresh={getAllQuotes} />)} </div>
      </div>
      <div className="MoreQuoteContainer">
        <div className="MoreQuote">
            <h3>Random quotes</h3><br/><br/><br/>
          <ApiQuotes apiQuotes={apiQuotes}/>
          

        </div>
      </div>
       
     </div>
</div> 
    

  );
}

export default MyQuotes;

