import React, { useState, useEffect } from "react"
import { API, graphqlOperation } from 'aws-amplify';
import { listInvitados } from '../graphql/queries';

const Invitees = () => {

  const [invitees, setinvitees] = useState([])

  const getInvitees = async () => {
  const todos = await API.graphql(graphqlOperation(listInvitados));
  const confirmados = todos.data.listInvitados.items
  setinvitees(confirmados)
}

useEffect(() => {
  if (invitees.length === 0){
    getInvitees()
  }
})

 const renderInvitees = (invitadosConf) => invitadosConf.map((invitee) => (
   <tr key={Math.random()}>
     <th scope="col">{invitee.name}</th>
     <th scope="col">{invitee.contact}</th>
     <th scope="col">{invitee.people}</th>
   </tr>
 ))

 getInvitees()
  return(
    <table className="table">
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Contact</th>
        <th scope="col">People</th>
      </tr>
      </thead>
      <tbody>{renderInvitees(invitees)}</tbody>
    </table>
  )
}

export default Invitees