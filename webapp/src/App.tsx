import NavBar from "./components/navBar"
import SideBar from "./components/sideBar"

function App() {

  return (
    <>
    <div className='bg-neutral-800 h-screen w-full grid grid-cols-[2fr_9fr] grid-rows-[10vh_90vh]'>
      <NavBar/>
      <SideBar/>      
      {/* <div className="min-w-[230px] flex flex-col gap-4 px-4">
        {chats.map((item,idx)=>
        <ChatBar key={idx}/>
        )}
        <AddBar/>
      </div> */}

      <div style={{gridRowStart:1,gridRowEnd:3,gridColumnStart:2}} className="bg-gradient-to-bl to-orange-400 from-amber-300 p-10">

        <div className="bg-neutral-700 w-auto h-full rounded-xl">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-bl from-black to-white text-3xl">text        </h1>

        </div>


      </div>
    </div>
    </>
  )
}

export default App
