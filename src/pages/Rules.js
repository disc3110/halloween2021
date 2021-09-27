import rulesimg from '../assets/Da_Rules.png'
import { Link } from "react-router-dom"

const Rules = () => (
  <>
    <div className="d-flex flex-column align-items-center my-4 justify-content-center">
    <img  src={rulesimg} alt="" className="imgs"/>
  </div>
  <ul className="text-light p-3 text-center">
    <li className="red p-2">No se podra entrar con ningun tipo de arma u objetos punzocortantes</li>
    <li className="orange p-2">No se permitirá estar afuera de la casa </li>
    <li className="yellow p-2">Sólo se permitirá el acceso a personas que estén registradas en esta página</li>
    <li className="green p-2">El acceso y salida será controlado</li>
    <li className="blue p-2">Si algun invitado se pone malacopa, se tendrá que ir</li>
    <li className="purple p-2">Los invitados tendran que hacerse responsables por daños al inmueble (osea, no rompan el lavavo)</li>

  </ul>
  <div className="d-flex justify-content-center my-4">
     <Link to="/reserve" className="btn btn-primary m-2">Reservar</Link>
     <Link to="/contact" className="btn btn-primary m-2">Contacto</Link>
  </div>
  <Link to="/311043590" className="btn btn-primary m-2 d-none">Contacto</Link>
  </>
);

export default Rules