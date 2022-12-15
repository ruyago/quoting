import React from "react";
import { Link } from "react-router-dom";

const ApiQuotes = ({ apiQuotes }) => {

    return (
        <div>
          {apiQuotes && apiQuotes.map((quote)=> (
            
            <div>
              <p className="text">"{quote.body}"</p>
              <p className="owner">-{quote.author}-</p>
            </div>
            
          ))}

        </div>
      );
    };
    
export default ApiQuotes;