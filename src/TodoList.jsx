import {useState} from "react";

import { v4 as uuidv4 } from 'uuid';



export default function Todo(){

    const[input,setInput]=useState("");
    const[Todo,setTodo]=useState([{task:"sample-List",id:uuidv4()}]);
    let inputValue=(event)=>{
        // console.log(event.target.value);
        setInput(event.target.value);
    }
    let addtoTodo=()=>{
        setTodo([...Todo,{task:input,id:uuidv4()}]);
        setInput("");
    }
    let addtoDelete=(id)=>{
        console.log(id)
        setTodo(Todo.filter((todo)=>todo.id!=id));
    }

    let UpdateTodo=()=>{
        setTodo((prev)=>prev.map((prevTodo)=>{
            return {...prevTodo,task:prevTodo.task.toUpperCase()}
        })

        )
    }

    let updatesingle=(id)=>{
        setTodo((prev)=>prev.map((prevtodo)=>{
            if(prevtodo.id===id){
                return {...prevtodo,task:prevtodo.task.toUpperCase()}
            }else{
                return prevtodo;
            }
        }))

    }



    return (
        <>
        {/* {Todo} */}
        <input type="text" onChange={inputValue} name="task" value={input} placeholder="enter the task to do"/><br/>
        <button  onClick={addtoTodo}>add</button>
        <hr/>
        <p>Task To do's</p>
        <ul>
            {Todo.map((todo)=>
                {
                    return <li key={todo.id} style={{color:"white"}}>
                            {todo.task}&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>updatesingle(todo.id)}>updateone</button>&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>addtoDelete(todo.id)} style={{height:"40px"}}>
                                delete
                            </button>
                            </li>})
                }
        </ul>
        <button onClick={UpdateTodo}>UppercaseAll</button>
        
        </>
    )
}