import { useApi } from "./hooks/useApi";
import "./index.css";

const App = () => {
	const {loading, error, data} = useApi();

	return (
		<div className="App">
			<h1>Noticias de Rick and Morty</h1>
			{loading && <p>Un momento por favor...</p>}
			{error.hasError && (
				<p>{`Hubo un problema al obtener los datos de la publicación: ${error.message}`}</p>
			)}
			<article>
				{data &&
					data.map(({id, title, description, image}) => (
						<span key={id}>
							<img src={image} alt={title} />
							<h2>{title}</h2>
							<p>{description}</p>
						</span>
					))}
			</article>
		</div>
	);
};

export default App;
