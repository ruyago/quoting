import React from "react";
import { Link } from "react-router-dom";

const ApiQuotes = ({ apiQuotes }) => {
    console.log(apiQuotes);
    return (
        <div>
          {apiQuotes.map((apiQuote) => {
            return (
              <div key={apiQuote._id}>

               
                <h3>hello</h3>
                
              </div>
            );
          })}
        </div>
      );
    };
    
export default ApiQuotes;