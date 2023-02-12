import { Button, TextField } from "@mui/material"
import React, { useState } from "react"

export const ToDo3=()=>{
  const [text,setText]=useState('')
  const [todo,setToDo]=useState([])
  const handleAddTask=()=>{
    if(!text.trim())return
    setToDo([...todo,text])
    setText('') 
  }
  return(
    <div>
      <h1>Helllooooo</h1>
      <TextField placeholder="To DO List" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <Button color="success" onClick={()=> handleAddTask()}>Add task</Button>
      <ol>
        {todo.map((item,index)=>{
          return (
          <li>{item}{''}</li>
          )
        })}
      </ol>
    </div>
  )
}