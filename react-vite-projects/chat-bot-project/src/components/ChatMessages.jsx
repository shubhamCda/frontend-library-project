import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((curUser, idx) => {
        return (
          <ChatMessage
            key={idx}
            message={curUser.message}
            sender={curUser.sender}
          />
        );
      })}
    </div>
  );
}


export default ChatMessages;