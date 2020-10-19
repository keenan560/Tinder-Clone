import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Keenan"
        message="Yo whats good?!"
        timestamp="40 secs ago"
        profilePic="...."
      />
    </div>
  );
}

export default Chats;
