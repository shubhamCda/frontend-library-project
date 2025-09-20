import { useEffect, useRef, useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

import "./App.css";



function App() {
	const [chatMessages, setChatMessages] = useState([
		{
			message: "Hello, Chatbot",
			sender: "user",
		},
		{
			message: "Hello! How can I help you?",
			sender: "robot",
		},
		{
			message: "tody's date",
			sender: "user",
		},
		{
			message: "Today is September 19",
			sender: "robot",
		},
		{
			message: "flip a coin",
			sender: "user",
		},
		{
			message: "Sure! You got heads",
			sender: "robot",
		},
	]);

	return (
		<div className="app-container">
			<ChatMessages
				chatMessages={chatMessages}
				setChatMessages={setChatMessages}
			/>
			<ChatInput
				chatMessages={chatMessages}
				setChatMessages={setChatMessages}
			/>
		</div>
	);
}

export default App;
