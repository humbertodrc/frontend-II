import { renderHook, render, screen } from '@testing-library/react';
import { url } from '../../api/endPoint';
import { useApiCharacter } from '../../hooks/useApiCharacter';
import Character from '../../components/Character/Character';
describe('Se deben Mostar los personajes', () => {
  test('Se deben mostar las imagenes de los personajes cuando se renderiza el componente', async() => {

    renderHook(() => useApiCharacter(url))

    render(<Character />)

    const imagenes = await screen.findAllByAltText('personaje')

    expect(imagenes[0]).toBeInTheDocument();
    expect(imagenes).toHaveLength(20);
    expect(imagenes[0]).toHaveAttribute('src', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
    
  })
})