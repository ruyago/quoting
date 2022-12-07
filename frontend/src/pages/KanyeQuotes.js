import React from "react";
import { Link } from "react-router-dom";

const KanyeQuotes = ({ quotesKanye }) => {
    console.log(quotesKanye);
    return (<div>
    {quotesKanye.map((quote) => {
      return (
        <div key={quote._id}>

          
          <div className="quotes">{quote}</div>
         
        </div>
      );
    })}
  </div>

);
};

    
    export default KanyeQuotes;