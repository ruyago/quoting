import { AuthContext } from "../context/auth.context";
import { useState } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";


const API_URL = "http://localhost:5005";

function UsersList({names, setSelectedUser}) {
 
  const {user} = useContext(AuthContext)
  


  return (
    <div className="UsersList">
       <p>{names && names
       .filter((name) =>{return name.name !== user.name} )
       .map((user)=>(
        <button onClick={() => {setSelectedUser(user.name)}}><div>{user.name}</div></button>
         )) }</p> 
    </div>
  )
}


export default UsersList;