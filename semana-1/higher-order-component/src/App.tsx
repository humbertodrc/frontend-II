import {useEffect, useState} from "react";
import CharacterList from "./components/CharacterList";
import "./App.css";
import {ICharacters} from "./interface/characters";

const App = () => {
	const [characters, setCharacters] = useState<ICharacters[]>([]);

	useEffect(() => {
		setTimeout(() => {
			fetch("https://rickandmortyapi.com/api/character")
				.then((res) => res.json())
				.then((characters) =>
					setCharacters(
						characters.results.map(
							({
								name,
								image,
								species,
								status,
							}: {
								name: string;
								image: string;
								species: string;
								status: string;
							}) => ({name, image, species, status})
						)
					)
				);
		}, 3000);
	}, []);

	return (
		<div className='container'>
			<CharacterList characters={characters} />
		</div>
	);
};

export default App;
