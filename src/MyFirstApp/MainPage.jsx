import React from 'react'
import TodoNav from './component1/ToDosList_navbar'
import Todos from './component2/ToDos'
import Footer from './component3/footer'
import AddTodo from './component5/AddTodo'
import { useState,useEffect } from "react";
import './MainPage.css'
import { BrowserRouter,Router, Routes, Link, Route, Switch } from 'react-router-dom'; //For Routing
import { createContext } from 'react'
// The Context API helps share data between components which you can't easily share with props, for example, complex data objects.
// React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.

export const ThemeContext = createContext(null);




//Main page where all the components are put together and rendered as a single page 
export default function MainPage() {
  //checking that whether my localstorage is empty or not
  let initial_todo;
  if(localStorage.getItem("todos")===null)
  {
    initial_todo=[];
  }
  else
  {
    initial_todo=JSON.parse(localStorage.getItem("todos"));
  }
  //Creating an element named todos which will contain an array of objects that will be later passed as a prop to the ToDos for displaying in the page. 
  const [todos,setTodos]=useState(initial_todo);
    //Using useState we will track the state of our object inside the Component. 
    //As useState takes the initial value or initial state of the object as an argument, so we are passing the array initial_todo as an initial value. 

    //Function to delete a To do Item
  const onDelete =(todo)=>//here todo contains the info of the object of whoose Delete button in clicked i.e. info of object that's need to be deleted
  {
    console.log("delete:-",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo; //Returns the object from the array that meet the condition specified in a callback function. 
                      //Like here we are returing only the object from the todos that don't match with the object stored in variable todo which was passed by the function onDelete from onlyToDo.js
                     //the variable 'e' stores each object from todos for filter function to perform its task.
    }));
  }
  
   //Function to Add a To do Item
 const addMyTodo =(title,desc)=>//here title and desc contains the info of the todo which needs to be added
 {
  let sno = todos.length+1;
 
  const newtodo ={
    sno:sno,
    title:title,
    desc:desc
  }
  console.log(newtodo);
  setTodos([...todos,newtodo]); //addind the newtodo with rest of the todos by using setTodos
  
 }
 useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos)); //setting the object todos with the mapping value "todos" in localStorage
  }, [todos]) //whenever any changes is made in todos the above method will be triggered

  //using a state hook to determine the current theme state of the page.
  const [theme,setTheme]=useState("dark");
  //a function to toggle around the theme, like if setTheme founds that current theme is light it will set to dark and vice versa.
  const toggleTheme =()=>
  {
    setTheme((theme)=>(theme==="light"?"dark":"light"))
  }

  return (
// Every Context object comes with a Provider component. All the components that consume(inside) the context must be a descendant of the Provider component.
// The Provider component accepts a value prop that will be passed to the consuming(inside) components. Syntax <ThemeContext.Provider value={}}>
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    {/* //Always start component name with upercase. */}
      <React.Fragment> 
          <BrowserRouter>
          
            {/* Always use React.Fragment for grouping all components together */}
            {/* We are passing the id value from the theme value from the useState hook. And using tis id we are applying the css. */}
            <div className='mainContainer' id={theme}>
              {/* This is an empty tag, like while importing components we should always wrap them inside some tags like div, else we can use empty tags */}
              
                <TodoNav title="<--To-Do's List-->"  toggleTheme={toggleTheme} theme={theme}/> {/*By using Props we are passing the title value to the TodoNav component */}
                <Routes>
                <Route exact path='/' element={<Todos todoval={todos} onDelete={onDelete} searchbar={true} />}/>
                <Route exact path='/add' element={<AddTodo addMyTodo={addMyTodo}/>}/>
                  
                </Routes>
              {/* In props we can pass numerous numbers of values, while passing any js variables use {} */}             
              <Footer />
            </div>
           
        </BrowserRouter>
      </React.Fragment>
    </ThemeContext.Provider>

  )
}
