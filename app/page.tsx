"use client"



import axios from "axios"
import { useRef } from "react"


const maindiv:string ="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"

const inputbox:string="bg-gray-800 px-6 py-2 rounded-xl border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          

const button : string="bg-green-700 w-full h-10 border border-black text-amber-100 text-xl rounded-2xl"

export default  function Home(){


  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  async function  handelForm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault() ;
    await console.log("start")
    await axios.post("http://localhost:3000/api/v1",{
      email:emailRef.current?.value || "",
      password:passRef.current?.value || ""})
    await console.log("done")

  }
  
  return(
    <div className ={`${maindiv}`}>
      <form onSubmit={handelForm} className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-80 border border-gray-700 transition-transform duration-200 hover:scale-[1.02]">
      <div >
          <input  className={`${inputbox}`}  type="text" name="" id=""  placeholder="email" ref={emailRef}/>
          <br />
          <br />
         <input className={`${inputbox}`} type="text" name="" id=""  placeholder="password" ref={passRef}/>
          <br />
          <br />
          <button className={`${button}`} >submit </button>
      </div>
      </form>
    </div>
  )
}