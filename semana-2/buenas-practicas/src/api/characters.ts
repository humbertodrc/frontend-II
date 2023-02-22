import { ApiResponse} from '../types/character';

export const getCharacters = async(): Promise<ApiResponse> => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    
    })
    .catch((error) => console.log(error));
};

