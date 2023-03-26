
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../../src/components/Counter/Counter'
import React from 'react';
import '@testing-library/jest-dom';


describe('Pruebas en nuetro componente', () => {

  const valueInitial = 50;

  test('Debe coincidir con el snapshot', () => {
    const { container } = render(<Counter value={valueInitial} />)
    
    expect(container).toMatchSnapshot();

    // screen.debug();
  })

  test('Se debe mostar el valor de 50 inicialmente', () => {
    render(<Counter value={valueInitial} />)

    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeTruthy();
  
  })


  test('Debe incrementar el valor en +1', () => {
    render(<Counter value={valueInitial} />)

    const button = screen.getByText("+1");
    // screen.debug(button);

    fireEvent.click(button);

    screen.debug();

    expect(screen.getByText("51")).toBeInTheDocument();
  })
})