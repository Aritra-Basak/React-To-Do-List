import React from 'react'
import './ToDos.css'
import OnlyToDo from '../component4/onlyToDo'



export default function ToDos(props) {
  return (
    <>
        <div className='Todocontainer mx-auto my-auto' >
          <div className='header text-center'>
              <h2>My To-Dos</h2>
          </div>
          <ul className='my-4'>
            {props.todoval.length===0?<h2 className='text-light fw-4'>"Nothing to do Today"</h2>:
                                    props.todoval.map((todo)=>{
                                      return ( //we caqn return multiple things in jsx like this by wrapping inside a tag
                                      //while passing any values from an array using map always use a key so that react can uniquely identify each
                                        <li key={todo.sno}> 
                                            <OnlyToDo todoval={todo} onDelete={props.onDelete} />
                                        </li>
                                      )
                                    })
                                    }
          </ul>
          
        </div>

    </>
  )
}

