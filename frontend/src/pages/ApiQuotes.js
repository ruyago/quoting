import React from "react";
import { Link } from "react-router-dom";

const ApiQuotes = ({ apiQuotes }) => {

    return (

        <div>
          {apiQuotes && apiQuotes.map((quote)=> (
            
            <div>
            <p>"{quote.body}"</p>
            <p>{quote.author}</p>
            </div>
            
          ))}
                </div>

       
      );
    };
    
export default ApiQuotes;