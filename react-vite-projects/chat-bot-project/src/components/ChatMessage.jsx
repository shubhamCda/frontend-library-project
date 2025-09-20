import robotProfileImg  from "../assets/user.png";
import userProfileImg  from "../assets/robot.png";


function ChatMessage({ message, sender }) {
  return (
    <div
      className={
        sender === "user" ? "chat-message-user" : "chat-message-robot"
      }
    >
      {sender === "robot" && (
        <img
          className="chat-message-profile"
          src={robotProfileImg}
          width="50"
        />
      )}
      <div className="chat-text-message">{message}</div>
      {sender === "user" && (
        <img className="chat-message-profile" src={userProfileImg} width="50" />
      )}
    </div>
  );
}


export default ChatMessage;