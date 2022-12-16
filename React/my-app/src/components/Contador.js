import { useState, useEffect } from 'react';

export default function Contador() {
  // const state = useState(0); // El 0 es el valor inicial

  // const count = state(0);
  // const setCount = state(1);

  // Forma más corta de hacer lo anterior
  const [count, setCount] = useState(0);

  const hazmeClick = function (evento) {
    if (count < 10 ) {
        setCount(count + 1);
    }
  };
  
  const [count2, setCount2] = useState(0);

  useEffect(()=> {
    console.log("Acabo de montarme");
  }, [])
  
  return (
    <div>
      <p>Has hecho click {count} veces.</p>
      <button onClick = {hazmeClick}>Sumar Click!</button>
      <button onClick = {() => count > 0 && setCount (count - 1)}>Restar Click!</button>
      <button onClick = {() => setCount(0)}>Reset!</button>

      <p>Uso del UseEffect</p>

      <span>{count2}</span>
      <button onClick= {() => setCount2(count2+1)}>+</button>
    </div>
  )
}
