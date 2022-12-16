import {useState} from "react";
import Agenda from '../componentes/Agenda';
import Formulario from '../componentes/Formulario';

function Ejercicio_3() {

  const estadoInicialContactos = [
    {nombre:"Eva Maria", apellidos:"Benitez Rodriguez", direccion:"calle franz kafka, 11", localidad:"Malaga", cp: 29010, telefono:696350874},
    {nombre:"Manuel", apellidos:"Anaya Tirado", direccion:"partida quilin, 428", localidad:"Malaga", cp: 29120, telefono:629737326},
    {nombre:"Maria", apellidos:"Rodriguez Rodriguez", direccion:"calle aniba y rosset, 1",localidad:"Malaga", cp: 29010, telefono:669698559},
  ];

  const [contactos, setContactos] = useState(estadoInicialContactos);


  return (
    <div className="container">
      <h2 className="my-4">Agenda</h2>
      <Agenda contactos={contactos} setContactos={setContactos}/>
      <h2 className="my-4">Nuevo contacto</h2>
      <Formulario setContactos={setContactos}/>
    </div>
  );
}

export default Ejercicio_3;
