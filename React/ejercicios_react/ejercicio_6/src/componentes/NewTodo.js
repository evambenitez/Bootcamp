import {useContext, useState} from 'react';
import { GlobalContext } from '../App';

export default function NewTodo() {

  const { setTodos } = useContext(GlobalContext);
  
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setTodos(currentTodos => [{title: newTodo, completed: false}, ...currentTodos]);

    setNewTodo("");
    
  }
  
  return (
    <form onSubmit={handleSubmit} className="my-4 mx-4">
      <input className= "form-control"
        type="text"
        placeholder="Introduce un nuevo to-do"
        onChange={e => setNewTodo(e.target.value)} 
        value ={newTodo}
      />
    </form>
  )
}
