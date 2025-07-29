import { useState } from "react"
import { useNavigate } from "react-router"

interface LoginProps {
  changeForm: () => void
}


export default function Login() {

  const [form,setForm] = useState<boolean>(false) // false - login  true - signup

  const changeForm = () => {
    if(form===false) setForm(true)
    else setForm(false)
  }

  return (
    <div className="h-screen w-full bg-gradient-to-tr from-orange-400 to-amber-300 flex items-center justify-center">
      {form===false?<LoginForm changeForm={changeForm}/>:<SingupForm changeForm={changeForm}/>}
      
    </div>
  )
}


function LoginForm({changeForm}: LoginProps) {

  let navigate = useNavigate()

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const handleLogin = async()=>{

    let requestBody = {
      'client':'web',
      'username':username,
      'password':password
    }

    const res = await fetch('http://localhost:7000/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(requestBody)
    })
    const message = await res.json()
    console.log(message,res.status)
    if(res.status===200){
      localStorage.setItem('token',message.token)
      navigate("/")
    }
    else if(res.status===401){
      setMessage(message.message)
    }
  }
  return (
    <div className="bg-white rounded-md shadow-md w-sm flex flex-col justify-center items-center gap-4 p-10">
      <h2 className="text-2xl font-bold">Welcome Back</h2>

      <span className="flex flex-col w-72">
        <label className="text-xs">Username</label>
        <input type="text" className="shadow bg-white px-4 py-2 rounded-lg border-2 border-neutral-100" placeholder="Username" onChange={ (e) => {setUsername(e.target.value)} }/>
      </span>

      <span className="flex flex-col w-72">
        <label className="text-xs">Password</label>
        <input type="password" className="shadow bg-white px-4 py-2 rounded-lg border-2 border-neutral-100" placeholder="Password" onChange={ (e) => {setPassword(e.target.value)} }/>
      </span>
      <p className="text-red-400">{message}</p>
      <button className="w-72 px-4 py-2 bg-orange-400 rounded-lg cursor-pointer" onClick={handleLogin}>Log in</button>
      <span>Don't have an account <a className="cursor-pointer text-orange-400" onClick={() => { changeForm() }}>Sign up</a></span>
    </div>
  )
}


function SingupForm({changeForm}: LoginProps) {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [rePassword, setRePassword] = useState<string>("")
  const [message, setMessage] = useState<string>("")


  const handleSend = async() => {
    console.log(password===rePassword)
    if(password.length<8)
      setMessage('password must be at least 8 characters')
    else if(password!==rePassword) 
      setMessage('passwords must match')
    else{
        let requestBody = {
        'username':username,
        'password':password
      }

      const res = await fetch('http://localhost:7000/api/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(requestBody)
      })
      const message = await res.json()
      console.log(message,res.status)
      if(res.status===200){
        setMessage(message.message)
        setTimeout(()=>{
          changeForm()
        },3000);
      }
      else if(res.status===401){
        setMessage(message.message)
      }
      else{
        setMessage(message.message || 'Error reaching the server')
      }
    }
    }
  
  return (
    <div className="bg-white rounded-md shadow-md w-sm flex flex-col justify-center items-center gap-4 p-10">
      <h2 className="text-2xl font-bold">Create an account</h2>

      <span className="flex flex-col w-72">
        <label className="text-xs">Username</label>
        <input className="shadow bg-white px-4 py-2 rounded-lg border-2 border-neutral-100" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
      </span>

      <span className="flex flex-col w-72">
        <label className="text-xs">Password</label>
        <input className="shadow bg-white px-4 py-2 rounded-lg border-2 border-neutral-100" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
      </span>

      <span className="flex flex-col w-72">
        <label className="text-xs">Repeat Password</label>
        <input className="shadow bg-white px-4 py-2 rounded-lg border-2 border-neutral-100" placeholder="Repeat Password" onChange={(e) => [setRePassword(e.target.value)]}/>
      </span>

      <p className={message==='Account created'?'text-green-400':'text-red-400'}>{message}</p>
      <button className="w-72 px-4 py-2 bg-orange-400 rounded-lg cursor-pointer" onClick={handleSend}>Create account</button>
      <span>Already have an account <a className="cursor-pointer text-orange-400" onClick={() => { changeForm() }}>Sign in</a></span>
    </div>
  )
}
