import { useState, useEffect } from 'react';
import { getTodos } from '../service/getData';
import TodoType from '../types/todo.types';
const useApi = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    getTodos().then((todos) => setTodos(todos));
  }, []);

  return { todos };
}

export default useApi;