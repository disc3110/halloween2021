import '../styles/mainfly.css'
import { Link } from "react-router-dom"
import prideween from '../assets/prideween.png'
import calimg from '../assets/cal-23.png'
import mapImg from '../assets/1024px-AppleMaps_logo.svg.png'

const Mainfly = () => (
  <>
  <div className="mainfly container " style={{ backgroundImage: `url(${prideween})` }} />
  <p className="fs-1 text-center my-2">Sluttiween  2021</p>
  <div className="d-flex flex-column align-items-center justify-content-center">
    <img src={calimg} alt="Octubre 23" ></img>
    <Link to="/reserve" className="btn btn-primary my-2">Reservar</Link>
  </div>
  <p className="container red my-0 py-2">
    Sluttiween es una fiesta de Halloween LGBTQ+, tendrás que venir con el mejor puti-disfraz que encuentres (entre mas slutty, mejor).
  </p>
  <p className="container orange my-0 py-2">
    La entrada es libre para personas LGBTQ+ con puti disfraz, y heteres deconstruides acompañados
  </p>
  <p className="container yellow my-0 py-2">
    Todes sabemos que no hay mejor excusa para putear que Halloween . Confirma tu asistencia en el botón de reservar para poder entrar.
  </p>
  <ul className="container green my-0 py-2">
   <li className="text-center">**GRATIS**</li>
   <li>** Trae tu alcohol</li>
   <li>** Cero personas violentas</li>
   <li>** Solo personas LGBTQ+ friendly</li>
   <li>** Estacionamiento en la calle de atrás</li>
   <li>** SOLO CHIQUES MAYORES DE 18 </li>
  </ul>
  <p className="fs-1 text-center">Ubicación</p>
  <div className="d-flex flex-column align-items-center justify-content-center">
    <img  src={mapImg} alt="" className="imgs"/>
    <p className="w-50 my-2"> Retorno 804 #28, El Centinela, Coyoacán A dos cuadras de metro Taxqueña </p>
    <a href="https://goo.gl/maps/cG1trhbDNmKLmRJM9" target="_blank" rel="noreferrer noopener"> Open in google maps </a>
  </div>
  <div className="d-flex flex-column align-items-center justify-content-center">
    <p className="fs-1 text-center my-2"> 7:00 pm - 3:30am</p>
    <div>
     <Link to="/reserve" className="btn btn-primary m-2">Reservar</Link>
     <Link to="/contact" className="btn btn-primary m-2">Contacto</Link>
    </div>
  </div>
  
  
  </>
);

export default Mainfly
