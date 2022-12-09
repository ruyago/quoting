import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import { useState } from "react";
import React from "react";

function Favourite() {


    const [likes, setLikes] = useState(0)

   return(

        <div>
            <button onClick={setLikes(likes)}>{likes +1}</button>
        </div>
    );



}



export default Favourite