import { AuthContext } from "../context/auth.context";
import { useState } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";


const API_URL = "http://localhost:5005";

function UsersList({names, setSelectedUser}) {
 
  const {user} = useContext(AuthContext)
  


  return (
   
       <div>{names && names
       .filter((name) =>{return name.name !== user.name} )
       .map((user)=>(
        <div className="UserList" ><button onClick={() => {setSelectedUser(user.name)}}>{user.name}</button></div>
         )) }</div> 
    
  )
}


export default UsersList;