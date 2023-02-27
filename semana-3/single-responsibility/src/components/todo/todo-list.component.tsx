import useApi from "../../hooks/useApi";
import { List } from "../List";

// Single-responsibility principle
// En el siguiente componente estamos violando el principio SRP
// Debemos identificar que logica podemos extrar en un nuevo componente
// para mejorar nuestro codigo

const TodoList = () => {
  
	const {todos} = useApi();

	return (
		<section>
			<h1>To Do List 👨‍💻</h1>
			<ul>
				{todos.map((todo) => (
					<List todo={todo} />
				))}
			</ul>
		</section>
	);
};

export default TodoList;
