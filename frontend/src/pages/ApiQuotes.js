import React from "react";
import { Link } from "react-router-dom";

const ApiQuotes = ({ apiQuotes }) => {
    console.log(apiQuotes);
    return (
        <div>
          {apiQuotes.map((apiQuote) => {
            return (
              <div key={apiQuote._id}>

               
                <p id="QuotesOfTheDayCard">Quote of the day</p>
                
              </div>
            );
          })}
        </div>
      );
    };
    
export default ApiQuotes;