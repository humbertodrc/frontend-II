// Componente encapsulado com HOC

import WithLoading from '../../hoc/WithLoading';
import { ICharacters } from '../../interface/characters';
import Character from "../Character";
import "./CharacterList.css";

export type CharacterProps = {
  characters: ICharacters[];
};


const CharacterList = ({ characters }: CharacterProps) => {
  return (
    <section className="characters">
      {characters.map((character, key) => (
        <Character key={key} character={character} />
      ))}
    </section>
  );
};

export default WithLoading(CharacterList);
