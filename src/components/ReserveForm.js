import React, { useState } from "react"
import { API, graphqlOperation } from 'aws-amplify'
import { createInvitado } from '../graphql/mutations'
import { v4 as uuidv4 } from "uuid"

const ReserveForm = () => {
  const [inputText, setInputText] = useState({
    nombre: "",
    correo: "",
    people: 1,
    sent: false,
  })

  const addInvitee = async (invitado) => {
    try {
      await API.graphql(graphqlOperation(createInvitado, {input: invitado}))
    } catch {
      console.log('error al crear invitado')
  }
  }

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const cancelCourse = () => { 
    document.getElementById("create-course-form").reset();
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newInvitee = {id: uuidv4(), name: inputText.nombre, contact: inputText.correo, people: parseInt(inputText.people, 10)}
    addInvitee(newInvitee)
    cancelCourse()
    setInputText({
      ...inputText,
      sent: true,
    })
  }
  return (
    <>
    {inputText.sent ? <p className="fs-5">Tu asistencia esta confirmada, te esperamos</p> : 
    <form onSubmit={handleSubmit} id="create-course-form">
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="name" name="nombre" autoComplete="name"
            required onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="contact" className="form-label">Instagram o Correo</label>
    <input type="text" className="form-control" id="contact" name="correo"
            autoComplete="email" onChange={onChange}
            required />
    <div id="emailHelp" className="form-text">We'll never share your email or IG with anyone else.</div>
  </div>
  <label htmlFor="contact" className="form-label">Numero de personas de la reserva</label>
  <select className="form-select" aria-label="Default select example" defaultValue="1" name="people" onChange={onChange}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
</select>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
    <label className="form-check-label mx-2" htmlFor="exampleCheck1">Leí y estoy de acuerdo con las reglas</label>
  </div>
  <button type="submit" className="btn btn-primary">Reservar</button>
</form>}
    </>
  )
}

export default ReserveForm