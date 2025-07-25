import { ChatBar, AddBar } from "./chatBar"

const chats = [
    {name:"chat1",lastMessage:{sender:'you',messageContent:'Last message sent',messageTimestamp:new Date('2025-07-25T02:00:00Z')},unreadMessages:12},
    {name:"chat1",lastMessage:{sender:'you',messageContent:'Last message sent',messageTimestamp:new Date('2025-07-20T00:00:00Z')},unreadMessages:0},
    {name:"chat1",lastMessage:{sender:'you',messageContent:'Last message sent',messageTimestamp:new Date('2024-07-25T00:00:00Z')},unreadMessages:2},
]

export default function SideBar() {
  return (
    <div className="min-w-[230px] flex flex-col gap-4 px-4">
        {chats.map((item,idx)=>
            <ChatBar key={idx} name={item.name} lastMessage={item.lastMessage} unreadMessages={item.unreadMessages}/>
        )}
        <AddBar/>
    </div>
  )
}
