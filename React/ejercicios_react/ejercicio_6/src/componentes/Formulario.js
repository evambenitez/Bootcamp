import {useState, useContext} from "react";
import { GlobalContext } from "../App";


export default function Formulario() {

    const {setContactos} = useContext(GlobalContext);

    // const [nombre, setNombre] = useState("");
    // const [apellidos, setApellidos] = useState("");
    // const [telefono, setTelefono] = useState("");
    // const [direccion, setDireccion] = useState("");
    // const [cp, setCp] = useState("");
    // const [localidad, setLocalidad] = useState("");

    // function handleNombre(e) {
    //     setNombre(e.target.value);
        
    // };
    // function handleApellidos(e) {
    //     setApellidos(e.target.value);
        
    // };
    // function handleTelefono(e) {
    //     setTelefono(e.target.value);
        
    // };
    // function handleDireccion(e) {
    //     setDireccion(e.target.value);
        
    // };
    // function handleCp(e) {
    //     setCp(e.target.value);
        
    // };
    // function handleLocalidad(e) {
    //     setLocalidad(e.target.value);
        
    // };

    const initialState = {
        nombre: "",
        apellidos: "",
        telefono:"",
        direccion:"",
        cp:"",
        localidad:""
    };

    const [form, setForm] = useState(initialState);

    function handleInput(e) {
        const inputName = e.target.name;
        const newValue = e.target.value;

        setForm({ ...form, ...{[inputName]: newValue}})
  
    }


    function submit(e) {
        e.preventDefault();

        setContactos(currentContactos => [...currentContactos, form]);

        setForm(initialState);

        // setNombre("");
        // setApellidos("");
        // setTelefono("");
        // setDireccion("");
        // setCp("");
        // setLocalidad("");

    };

  return (
    <form className="form-group" onSubmit={submit}>
        <input className="form-control mb-3" type="text" name="nombre" value={form.nombre} onChange={handleInput} placeholder="Introduce tu nombre" />
        <input className="form-control mb-3" type="text" name="apellidos" value={form.apellidos} onChange={handleInput} placeholder="Introduce tus apellidos" />
        <input className="form-control mb-3" type="text" name="telefono" value={form.telefono} onChange={handleInput} placeholder="Introduce tu teléfono " />
        <input className="form-control mb-3" type="text" name="direccion" value={form.direccion} onChange={handleInput} placeholder="Introduce tu dirección " />
        <input className="form-control mb-3" type="text" name="cp" value={form.cp} onChange={handleInput} placeholder="Introduce tu código postal" />
        <input className="form-control mb-3" type="text" name="localidad" value={form.localidad} onChange={handleInput} placeholder="Introduce tu localidad " />
        <input type="submit" className="btn btn-success" value="Guardar" />
    </form>
  )
}
