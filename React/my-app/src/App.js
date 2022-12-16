import logo from './logo.svg';
import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
import Contador from './components/Contador';

import UseContextComponent from './components/UseContextComponent';
import {useState, createContext} from "react";

export const GlobalContext = createContext();

function App() {

const [show, setShow] = useState(true);

  return (
    <div className="App">
      
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola React APP</h1>
        <Contador />
        <FirstComponent title="Otro titulo"></FirstComponent>
        <FirstComponent title="Titulo enviado desde el padre" date="26 de octubre de 2022"/>
        <SecondComponent />
        
        {show && <ThirdComponent />}
        <button onClick={() => setShow(!show)}>Aparece / Desaparece el Tercer Componente</button> */}
        
        <GlobalContext.Provider value="Soy un string guardado en un contexto">
          <UseContextComponent />
        </GlobalContext.Provider>


    </div>
  );
}
// Solo se puede un export default por archivo.
export default App;

