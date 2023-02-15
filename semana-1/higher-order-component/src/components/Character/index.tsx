import "./Character.css";
import { ICharacters } from '../../interface/characters';

export type ListCharacterProps = {
  character: ICharacters
};

const Character = ({ character }: ListCharacterProps) => {
  return (
    <div className="character">
      <img
        src={character.image}
        alt={character.name}
        className="character-image"
      />
      <div className='character-body'>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <p>{character.status}</p>
      </div>
    </div>
  );
};

export default Character;
