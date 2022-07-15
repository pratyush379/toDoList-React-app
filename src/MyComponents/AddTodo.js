import React from 'react'
import { useState } from 'react';

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
  
    const submit = (e) =>{
     e.preventDefault();
     if(!title || !desc){
     alert("title or description can not be blank")}
     else{
     props.addTodo(title,desc)
     setTitle("");
     setDesc("");}

    }
  
    return (
    <div className='container my-3 '>
       
        <h3>Add a To do</h3>
        <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Todo Tile</label>
      <input type="text" value={title} onChange = {(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Todo"/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Todo description</label>
      <input type="text" value = {desc}  onChange = {(e) => setDesc(e.target.value)} className="form-control" id="desc" placeholder="todo description"/>
    </div>
    
    <button type="submit" className="btn btn-sm btn-success">Submit</button>
  </form></div>
  )
}
