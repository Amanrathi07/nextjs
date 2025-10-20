import axios from "axios"

async function getTodo(){
    const res =await axios.get("http://localhost:3000/api")
    return res.data.todo
}


export default async function Home(){
  const todos = await getTodo();
  return(
    <div>
      {todos.map((todo:{title:string , dist : string })=>(<div  key={todo.title}>
                                                              <h1>{todo.title}</h1>
                                                              <h1>{todo.dist}</h1>
                                                          </div>))}
    </div>
  )
}
