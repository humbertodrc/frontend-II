import "@testing-library/jest-dom";
import { act, render, renderHook } from "@testing-library/react";
import { Sidebar } from '../../../components/Sidebar';
import useToggle from '../../../hooks/useToggle';

describe("Pruebas en <Sidebar />", () => {

	test("Cuando se renderiza el componente el sidebar no deberia estaren el documento", () => {
		const {result} = renderHook(() => useToggle());

		const {container} = render(
			<Sidebar visible={result.current.isOpen} close={result.current.close} />
		);

		const sidebar = container.querySelector(".sidebar");
		expect(sidebar).not.toBeInTheDocument();
	});

	test("Cuando el sidebar esta visible en el documento", () => {
		const {result} = renderHook(() => useToggle());

		const {rerender, container} = render(
			<Sidebar visible={result.current.isOpen} close={result.current.close} />
		);

		act(() => {
			result.current.open();
		});

		rerender(
			<Sidebar visible={result.current.isOpen} close={result.current.close} />
		);

		const sidebar =container.querySelector(".sidebar");
		expect(sidebar).toBeInTheDocument();
	});

	test("Cuando el sidebar esta visible que se pueda cerrar correctamente", () => {
		const {rerender} = render(<Sidebar visible={true} close={() => {}} />);

		const {result} = renderHook(() => useToggle());

		act(() => {
			result.current.close();
		});

		rerender(
			<Sidebar visible={result.current.isOpen} close={result.current.close} />
		);

		expect(result.current.isOpen).toBe(false);
	});
});
