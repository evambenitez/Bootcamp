import { useContext } from 'react'
import { GlobalContext } from '../App'


export default function UseContextComponent() {

    const mensaje = useContext(GlobalContext);


  return (
    <h1>mensaje: {mensaje}</h1>
  )
}
