import { useState, useEffect } from "react";
import "./App.css";
import Message from "./Message";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
// import db from "./firebase.js";

function App() {
  const [messages, setMessages] = useState([
    { username: "Johnny", message: "hello" },
    { username: "Mike", message: "What is uuup?" },
  ]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("What is your name?"));
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Facebook Messenger</h1>
      <h2>Welcome</h2>

      <FormControl>
        <InputLabel>Enter message...</InputLabel>
        <Input value={input} onChange={inputHandler} type="text" />

        <Button
          variant="contained"
          color="primary"
          disabled={!input}
          onClick={submitHandler}
        >
          Send message
        </Button>
      </FormControl>

      <div>
        {messages.map((message, i) => (
          <Message key={i} username={username} message={message} />
        ))}
      </div>
    </div>
  );
}

export default App;
