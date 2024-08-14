 "use client"

import { useChat } from "ai/react";

function ChatWrapper({sessionId, initialMassages}: {sessionId: string, initialMassages: string[]}) {
 const {} = useChat({
  api: "api/chat-stream",
 })

  return <div>ChatWrapper</div>;
}

export default ChatWrapper;
