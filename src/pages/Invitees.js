import { API, graphqlOperation } from 'aws-amplify';
import { listInvitados } from '../graphql/queries';

const Invitees = () => {
  const getInvitees = async () => {
  const todos = await API.graphql(graphqlOperation(listInvitados));
  console.log(todos)
}
  getInvitees()
  return(
    <div>Hi</div>
  )
}

export default Invitees