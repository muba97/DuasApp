/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFundRaisers = /* GraphQL */ `
  mutation CreateFundRaisers(
    $input: CreateFundRaisersInput!
    $condition: ModelfundRaisersConditionInput
  ) {
    createFundRaisers(input: $input, condition: $condition) {
      id
      title
      description
      link
      createdAt
      updatedAt
    }
  }
`;
export const updateFundRaisers = /* GraphQL */ `
  mutation UpdateFundRaisers(
    $input: UpdateFundRaisersInput!
    $condition: ModelfundRaisersConditionInput
  ) {
    updateFundRaisers(input: $input, condition: $condition) {
      id
      title
      description
      link
      createdAt
      updatedAt
    }
  }
`;
export const deleteFundRaisers = /* GraphQL */ `
  mutation DeleteFundRaisers(
    $input: DeleteFundRaisersInput!
    $condition: ModelfundRaisersConditionInput
  ) {
    deleteFundRaisers(input: $input, condition: $condition) {
      id
      title
      description
      link
      createdAt
      updatedAt
    }
  }
`;
export const createLabels = /* GraphQL */ `
  mutation CreateLabels(
    $input: CreateLabelsInput!
    $condition: ModelLabelsConditionInput
  ) {
    createLabels(input: $input, condition: $condition) {
      id
      label
      title
      createdAt
      updatedAt
    }
  }
`;
export const updateLabels = /* GraphQL */ `
  mutation UpdateLabels(
    $input: UpdateLabelsInput!
    $condition: ModelLabelsConditionInput
  ) {
    updateLabels(input: $input, condition: $condition) {
      id
      label
      title
      createdAt
      updatedAt
    }
  }
`;
export const deleteLabels = /* GraphQL */ `
  mutation DeleteLabels(
    $input: DeleteLabelsInput!
    $condition: ModelLabelsConditionInput
  ) {
    deleteLabels(input: $input, condition: $condition) {
      id
      label
      title
      createdAt
      updatedAt
    }
  }
`;
export const createItems = /* GraphQL */ `
  mutation CreateItems(
    $input: CreateItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    createItems(input: $input, condition: $condition) {
      id
      title
      label
      arabic
      sources
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateItems = /* GraphQL */ `
  mutation UpdateItems(
    $input: UpdateItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    updateItems(input: $input, condition: $condition) {
      id
      title
      label
      arabic
      sources
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteItems = /* GraphQL */ `
  mutation DeleteItems(
    $input: DeleteItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    deleteItems(input: $input, condition: $condition) {
      id
      title
      label
      arabic
      sources
      description
      createdAt
      updatedAt
    }
  }
`;
