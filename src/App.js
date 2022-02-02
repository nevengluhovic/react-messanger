import { useState, useEffect } from "react";
import "./App.css";
import Message from "./Message";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
import db from "./firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name!"));
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img
        className="logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c526.png"
        alt=""
      />
      <h1>Facebook Messenger</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl>
          <InputLabel>Enter message...</InputLabel>
          <Input
            className="app__input"
            value={input}
            onChange={inputHandler}
            type="text"
          />

          <Button
            className="app__button"
            variant="contained"
            color="primary"
            disabled={!input}
            onClick={submitHandler}
          >
            Send message
          </Button>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
