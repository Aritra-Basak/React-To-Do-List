import logo from './logo192.png';
import React from 'react';
import './ToDosList_navbar.css'
import PropTypes from 'prop-types'
import { BrowserRouter,Router, Routes, Link, Route, Switch } from 'react-router-dom';
import ReactSwitch from 'react-switch'
//installed a ReactSwitch Dependency


export default function ToDosList_navbar(props)//by using props we are fetching the value passed from the parent component
                                              //We can also directly pass the value as ({value name})
 {
  return (
    <div className="container1">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
              <Link className="navbar-brand" to="#">
                 <img src={logo} alt="" width="30" height="24"/>
               </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <button className='navbar-brand btn btn-outline-info' onClick={helloALert}>{props.title}</button>  
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/add">Add Todo</Link>
                    </li>
                    <li>
                 
                    </li>
                  </ul>
                  {/* Here as a props we are passing a boolean js value and at below by using ternary operator we are checking if it's true then we will show else not */}
                  
                  <div className="d-flex">
                        <div className='text-center my-2 mx-2'>
                          <ReactSwitch onChange={()=>{props.toggleTheme()}} checked={props.theme==="dark"}/> 
                          {/* Onchange is calling the function toggleTheme which is passed as a prop and the checked attribute of the switch sets that, on being checked the theme will be dark  */}
                        </div> 
                  </div>
                </div>
              </div>
            </nav>
            <div className='container2'>
              <figure className="text-center">
                    <blockquote className="blockquote">
                      <p className='fs-4 text-info'><strong>Welcome to To Dos.</strong></p>
                    </blockquote>
                    <figcaption className="blockquote-footer text-dark">
                      Aritra Basak <cite title="Source Title">EY</cite>
                    </figcaption>
              </figure>
            </div>
    </div>
  )
}

function helloALert()
{
  alert("Welcome to ToDos List By React");
}
//Prop-Types, to define what data type will the props value contain
ToDosList_navbar.propTypes={
  title:PropTypes.string,
}

//Default Props, to set default values to the props, will get triggered if no value is passed as a prop from the parent component.
ToDosList_navbar.defaultProps={
  title:"Title is Missing",
  
}
