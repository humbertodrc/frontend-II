import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query{
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`