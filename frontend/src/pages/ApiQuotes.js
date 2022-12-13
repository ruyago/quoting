import React from "react";
import { Link } from "react-router-dom";

const ApiQuotes = ({ apiQuotes }) => {

    return (

      // <div id="QuotesOfTheDay"><h2>Quotes of the day</h2><ApiQuotes apiQuotes={apiQuotes} /></div>
      <div className="cards" id="QuoteCard">
    
          <p className="owner">@{apiQuotes.author}</p>

          <p className="text" style={{ maxWidth: "300px" }}>"{apiQuotes.body}"</p>
        
      </div>

      );
    };
    
export default ApiQuotes;