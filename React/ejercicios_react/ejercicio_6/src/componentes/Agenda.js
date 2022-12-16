import {useContext} from "react";
import { GlobalContext } from "../App";

export default function Agenda() {

    const {contactos, setContactos} = useContext(GlobalContext);

    const eliminarContacto = telefono => {
        return e => setContactos(contactos.filter(contacto => contacto.telefono !== telefono))
        
    }

    return (
        <div className="row">
           {contactos.map((contacto, index) => {
               return (
                <ul class="list-group mb-3 col-12 col-sm-6 col-xl-3" key={contacto.telefono}>
                    <li class="list-group-item active">Contacto {index}</li>
                    <li class="list-group-item">{contacto.nombre}</li>
                    <li class="list-group-item">{contacto.apellidos}</li>
                    <li class="list-group-item">{contacto.telefono}</li>
                    <li class="list-group-item">{contacto.direccion}, {contacto.cp}, {contacto.localidad}</li>
                    <li class="list-group-item">
                        <button className="btn btn-warning" onClick={eliminarContacto(contacto.telefono)}>Eliminar</button>
                    </li>
                </ul>
               );
            })}
        </div>
    )
}
