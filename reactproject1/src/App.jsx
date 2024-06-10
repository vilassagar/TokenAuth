import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

async function App() {
  const [count, setCount] = useState(0)

  try {
    const response = await axios.post("https://localhost:7137/api/Login");
  var token=response.data.token;
    console.log("Post created:", response.data.token);

    const response2 = await axios.get("https://localhost:7137/api/Values",   { 
      // Replace with your API endpoint
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }});
    console.log("Post created:", response2.data);
  } catch (error) {
    console.error("Error creating post:", error);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
