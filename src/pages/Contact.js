import diego from '../assets/IMG_6348.jpg'
import jorge from '../assets/IMG_6346.jpg'
import gerardo from '../assets/IMG_6347.jpg'

const Contact = () => (
  <>
    <p className="fs-1 text-center">Dudas o Preguntas? Contáctanos</p>
    <div className="d-flex  border-bottom border-gray pb-3 my-2">
      <img className="seventyfive-sq align-self-center" src={diego} alt="Diego" />
      <div className="mx-1 d-flex flex-column">
          <h6 className="fw-bold">Diego Solis</h6>
          <span className="fw-bold small">IG: @disc3110</span>
      </div>
    </div>
    <div className="d-flex  border-bottom border-gray pb-3 my-2">
      <img className="seventyfive-sq align-self-center" src={jorge} alt="Diego" />
      <div className="mx-1 d-flex flex-column">
          <h6 className="fw-bold">Jorge Vazquez</h6>
          <span className="fw-bold small">IG: @madjorge.exe</span>
      </div>
    </div>
    <div className="d-flex  border-bottom border-gray pb-3 my-2">
      <img className="seventyfive-sq align-self-center" src={gerardo} alt="Diego" />
      <div className="mx-1 d-flex flex-column">
          <h6 className="fw-bold">Gerardo Colin</h6>
          <span className="fw-bold small">IG: @catamito</span>
      </div>
    </div>
  </>
);

export default Contact