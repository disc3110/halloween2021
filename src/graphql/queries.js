/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInvitado = /* GraphQL */ `
  query GetInvitado($id: ID!) {
    getInvitado(id: $id) {
      id
      name
      contact
      people
      createdAt
      updatedAt
    }
  }
`;
export const listInvitados = /* GraphQL */ `
  query ListInvitados(
    $filter: ModelInvitadoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitados(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        contact
        people
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
