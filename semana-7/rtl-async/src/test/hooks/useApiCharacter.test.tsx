import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import { url } from '../../api/endPoint';
import { useApiCharacter } from '../../hooks/useApiCharacter';
import { results } from '../../mocks/results';
describe('Pruebas en useCharacter.tsx', () => {
  test('Debe retornar la informacion de la API', async() => {
    const { result } = renderHook(() => useApiCharacter(url))

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    await waitFor(() => expect(result.current.error).toBe(false))

    await waitFor(() => {
      expect(result.current.character).toEqual(results)
      console.log(result.current.character);
    })
  })

  test('Debe retornar un error en caso de algun problema con la peticion', async() => {
  
    // const { result } = renderHook(() => useApiCharacter(''))

    // await waitFor(() => expect(result.current.isLoading).toBe(false))

    // await waitFor(() => expect(result.current.error).toBe(true))

    const { result } = renderHook(() => useApiCharacter(url))

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    await waitFor(() => expect(result.current.error).toBe(false))
  })
})