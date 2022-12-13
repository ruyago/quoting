import React from "react";
import { Link } from "react-router-dom";

const ApiQuotes = ({ apiQuotes }) => {
    console.log(apiQuotes);
    return (
        <div>
          {apiQuotes.map((apiQuote) => {
            return (
              <div key={apiQuotes.body}>

               
                <p id="QuotesOfTheDayCard">{apiQuote.name}</p>
                
              </div>
            );
          })}
        </div>
      );
    };
    
export default ApiQuotes;