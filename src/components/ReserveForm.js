const ReserveForm = () => {
  const x = 2
  return (
    <>
    <form>
  <div className="mb-3">
    <label for="name" className="form-label">Nombre</label>
    <input type="email" className="form-control" id="name" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label for="contact" className="form-label">Instagram o Correo</label>
    <input type="password" className="form-control" id="contact" />
    <div id="emailHelp" className="form-text">We'll never share your email or IG with anyone else.</div>
  </div>
  <label for="contact" className="form-label">Numero de personas de la reserva</label>
  <select class="form-select" aria-label="Default select example">
  <option selected value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
</select>
  <div className="mb-3 form-check">
    <input type="checkbox" classNAme="form-check-input" id="exampleCheck1" />
    <label className="form-check-label mx-2" for="exampleCheck1">Leí y estoy de acuerdo con las reglas</label>
  </div>
  <button type="submit" className="btn btn-primary">Reservar</button>
</form>
    </>
  )
}

export default ReserveForm