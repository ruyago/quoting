import React from "react";
import { Link } from "react-router-dom";

const ApiQuotes = ({ apiQuotes }) => {
    console.log(apiQuotes);
    return (
     <>
          <p>"{apiQuotes.body}"</p>
          <p>{apiQuotes.author}</p>

          </>
      );
    };
    
export default ApiQuotes;