import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3001/api/test") // ✅ make sure this matches your backend port
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(err);
        setMessage("Error connecting to backend");
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>SiteDrop Frontend</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
