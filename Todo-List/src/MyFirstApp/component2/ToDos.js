import React from 'react'
import './ToDos.css'
import PropTypes from 'prop-types'
import OnlyToDo from '../component4/onlyToDo'
import { useState} from "react";


export default function ToDos(props) {
//fetching the value from the search bar as useState value
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    console.log(e)
    //convert input text to lower case
    var searchval = e.target.value.toLowerCase();
    setInputText(searchval);
  };
  //filtering the todoval data passed as a props as per the search box value
  const filteredData = props.todoval.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
        return el;
    }
    //return the item which contains the user input by converting the already present title to lowercase.
    else {
        return el.title.toLowerCase().includes(inputText);
    }
})
  return (
    <>
        <div className='Todocontainer mx-auto my-auto' >
          <div className='header text-center'>
              <h2>My To-Dos</h2>      
          </div>
            {/* Here as a props we are passing a boolean js value and at below by using ternary operator we are checking if it's true then we will show else not */}
          {props.searchbar?<div className="d-flex mx-4">
                    <input className="me-2 form-control" type="search" onChange={inputHandler} placeholder="Search" aria-label="Search"/>
                    
          </div>:""}
          <ul className='my-4'>
          {props.todoval.length===0?<h2 className='text-light fw-4'>"Nothing to do Today"</h2>:
                                    filteredData.map((todo)=>{
                                      return ( //we caqn return multiple things in jsx like this by wrapping inside a tag
                                      //while passing any values from an array using map always use a key so that react can uniquely identify each
                                        <li key={todo.sno}> 
                                            <OnlyToDo todoval={todo}  onDelete={props.onDelete} />
                                        </li>
                                      )
                                    })
                                    }
          </ul>
          
        </div>

    </>
  )
}
ToDos.propTypes={
  searchbar:PropTypes.bool.isRequired //by using .isRequired we are making the prop value mandatory to be passed.
}

