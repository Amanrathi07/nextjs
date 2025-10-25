"use client"
import { useState } from "react"


export default function Good(){
    const [count,setCount] = useState<number>(0)
    return(
        <div>
            count : {count}
            <br />
            <button onClick={()=>{setCount(c=>c+1)}}>increace</button>
        </div>
    )
}