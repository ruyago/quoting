import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddQuote(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .post(
        `${API_URL}/api/my-quotes`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        props.refreshQuotes();
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="AddQuote">
      <h3>Add Quote</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Quote:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddQuote;