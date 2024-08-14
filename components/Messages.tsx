 import { type Message as TMessage } from "ai/react"
import { MessageChat } from "./MessageChat"
interface messageProps {
    messages: TMessage[]
}
function Message({messages}: messageProps) {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem) flex-1 flex-col overflow-y-auto]">
        {messages.map((message, i) => {
           return <MessageChat key={i} content={message.content} isUserMessage={message.role==="user"}
        />})}
    </div>
  )
}

export default Message