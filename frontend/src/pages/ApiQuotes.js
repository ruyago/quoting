import React from "react";
import { Link } from "react-router-dom";

const ApiQuotes = ({ apiQuotes }) => {
    console.log(apiQuotes);
    return (
        <div>
          {apiQuotes.map((apiQuote) => {
            return (
              <div key={apiQuote._id}>

               
                <p className="QuoteCard card">Ioannis V, king of Germany.</p>
                
              </div>
            );
          })}
        </div>
      );
    };
    
export default ApiQuotes;