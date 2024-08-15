 import { type Message as TMessage } from "ai/react"
import { MessageSquare } from "lucide-react"
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
        : {
           <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <MessageSquare className=" size-9 text-blue-500"/>
            <h3 className="font-semibold text-white text-xl"> You`re all set!</h3>
            <p className=" text-zinc-500 text-sm"> Ask your first question to get started</p>
           </div>
        }
    </div>
  )
}

export default Message