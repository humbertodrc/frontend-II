import { ChangeEvent, FC, SyntheticEvent } from "react";

interface InputProps {
	handleSubmit: (e: SyntheticEvent) => void;
	handleChange: (e: ChangeEvent) => void;
}

const Input: FC<InputProps> = ({ handleSubmit, handleChange}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="number"
          onChange={handleChange}
          placeholder="Digite um número"
        />
        <button type="submit">Buscar personagem</button>
      </label>
    </form>
  );
};

export default Input;
