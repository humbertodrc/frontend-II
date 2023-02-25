import { ApiResponse } from '../interface/apiResponse';

export const getData = async (url: string) : Promise<ApiResponse[]>=> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Este es un error HTTP, el estado es: ${response.status}`);
      }

      return response.json();
    })
}