import rulesimg from '../assets/Da_Rules.png'

const Rules = () => (
  <>
    <div className="d-flex flex-column align-items-center my-4 justify-content-center">
    <img  src={rulesimg} alt="" className="imgs"/>
  </div>
  <ul>
    <li>No se podra entrar con ningun tipo de arma u objetos punzocortantes</li>
    <li>No se permitirá estar afuera de la casa </li>
    <li>Sólo se permitirá el acceso a personas que no estén registradas en esta página</li>
    <li>El acceso y salida será controlado</li>
  </ul>
  </>
);

export default Rules