import { Button, TextField } from "@mui/material"
import React, { useState } from "react"

export const ToDo4=()=>{
    const [text,setText]=useState('')
    const [toDo,setToDo]=useState([])
    const [copytoDo,setCopyToDo]=useState([])

    const handleAddTask=()=>{
        if(!text.trim()) return
        setCopyToDo([...toDo,text])
        setToDo([...toDo,text])
        setText('')
    }
    const handleDelete=(item,index)=>{
    const  handleDelete=toDo.filter((elem,ind)=>index != ind)
    setToDo(handleDelete)
    setText('')

    }
    return(
        <div>
            <h1>ToDo 4</h1>
            <TextField placeholder="To Do list" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <Button onClick={()=>handleAddTask()}>Add Task</Button>

            <ol>
                {toDo.map((item,index)=>{
                    return(
                        <li key={index}>
                            {item}{''}
                        <button onClick={()=>handleDelete(item,index)}>Delete</button>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}