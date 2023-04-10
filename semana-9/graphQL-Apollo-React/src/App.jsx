import {useQuery} from "@apollo/client";
import "./App.css";
import {GET_CHARACTERS} from "./querys";

function App() {
	const {loading, error, data} = useQuery(GET_CHARACTERS);

	return (
		<div className="container">
			{loading && <p>Loading...</p>}
			{error && <p>Error :(</p>}
			{data &&
				data.characters.results.map((character) => (
					<div className="card" key={character.id}>
						<img src={character.image} alt={character.name} />
						<div className="container">
							<h4>{character.name}</h4>
							<p>{character.status}</p>
						</div>
					</div>
				))}
		</div>
	);
}

export default App;
