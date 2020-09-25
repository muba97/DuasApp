/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTitles = /* GraphQL */ `
  query GetTitles($id: ID!) {
    getTitles(id: $id) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const listTitless = /* GraphQL */ `
  query ListTitless(
    $filter: ModelTitlesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTitless(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLabels = /* GraphQL */ `
  query GetLabels($id: ID!) {
    getLabels(id: $id) {
      id
      label
      title
      createdAt
      updatedAt
    }
  }
`;
export const listLabelss = /* GraphQL */ `
  query ListLabelss(
    $filter: ModelLabelsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabelss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItems = /* GraphQL */ `
  query GetItems($id: ID!) {
    getItems(id: $id) {
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
export const listItemss = /* GraphQL */ `
  query ListItemss(
    $filter: ModelItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        label
        arabic
        sources
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
