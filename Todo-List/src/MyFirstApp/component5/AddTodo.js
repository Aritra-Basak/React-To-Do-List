import React, { useState } from 'react'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


export default function AddTodo(props) {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const navigate = useNavigate();
    const submit=(e)=>
    {
        e.preventDefault(); //Stopping the page reload on submit of the current form
        if(!title || !desc)
        {
        alert("Title or Description can't be blank")
        return false    
        }
        else{
        props.addMyTodo(title,desc);
        setTitle("");
        setDesc("");
        navigate('/'); // navigate to the respective url after submission.
        }
    }
  return (
    <div className='container my-3'>
        <form onSubmit={submit}>
            <h5>Add Your ToDo:-</h5>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Name</label>
                <input type="text" className="form-control" name="title" id="title" autoComplete="off" value={title} onChange={(e)=>{setTitle(e.target.value)}}/> 
                {/* We are making changes in the state of title by using the onChange function which is calling setTitle and passing the current event object's value-> e.target.value to it */}
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" className="form-control" name="desc" id="desc" autoComplete="off" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
            </div>
            <button type="submit" className="btn btn-success">Add</button>
        </form>
    </div>
  )
}
