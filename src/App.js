import { useState, useEffect } from "react";

import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    const test = () => {
      setTimeout(() => {
        console.log("connect");
      }, 1000);
    };

    test();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <p>{input}</p>
      <p>{name}</p>
    </div>
  );
}
