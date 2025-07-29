interface item {
    name:string;
    lastMessage:lastMessage;
    unreadMessages:number;
}

interface lastMessage{
    sender:string;
    messageContent:string;
    messageTimestamp:Date;
}

interface status {
    number:number
}

export function ChatBar({name, lastMessage, unreadMessages}:item) {

    const stripTime = (date:Date) => {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    }
    const stripYear = (date:Date) => {
        return new Date(date.getFullYear())
    }


    const lastMessageTimestamp = lastMessage.messageTimestamp
    const now = new Date()

    const pad = (n: number) => (n < 10 ? `0${n}` : n);

    let finalTimestamp = ""

    // same day
    if(stripTime(now).valueOf()===stripTime(lastMessageTimestamp).valueOf()) 
        finalTimestamp = `${lastMessageTimestamp.getHours() <= 9 ?"0":""}${lastMessageTimestamp.getHours()}:${lastMessageTimestamp.getMinutes() <= 9 ?"0":""}${lastMessageTimestamp.getMinutes()}`
    // same year
    else if(stripYear(stripTime(now)).valueOf()===stripYear(stripTime(lastMessageTimestamp)).valueOf()) 
        finalTimestamp = `${pad(lastMessageTimestamp.getDate())}.${pad(lastMessageTimestamp.getMonth()+1)}`
    // else
    else 
        finalTimestamp = `${pad(lastMessageTimestamp.getDate())}.${pad(lastMessageTimestamp.getMonth()+1)}.${lastMessageTimestamp.getFullYear()}`



  return (
    <div className="rounded-xl bg-neutral-700 w-auto h-20 p-4">
<div className="flex flex-row justify-between">

        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <div className=""><StatusBadge number={unreadMessages}/></div>
</div>
        <span className="flex flex-row justify-between">
            <p className="text-[12px] text-white font-medium truncate mr-4">{lastMessage.sender}: {lastMessage.messageContent}</p>
            <p className="text-[12px] text-white font-medium">{finalTimestamp}</p>
        </span>
      
    </div>
  )
}


function StatusBadge({number}:status){
    return(
        <div className={`h-6 min-w-6 rounded-[100px] ${number!==0?"bg-yellow-400":"hidden"} flex justify-center items-center`}>
            {number!==0?<p className="text-white font-bold text-[14px]">{number>9?'9+':number}</p>:null}
        </div>
    )
}

export function AddBar(){
    return(
    <div className="rounded-xl bg-neutral-700 w-auto h-20 p-4 flex justify-center items-center cursor-pointer">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.5" y1="17.5" x2="32.5" y2="17.5" stroke="#A1A1A1" strokeWidth="5" strokeLinecap="round"/>
            <line x1="17.5" y1="32.5" x2="17.5" y2="2.5" stroke="#A1A1A1" strokeWidth="5" strokeLinecap="round"/>
        </svg>
    </div>
    )
}