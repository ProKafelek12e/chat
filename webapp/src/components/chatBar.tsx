interface status {
    number:number
}

export default function ChatBar() {
  return (
    <div className="rounded-xl bg-neutral-700 w-auto h-20 p-4">
<div className="flex flex-row justify-between">

        <h2 className="text-2xl font-bold text-white">Group chat</h2>
        <div className=""><StatusBadge number={1}/></div>
</div>
        <span className="flex flex-row justify-between">
            <p className="text-[12px] text-white font-medium truncate mr-4">you: fdsfsd dsf ds fsd fsd </p>
            <p className="text-[12px] text-white font-medium">17:00</p>
        </span>
      
    </div>
  )
}


function StatusBadge({number}:status){
    return(
        <div className={`h-6 w-6 rounded-[100px] ${number!==0?"bg-yellow-400":"hidden"} flex justify-center items-center`}>
            {number!==0?<p className="text-white font-bold text-xl">3</p>:null}
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