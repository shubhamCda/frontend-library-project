import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./chatInput.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputValue,
        sender: "user",
      },
    ];

    const response = Chatbot.getResponse(inputValue);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
      },
    ]);

    setInputValue("");
  }
  return (
    <div className="chat-input-container">
      <input
        className="chat-input-box"
        onChange={handleInputChange}
        value={inputValue}
        placeholder="send a message to Chatbot"
        size="30"
      />
      <button onClick={sendMessage} className="send-btn">
        Send
      </button>
    </div>
  );
}


export default ChatInput;