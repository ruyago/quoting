import React from "react";
import { Link } from "react-router-dom";

const ApiQuotes = ({ apiQuotes }) => {

    return (
        <div>
          {apiQuotes && apiQuotes.map((quote)=> (
            
            <div>
              <p className="owner">-{quote.author}-</p>
              <p className="text">"{quote.body}"</p>
            </div>
            
          ))}

        </div>
      );
    };
    
export default ApiQuotes;