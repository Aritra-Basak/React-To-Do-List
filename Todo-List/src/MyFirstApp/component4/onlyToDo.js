import React from 'react'
import './onlyToDo.css'

export default function onlyToDo({todoval,onDelete}) //directly passing the todoval and onDelete from the parent component as an argument 
{
  return (
    <div className='OnlyToDoContainer'>
      <div className='top-row'>
          <h3 className='my-2 mx-2'>{todoval.title}</h3>
          <button type='button' className='btn btn-sm btn-outline-danger my-2 mx-2' onClick={()=>{onDelete(todoval)}}>Delete</button>
          {/* Here in above, by using an arrow function we are actually calling a function on click which is passing the respective todoval obj to the onDelete function defined in
           Mainpage.js , if we directly try to call the onDelete function then we would have passed the function on onClick*/}
      </div>
      <div className='bot-row'>
        <p className='my-2 mx-2 '>{todoval.desc}</p>
      </div>
    </div>
  )
}
