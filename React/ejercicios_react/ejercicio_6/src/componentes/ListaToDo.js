import {useContext} from 'react';
import { GlobalContext } from '../App';


export default function ListaToDo() {

    const { todos, setTodos } = useContext(GlobalContext);

    const removeTodo = title => setTodos(todos.filter(todo=> todo.title !==title));
  
    const toggleCompleted = (e, index) => {
        if (e.target.tagName !== "BUTTON") {
            
            const newTodos = [...todos];
            newTodos[index].completed = !newTodos[index].completed;
            setTodos(newTodos);
        }


      
    }

    return (
    <ul className="list-group">
        {todos.map((todo, index) => {
            
            return (
            <li className= {`d-flex justify-content-between list-group-item ${todo.completed ? "completed" : ""}`}
            onClick={e => toggleCompleted(e, index)}>
                Todo {index}: {todo.title}
                <button className='btn btn-danger' onClick={() => removeTodo(todo.title)}>
                    X
                </button>
            </li>
            )
        })}
    </ul>
  )
}
