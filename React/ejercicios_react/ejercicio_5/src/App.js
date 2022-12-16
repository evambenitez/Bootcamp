import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Ejercicio_1 from './paginas/Ejercicio_1';
import Ejercicio_2 from './paginas/Ejercicio_2';
import Ejercicio_3 from './paginas/Ejercicio_3';
import Ejercicio_4 from './paginas/Ejercicio_4';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <nav className='navbar px-5 py-3 bg-dark'>
          <NavLink to="/" className="text-decoration-none text-light font-weignt-bold" activeClassName="active">Ejercicio 1</NavLink>
          <NavLink to="/ejercicio2" className="text-decoration-none text-light font-weignt-bold" activeClassName="active">Ejercicio 2</NavLink>
          <NavLink to="/ejercicio3" className="text-decoration-none text-light font-weignt-bold" activeClassName="active">Ejercicio 3</NavLink>
          <NavLink to="/ejercicio4" className="text-decoration-none text-light font-weignt-bold" activeClassName="active">Ejercicio 4</NavLink>
        </nav>

        <Routes>
          <Route exact path="/" element={<Ejercicio_1 />}></Route>
          <Route path="/ejercicio2" element={<Ejercicio_2 />}></Route>
          <Route path="/ejercicio3" element={<Ejercicio_3 />}></Route>
          <Route path="/ejercicio4" element={<Ejercicio_4 />}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
