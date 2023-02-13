import { Button, TextField } from "@mui/material"
import React, { useState } from "react"

export const ToDo3=()=>{
  const [text,setText]=useState('')
  const [todo,setToDo]=useState([])
  const [copyToDo,setCopyToDo]=useState([])
  const [selectIndex,setSelectIndex]=useState(null)
  const[edit,setEdit]=useState(false)
  const handleAddTask=()=>{
    if(!text.trim())return
    setToDo([...todo,text])
    setCopyToDo([...todo,text])
    setText('') 
  }
  const handleDeletetask=(item,index)=>{
    const remainTask=todo.filter((elem,ind)=>index != ind )
    setToDo(remainTask)

}
const handleEditTask=(item,ind)=>{
  setText(item)
  setSelectIndex(ind)
  setEdit(true)


}
  return(
    <div>
      <h1>Helllooooo</h1>
      <TextField placeholder="To DO List" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <Button color="success" onClick={()=> handleAddTask()}>Add task</Button>
      <ol>
        {todo.map((item,index)=>{
          return (
          <li key={index}>{item}{''}
           <button onClick={()=>handleEditTask(item,index)}> Edit</button>
           <Button onClick={()=>handleDeletetask(item,index)}>Delete</Button>
         
          </li>
          )
        })}
      </ol>
    </div>
  )
}