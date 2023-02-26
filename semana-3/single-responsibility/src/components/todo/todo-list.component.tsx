import axios from "axios";
import { useEffect, useState } from "react";
import TodoType from "../../types/todo.types";

// Single-responsibility principle
// En el siguiente componente estamos violando el principio SRP
// Debemos identificar que logica podemos extrar en un nuevo componente
// para mejorar nuestro codigo

const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const firstTen = data.slice(0, 10);
      setTodos(firstTen);
    }
    getTodos();
  }, []);

  const renderTodos = () => {
    return todos.map((todo: TodoType) => {
      return <li>✅{` Tarea ${todo.id}: ${todo.title}`}</li>;
    });
  };

  return (
    <section>
      <h1>To Do List 👨‍💻</h1>
      <ul>{renderTodos()}</ul>
    </section>
  );
};

export default TodoList;
