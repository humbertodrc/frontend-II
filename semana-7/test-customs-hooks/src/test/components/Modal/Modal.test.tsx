import "@testing-library/jest-dom";
import { act, render, renderHook } from "@testing-library/react";
import { Modal } from "../../../components/Modal";
import useToggle from "../../../hooks/useToggle";

describe("Pruebas en <Modal />", () => {
	test("Cuando se renderiza el componente el Modal no deberia estar", () => {
		const {result} = renderHook(() => useToggle());
		const {container} = render(
			<Modal visible={result.current.isOpen} close={result.current.close} />
		);
		const modal = container.querySelector(".modal");
		expect(modal).not.toBeInTheDocument();
	});

	test("Cuando el modal esta visible en el documento", () => {
		const {result} = renderHook(() => useToggle());

		const {rerender} = render(
			<Modal visible={result.current.isOpen} close={result.current.close} />
		);

		act(() => {
			result.current.open();
		});

		rerender(
			<Modal visible={result.current.isOpen} close={result.current.close} />
		);

		const modal = document.querySelector(".modal");
		expect(modal).toBeInTheDocument();
	});

	test("Cuando el modal esta visible que se pueda cerrar correctamente", () => {
		const {result} = renderHook(() => useToggle());

		const {rerender} = render(
			<Modal visible={result.current.isOpen} close={result.current.close} />
		);

		act(() => {
			result.current.close();
		});

		rerender(
			<Modal visible={result.current.isOpen} close={result.current.close} />
		);

		expect(result.current.isOpen).toBe(false);
	});
});
