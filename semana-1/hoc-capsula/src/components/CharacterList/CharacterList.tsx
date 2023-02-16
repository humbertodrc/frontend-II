
import { FC } from "react";
import { Characters } from '../../interface/characters';


interface Character {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
}

interface CharacterListProps {
	rickandmortyData: Characters[];
}

const CharacterList: FC<CharacterListProps> = ({ rickandmortyData }) => {
  return (
    <section>
      {rickandmortyData.map((data: Character) => {
        return (
          <article key={data.id} className="character">
            <img src={data.image} alt={data.name} />
            <div>
              <p>Nome: {data.name}</p>
              <p>Status: {data.status}</p>
              <p>Espécie: {data.species}</p>
              <p>Gênero: {data.gender}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default CharacterList;