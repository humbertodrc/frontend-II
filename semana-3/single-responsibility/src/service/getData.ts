import axios from "axios";

export const getTodos = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  const firstTen = data.slice(0, 10);
  return firstTen;
}

