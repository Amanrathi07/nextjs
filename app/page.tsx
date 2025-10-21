"use client"



import axios from "axios"
import Link from "next/link"
import { useRef, useState } from "react"


const maindiv:string ="h-screen w-screen flex items-center justify-center "

const inputbox:string="bg-white text-black p-3 border rounded-2xl focus:outline-0"

const button : string="bg-green-700 w-full h-10 border border-black text-amber-100 text-xl rounded-2xl"

export default  function Home(){

  const [name,setName] = useState("");
  const [rollno,setRollno] = useState("");

  const name1 = useRef<string>();


  function handelForm(e){
    e.preventDefault() ;
    axios.post("http://localhost:3000/api/v1",{
      name:name1.current,
      class:rollno
    })
  }
  
  return(
    <div className ={`${maindiv}`}>
      <form >
      <div className="bg-gray-500 p-10 rounded-2xl border  " >
          <input  className={`${inputbox}`}  type="text" name="" id=""  placeholder="Name" onChange={(e)=>{name1.current=e.target.value }}/>
          <br />
          <br />
         <input className={`${inputbox}`} type="text" name="" id=""  placeholder="Class" onChange={(e)=>{setRollno(e.target.value)}}/>
          <br />
          <br />
          <button className={`${button}`} onClick={(e)=>{handelForm(e)}} >submit </button>
      </div>
      </form>
    </div>
  )
}