import { Link } from "react-router-dom"
import whiteLogo from '../assets/Sluttiween-white-logo.png'

const Header = () => (
    <>
      <ul className="nav nav-tabs d-flex justify-content-between p-2">
  <li className="nav-item">
  <Link to="/" className="dropdown-item"><img src={whiteLogo} alt="Sluttiween"/></Link>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menu</a>
    <ul className="dropdown-menu">
      <li><Link to="/" className="dropdown-item">Homepage</Link></li>
      <li><Link to="/rules" className="dropdown-item">Reglas</Link></li>
      <li><hr className="dropdown-divider" /></li>
      <li><Link to="/reserve" className="dropdown-item">Reservar</Link></li>
      <li><Link to="/contact" className="dropdown-item">Contacto</Link></li>
    </ul>
  </li>
</ul>
    </>
  );

export default Header