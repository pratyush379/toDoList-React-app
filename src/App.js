import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
let inittodo

  if(localStorage.getItem("todos")===null){
    inittodo = []
  }
  else{
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }
 const addToDo = (title,desc) =>{
  console.log("adding to do")
  let sno
if(todos.length === 0)
sno =0 
else{

 sno = todos[todos.length-1].sno + 1;}
 console.log(sno)
  const myTodo = {
 sno : sno,
 title : title,
 desc : desc
  }
  setTodos([...todos,myTodo])
  console.log(myTodo)

  
 } 

const onDelete = (todo) =>{
  console.log('i am on delete of todo ' , todo)

  //let index = todos.indexOf(todo)
  //todos.splice(index,1)
  //deleting from the above mentioned code will not work in react

setTodos(todos.filter((e) => {return e!==todo}))
localStorage.setItem("todos",JSON.stringify(todos));
}


const [todos, setTodos] = useState(inittodo);
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos))
}, [todos])

  return (
    <>
   <Router>
      <Header title="My Todos List" searchBar={true} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addToDo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
