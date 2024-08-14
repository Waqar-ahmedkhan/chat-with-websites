 "use client"

import { useChat } from "ai/react";

function ChatWrapper({sessionId}: {sessionId: string}) {
 const {messages, handleInputChange, input, handleSubmit } = useChat({
  api: "/api/chat-stream",
  body: {sessionId}

 })

  return <div className="relative min-h-full bg-zinc-900  flex divide-y divide-zinc-700 flex-col justify-between gap-2">
    <div className="flex-1 text-black bg-zinc-800 justify-between  flex flex-col">
      {JSON.stringify(messages)}
    </div>

    
   
    <form action="" onSubmit={handleSubmit}>
    <input type="text" className="text-black" value={input} onChange={handleInputChange} />
    <button className="text-white bg-blue-500 hover:bg-blue-700 p-2 rounded-md" type="submit">Send</button>
    </form>

  </div>;
}

export default ChatWrapper;
