import React, { useState } from 'react'

export const ToDo2 = () => {
    const [text,setText]=useState('')
    const [toDo,setToDO]=useState([])
    const [copyToDo,setCopyToDo]=useState([])
    const [selectIndex,setSelectIndex]=useState(null)
    const [edit,setEdit]=useState(false)
    const handleAddtask=()=>{
        if(edit){
            const eidtedTask=toDo.map((elem, index)=> index=== selectIndex ? text : elem)
            setToDO(eidtedTask);
            setCopyToDo(eidtedTask);
            setText("");
            setEdit(false)
        } else {
        if(!text.trim())return
        setToDO([...toDo,text]);
        setCopyToDo([...toDo,text])
        setText("")

    }}
    const handleDeletetask=(item,index)=>{
        const remainTask=toDo.filter((elem,ind)=>index != ind )
        setToDO(remainTask)

    }
    const handleSearchTask=(value)=>{
        const searchItem=copyToDo.filter((elem)=> elem.toUpperCase().includes(value.toUpperCase()))
        setToDO(searchItem)

    }
    const handleEditTask=(item,ind)=>{
        setText(item)
        setSelectIndex(ind)
        setEdit(true)


    }

  return (
    <div>
        <h1>Hello</h1>
        <input placeholder='Searche here' type="text" onChange={(e)=> handleSearchTask(e.target.value)}/>
        <input placeholder='To DO List' value={text} onChange={(e)=>setText(e.target.value)}  type="text"/> 
        <button onClick={()=>handleAddtask()}>{edit ? "Edit": "Add"} task</button>
        <ol>
            {toDo.map((item,index)=>{
                return(
                    <li key={index}>
                        {item}{""}
                        <button onClick={()=>handleEditTask(item,index)}> Edit</button>
                        <button onClick={()=>handleDeletetask(item,index)}>Delete</button>

                    </li> 

                )
            })}
           
        </ol>
    </div>
  )
}
