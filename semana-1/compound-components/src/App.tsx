import "./App.css";
import Card from './components/Card';
import {characters} from "./data";

function App() {
	return (
		<>
			<h1>Compound Components</h1>
			<main>
				{characters.map((character) => (
					<Card key={character.id}>
						<Card.Body>
							<Card.Title>{character.title}</Card.Title>
							<Card.Img src={character.image} alt={character.title} />
							<Card.Text>{character.desc}</Card.Text>
							<Card.Status>{character.status}</Card.Status>
						</Card.Body>
					</Card>
				))}
			</main>
		</>
	);
}

export default App;
