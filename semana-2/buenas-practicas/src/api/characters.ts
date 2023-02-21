import { ApiResponse} from '../types/character';

export const getCharacters = async (): Promise<ApiResponse> => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data;
};

