import React, { useState } from 'react'

export const CopyToDo = () => {
    const [text, setText]=useState('')
    const [toDo,setToDo]= useState([]);
    const [copyToDo,setCopyToDo]= useState([]);
    const [selecetedIndex,setSelectedIndex]=useState(null);
    const [edit,setEdit]=useState(false);
    const handleAddTask=()=>{
        if(edit){
            const editTask=toDo.map((elem,index)=>index=== selecetedIndex ? text: elem);
            setToDo(editTask);
            setCopyToDo(editTask);
            setText('');
            setEdit(false)
         } else{
        if(!text.trim()) return;
        setToDo([...toDo, text])
        setCopyToDo([...toDo, text])
        setText(""); 
    }
    };
     
     const handleDeleteTask=(index)=>{
        const remainTask= toDo.filter((ind)=>ind != index)
        setToDo(remainTask)
     }
     const handleSearchTask =(value)=>{
        const serachdItem=copyToDo.filter((elem)=> elem.toUpperCase().includes(value.toUpperCase()))
      
        setText(serachdItem)

     }
     const handleEditTask=(item,ind)=>{
         
          setText(item)
          setSelectedIndex(ind)
          setEdit(true)
     }
  return (
    <div>
        <h1>Hello</h1>
        <input type="text"  placeholder='search here.' onChange={(e)=>handleSearchTask(e.target.value)}/>
        <input type="text" placeholder='Add To Do' value={text} onChange={(e)=>setText(e.target.value)}/> {' '}
        <button onClick={()=>handleAddTask( )}> {edit ? "Eidt": "Add"}  Tasks</button>
        <ol> 
            {toDo.map((item,index)=>{
                return (
                    <li key={index}>{item} {' '}
                    <button onClick={()=> handleEditTask(item,index)}>Edit</button>
                    <button onClick={()=> handleDeleteTask(item,index)}>Delete</button>
                    </li>

                )
            })}
        </ol>
    </div>
  )
}
