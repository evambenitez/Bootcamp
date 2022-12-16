import { useState, useEffect} from "react";

import './App.css';
import NewTodo from './componentes/NewTodo';
import ListaToDo from './componentes/ListaToDo';


export default function App() {
  
  const [todos, setTodos] = useState([]);

  const API_TODOS = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(API_TODOS)
    .then(response => response.json())
    .then(data => setTodos(data.slice(0, 20))); 
  }, []);
  

  return (
    <div className="App">
      <h2>Lista To Do</h2>
      <NewTodo setTodos={setTodos} />
      <ListaToDo todos={todos} setTodos={setTodos}/>    
    </div>
  );
}


