import { useEffect, useState } from "react";
import './style.css'

interface CharacterProps {
	status: string;
}

interface Character {
	id: number;
	image: string;
	name: string;
	status: string;
	species: string;
	gender: string;
}

const Character = ({status}: CharacterProps) => {
	const [character, setCharacter] = useState([]);

	useEffect(() => {
		const fetchCharacter = (status: string) =>
			fetch(
				`https://rickandmortyapi.com/api/character?name=rick&status=${status}`
			)
				.then((response) => response.json())
				.then((character) => {
					setCharacter(character.results);
				});
		fetchCharacter(status);
	}, [status]);

	return (
		<section>
			{character.map((data: Character) => {
				return (
					<article key={data.id} className="character">
						<img src={data.image} />
						<div>
							<h2>{data.name}</h2>
							<p>Status: {data.status}</p>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Character;
