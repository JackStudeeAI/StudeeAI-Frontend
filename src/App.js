import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Use the environment variable for the backend URL
    axios.get(process.env.REACT_APP_BACKEND_URL)
      .then((response) => {
        setMessage(response.data.message);  // Assuming your backend returns a message
      })
      .catch((error) => {
        console.error("Error connecting to backend:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Studee AI!</h1>
      <p>{message || "Waiting for backend response..."}</p>
    </div>
  );
}

export default App;
