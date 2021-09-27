import '../styles/mainfly.css'
import { Link } from "react-router-dom"
import "animate.css"
import prideween from '../assets/prideween.png'
import calimg from '../assets/cal-23.png'
import mapImg from '../assets/1024px-AppleMaps_logo.svg.png'
import boys from '../assets/pump-1.png'
import pumk2 from '../assets/pumpk-2.png'
import siluets from '../assets/sexy-guys.png'

const Mainfly = () => (
  <>
  <div className="mainfly container " style={{ backgroundImage: `url(${prideween})` }} />
  <p className="fs-1 text-center my-2 animate__backInDown animate__rubberBand">Sluttiween  2021</p>

  <div className="container">
  <div className="row">
  <div className="col d-flex flex-column align-items-center justify-content-center">
      <img src={calimg} alt="Octubre 23" ></img>
      <Link to="/reserve" className="btn btn-primary my-2">Reservar</Link>
    </div>
    <p className="col setimage container red my-0 py-2 d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: `url(${boys})` }}>
    Sluttiween es una fiesta de Halloween LGBTQ+, tendrás que venir con el mejor puti-disfraz que encuentres (entre mas slutty, mejor).
  </p>
  </div>
  <div className="row">
  <p className=" setimage col container orange my-0 py-2 d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: `url(${pumk2})` }}>
  La entrada es libre para personas LGBTQ+ con puti disfraz, y heterxs deconstruidxs acompañadxs
  </p>
  <div className="col py-2 d-flex flex-column align-items-center justify-content-center">
      <img  src={mapImg} alt="" className="imgs"/>
      <a className="btn btn-primary my-2" href="https://goo.gl/maps/cG1trhbDNmKLmRJM9" target="_blank" rel="noreferrer noopener"> Open in google maps </a>
    </div>
  </div>
</div>
  
  <div className="setimage" style={{ backgroundImage: `url(${siluets})` }}>
  <p className="container my-0 py-2">
    Todes sabemos que no hay mejor excusa para putear que Halloween . Confirma tu asistencia en el botón de reservar para poder entrar.
  </p>
  <ul className="container my-0 py-2">
   <li className="text-center">**GRATIS**</li>
   <li>** Trae tu alcohol</li>
   <li>** Cero personas violentas</li>
   <li>** Solo personas LGBTQ+ friendly</li>
   <li>** Estacionamiento en la calle de atrás</li>
   <li>** SOLO CHIQUES MAYORES DE 18 </li>
  </ul>
  </div>
  
  <p className="fs-1 text-center my-3">Ubicación</p>
  <p>Retorno 804 #28 Colonia El Centinela, Coyoacán</p>
  
  <div className="d-flex flex-column align-items-center justify-content-center my-5">
    <p className="fs-1 text-center my-2"> 7:00 pm - 3:30am</p>
    <div>
     <Link to="/reserve" className="btn btn-primary m-2">Reservar</Link>
     <Link to="/contact" className="btn btn-primary m-2">Contacto</Link>
    </div>
  </div>
  
  
  </>
);

export default Mainfly
