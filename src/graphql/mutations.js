/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInvitado = /* GraphQL */ `
  mutation CreateInvitado(
    $input: CreateInvitadoInput!
    $condition: ModelInvitadoConditionInput
  ) {
    createInvitado(input: $input, condition: $condition) {
      id
      name
      contact
      people
      createdAt
      updatedAt
    }
  }
`;
export const updateInvitado = /* GraphQL */ `
  mutation UpdateInvitado(
    $input: UpdateInvitadoInput!
    $condition: ModelInvitadoConditionInput
  ) {
    updateInvitado(input: $input, condition: $condition) {
      id
      name
      contact
      people
      createdAt
      updatedAt
    }
  }
`;
export const deleteInvitado = /* GraphQL */ `
  mutation DeleteInvitado(
    $input: DeleteInvitadoInput!
    $condition: ModelInvitadoConditionInput
  ) {
    deleteInvitado(input: $input, condition: $condition) {
      id
      name
      contact
      people
      createdAt
      updatedAt
    }
  }
`;
