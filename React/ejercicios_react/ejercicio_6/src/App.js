import { createContext, useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Ejercicio_1 from './paginas/Ejercicio_1';
import Ejercicio_2 from './paginas/Ejercicio_2';
import Ejercicio_3 from './paginas/Ejercicio_3';
import Ejercicio_4 from './paginas/Ejercicio_4';

export const GlobalContext = createContext();

function App() {
  
  const estadoInicialContactos = [
    {nombre:"Eva Maria", apellidos:"Benitez Rodriguez", direccion:"calle franz kafka, 11", localidad:"Malaga", cp: 29010, telefono:696350874},
    {nombre:"Manuel", apellidos:"Anaya Tirado", direccion:"partida quilin, 428", localidad:"Malaga", cp: 29120, telefono:629737326},
    {nombre:"Maria", apellidos:"Rodriguez Rodriguez", direccion:"calle aniba y rosset, 1",localidad:"Malaga", cp: 29010, telefono:669698559},
  ];

  const [contactos, setContactos] = useState(estadoInicialContactos);

  const [todos, setTodos] = useState([]);

  const API_TODOS = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(API_TODOS)
    .then(response => response.json())
    .then(data => setTodos(data.slice(0, 20))); 
  }, []);

  return (
    <div className="App">

      <BrowserRouter>
        <nav className='navbar px-5 py-3 bg-dark'>
          <NavLink to="/" className="text-decoration-none text-light font-weignt-bold" activeClassName="active">Ejercicio 1</NavLink>
          <NavLink to="/ejercicio2" className="text-decoration-none text-light font-weignt-bold" activeClassName="active">Ejercicio 2</NavLink>
          <NavLink to="/ejercicio3" className="text-decoration-none text-light font-weignt-bold" activeClassName="active">Ejercicio 3</NavLink>
          <NavLink to="/ejercicio4" className="text-decoration-none text-light font-weignt-bold" activeClassName="active">Ejercicio 4</NavLink>
        </nav>

        <GlobalContext.Provider value={{contactos, setContactos, todos, setTodos}}>
          <Routes>
            <Route exact path="/" element={<Ejercicio_1 />}></Route>
            <Route path="/ejercicio2" element={<Ejercicio_2 />}></Route>
            <Route path="/ejercicio3" element={<Ejercicio_3 />}></Route>
            <Route path="/ejercicio4" element={<Ejercicio_4 />}></Route>
          </Routes>
        </GlobalContext.Provider> 

      </BrowserRouter> 
    </div>
  );
}

export default App;
