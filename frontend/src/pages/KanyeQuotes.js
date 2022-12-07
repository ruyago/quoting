import React from "react";
import { Link } from "react-router-dom";

const KanyeQuotes = ({ quotesKanye }) => {
    console.log(quotesKanye);
    return (
        <div>
          {quotesKanye.slice(0, 20).join("li")}
        </div>
      );
    };
    
    export default KanyeQuotes;