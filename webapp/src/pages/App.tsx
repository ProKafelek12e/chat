import { useNavigate } from "react-router"
import NavBar from "../components/navBar"
import SideBar from "../components/sideBar"
import { useState } from "react"

function App() {
  let navigate = useNavigate()

  const [logged,setLogged] = useState<Boolean>(false)

  const checkAuth = async() => {
    const res = await fetch('http://localhost:7000/api/token',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({token:localStorage.getItem('token')})
    })
    if(res.status===200) setLogged(true)
    else navigate('/login')
    
  }
  checkAuth()
  if(logged===true){
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
else{
  return (
    <div className="w-full h-screen flex justify-center items-center">
    <h1 className="w-20">Loading...</h1>
    </div>
  )
}
}

export default App
