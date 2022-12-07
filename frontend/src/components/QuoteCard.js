import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function QuoteCard ( { title, description, _id, owner } ) {
  
  return (
    <div className="QuoteCard card">
     <Link to={`/my-quotes/${_id}`}>
        <h3>{title}</h3>
        </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <p >{owner} </p>
    </div>
  );
}

export default QuoteCard;