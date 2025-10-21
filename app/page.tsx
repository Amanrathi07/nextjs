"use client"



import axios from "axios"
import { useRef } from "react"


const maindiv:string ="h-screen w-screen flex items-center justify-center "

const inputbox:string="bg-white text-black p-3 border rounded-2xl focus:outline-0"

const button : string="bg-green-700 w-full h-10 border border-black text-amber-100 text-xl rounded-2xl"

export default  function Home(){


  const nameRef = useRef<HTMLInputElement>(null);
  const classRef = useRef<HTMLInputElement>(null);

  async function  handelForm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault() ;
    await console.log("start")
    await axios.post("http://localhost:3000/api/v1",{
      name:nameRef.current?.value || "",
      class:classRef.current?.value || ""})
    await console.log("done")

  }
  
  return(
    <div className ={`${maindiv}`}>
      <form onSubmit={handelForm}>
      <div className="bg-gray-500 p-10 rounded-2xl border  " >
          <input  className={`${inputbox}`}  type="text" name="" id=""  placeholder="Name" ref={nameRef}/>
          <br />
          <br />
         <input className={`${inputbox}`} type="text" name="" id=""  placeholder="Class" ref={classRef}/>
          <br />
          <br />
          <button className={`${button}`} >submit </button>
      </div>
      </form>
    </div>
  )
}