import { useState, type SetStateAction } from "react"

interface LoginProps {
  changeForm: React.Dispatch<SetStateAction<boolean>>
}
interface SignProps {
  changeForm: React.Dispatch<SetStateAction<boolean>>
}


export default function Login() {

  const [form,setForm] = useState<boolean>(false) // false - login  true - signup

  return (
    <div className="h-screen w-full bg-gradient-to-tr from-orange-400 to-amber-300 flex items-center justify-center">
      {form===false?<LoginForm changeForm={setForm}/>:<SingupForm changeForm={setForm}/>}
      
    </div>
  )
}


function LoginForm({changeForm}:LoginProps) {
  return (
    <div className="bg-white rounded-md shadow-md w-sm flex flex-col justify-center items-center gap-4 p-10">
      <h2 className="text-2xl font-bold">Welcome Back</h2>

      <span className="flex flex-col w-72">
        <label className="text-xs">Username</label>
        <input className="shadow bg-white px-4 py-2 rounded-lg border-2 border-neutral-100" placeholder="Username"/>
      </span>

      <span className="flex flex-col w-72">
        <label className="text-xs">Password</label>
        <input className="shadow bg-white px-4 py-2 rounded-lg border-2 border-neutral-100" placeholder="Password"/>
      </span>
      <button className="w-72 px-4 py-2 bg-orange-400 rounded-lg cursor-pointer">Log in</button>
      <span>Don't have an account <a className="cursor-pointer text-orange-400" onClick={() => { changeForm(true) }}>Sign up</a></span>
    </div>
  )
}


function SingupForm({changeForm}:SignProps) {
  return (
    <div className="bg-white rounded-md shadow-md w-sm flex flex-col justify-center items-center gap-4 p-10">
      <h2 className="text-2xl font-bold">Create an account</h2>

      <span className="flex flex-col w-72">
        <label className="text-xs">Username</label>
        <input className="shadow bg-white px-4 py-2 rounded-lg border-2 border-neutral-100" placeholder="Username"/>
      </span>

      <span className="flex flex-col w-72">
        <label className="text-xs">Password</label>
        <input className="shadow bg-white px-4 py-2 rounded-lg border-2 border-neutral-100" placeholder="Password"/>
      </span>

      <span className="flex flex-col w-72">
        <label className="text-xs">Repeat Password</label>
        <input className="shadow bg-white px-4 py-2 rounded-lg border-2 border-neutral-100" placeholder="Repeat Password"/>
      </span>
      <button className="w-72 px-4 py-2 bg-orange-400 rounded-lg cursor-pointer">Create account</button>
      <span>Already have an account <a className="cursor-pointer text-orange-400" onClick={() => { changeForm(false) }}>Sign in</a></span>
    </div>
  )
}
