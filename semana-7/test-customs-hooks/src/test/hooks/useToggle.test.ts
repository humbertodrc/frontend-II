import {act, renderHook} from "@testing-library/react";
import useToggle from '../../hooks/useToggle';

// Describimos el componente que vamos a probar
describe("Pruebas en useDisclosure.ts", () => {
	// Describimos la situación que vamos a testear
	test("Cuando renderiza cual es el valor por default", () => {
		// Arrange
		const {result} = renderHook(() => useToggle());
		// Act is render as default
		// Assert
		expect(result.current.isOpen).toBe(false);
		expect(typeof result.current.close).toBe('function')
    expect(typeof result.current.open).toBe('function')
    expect(typeof result.current.toggle).toBe('function')
	});

	test("Cuando se llama a open, isOpen es true", () => {
		// Arrange
		const {result} = renderHook(() =>  useToggle());
		// Act
		act(() => {
			result.current.open();
		});
		// Assert
		expect(result.current.isOpen).toBe(true);
	});

	test("Cuando se llama a close, isOpen es false", () => {
		// Arrange
		const {result} = renderHook(() =>  useToggle());
		// Act
		act(() => {
			result.current.close();
		});
		// Assert
		expect(result.current.isOpen).toBe(false);
	});

	test("Cuando se llama a toggle, isOpen cambia de valor", () => {
		// Arrange
		const {result} = renderHook(() =>  useToggle());

		// Act
		act(() => {
			result.current.toggle();
		});

		// Assert
		expect(result.current.isOpen).toBeTruthy();

		// Act
		act(() => {
			result.current.toggle();
		});

		// Assert
		expect(result.current.isOpen).toBeFalsy();
	});
});
