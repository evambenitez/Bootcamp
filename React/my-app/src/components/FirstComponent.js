import {Fragment, useState} from 'react';

// Solo se puede un export default por archivo.
export default function FirstComponent(props) {
  console.log(props);
  console.log(props.title);

  // Hooks - useState (actualiza automáticamente cualquier cambio en un array)
  const [count, setCount] = useState(0);


// Uso de Eventos en React - Crear función dentro de otra función
  const mySimpleFunction = function (event) {
    
    console.log(event);  
  }

  const myFunction = function (name) {
      return (event) => console.log(name, event.target);
    
  };


  return (
    <div>
      <h3>{props.title}</h3>
      <small>20 de octubre de 2022</small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rerum libero molestias, unde error inventore nulla voluptas dolore provident cumque adipisci explicabo, a itaque omnis maxime ut assumenda? Iusto, ea.
      </p>
      <button onClick={mySimpleFunction}>Eliminar Book1</button>
      <button onClick={myFunction ("Marta")}>Imprimir Marta</button>
      <button onClick={myFunction ("Miguel")}>Imprimir Miguel</button>
    </div>
  )
}

// Fin Eventos en React

function SecondComponent() {
  return (
    <>
      <h3>Soy el segundo componente y no tengo div</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rerum libero molestias, unde error inventore nulla voluptas dolore provident cumque adipisci explicabo, a itaque omnis maxime ut assumenda? Iusto, ea.
      </p>
    </>
  ) 
}
function ThirdComponent() {
  return (
    <div>
      <h3>Soy el tercer componente</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rerum libero molestias, unde error inventore nulla voluptas dolore provident cumque adipisci explicabo, a itaque omnis maxime ut assumenda? Iusto, ea.
      </p>
    </div>
  ) 
}
export {SecondComponent, ThirdComponent};



