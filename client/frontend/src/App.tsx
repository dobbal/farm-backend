import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend + Backend Connected!</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;