import React from "react";
import { Link } from "react-router-dom";

const ApiQuotes = ({ apiQuotes }) => {
    console.log(apiQuotes);
    return (
        <div>

          <p>"{apiQuotes.body}"</p>
          <p>{apiQuotes.author}</p>

        </div>
      );
    };
    
export default ApiQuotes;