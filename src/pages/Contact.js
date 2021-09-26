import diego from '../assets/IMG_6348.jpg'
import jorge from '../assets/IMG_6346.jpg'
import gerardo from '../assets/IMG_6347.jpg'
import beto from '../assets/9e32c442-33eb-4476-aaea-01cdadf6c0ba.JPG'

const Contact = () => (
  <>
    <p className="fs-1 text-center border-bottom border-gray py-3">Dudas? Contáctanos</p>
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
    <div className="d-flex  border-bottom border-gray pb-3 my-2">
      <img className="seventyfive-sq align-self-center" src={beto} alt="Diego" />
      <div className="mx-1 d-flex flex-column">
          <h6 className="fw-bold">Alberto Vazquez</h6>
          <span className="fw-bold small">IG: @beto_vzg</span>
      </div>
    </div>
  </>
);

export default Contact