import Lista from "./Lista";

export default function Tienda() {
    const tienda = {
        electronica: [
            {id:27, producto: "Televisor", marca:"LG", modelo:"XP7302", precio: 399},
            {id:28, producto: "Frigorifico", marca:"AVG", modelo:"CC7888", precio: 499},
            {id:29, producto: "Lavadora", marca:"Samsung", modelo:"MM2022", precio: 699},
    
        ],
    
        alimentacion: [
            {id:30, producto: "Tomate", marca:"Kumato", precio: 0.99},
            {id:31, producto: "Lechuga", marca:"Verdifresh", precio: 0.25},
            {id:32, producto: "Pepino", marca:"Holandes",  precio: 2},
            {id:33, producto: "Cebolla", marca:"Dulce", precio: 3},
        ],
    
        mascotas: [
            {id:34, producto: "Pienso perro", marca:"Orijen", modelo:"mini-breds", precio: 65.45},
            {id:35, producto: "Arnés", marca:"AV", modelo:"basic", precio: 49},
            
        ],
    };

  return (
    <div>
        <Lista categoria="electronica" producto={tienda.electronica}/>
        <Lista categoria="alimentacion" producto={tienda.alimentacion}/>
        <Lista categoria="mascotas" producto={tienda.mascotas}/>
    </div>
  )
}


