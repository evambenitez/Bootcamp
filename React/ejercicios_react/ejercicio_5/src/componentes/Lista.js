export default function Lista(props) {
    const {categoria, producto} = props;

  return (
    <>
        <h2>{categoria}</h2>
        <ul className="list-group">
            {producto.map(({id, producto, marca, modelo, precio}) => {
                return (<li key= {id} className="list-group-item">
                            {producto} {marca} {modelo}, Precio: {precio}€
                        </li>)
                })}
        </ul>
    </>
  )
}
