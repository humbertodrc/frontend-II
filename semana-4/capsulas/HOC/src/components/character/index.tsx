import { useEffect, useState } from "react";

interface CharacterProps {
  id: number;
  image: string;
  name: string;
  gender: string;
}

const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchCharacter = () =>
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((character) => {
          setCharacter(character.results);
        });
    fetchCharacter();
  }, []);

  return (
    <section className="container-character">
      <h2>Lista de amigos online</h2>
      {character.map((data: CharacterProps) => {
        return (
          <article key={data.id} className="character">
            <img src={data.image} alt={data.name} />
            <div>
              <h3>{data.name}</h3>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Character;
