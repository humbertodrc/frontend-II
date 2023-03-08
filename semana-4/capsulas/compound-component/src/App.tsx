import { Image } from "./components/Image";

const sources: string[] = [
	"https://media-manager.noticiasaominuto.com/1280/1621856578/naom_60ab911e4afc6.png",
	"https://www.magazine-hd.com/apps/wp/wp-content/uploads/2021/06/rick-and-morty-t5.jpg",
	"https://wallpapercave.com/wp/wp3277657.jpg",
];

const App = () => {

	// Utilizando compounding components y context crear una card que tenga Imagen y Acciones

	return (
		<>
			<h1>Compound Component</h1>
			<p>Últimas publicaciones</p>
			{sources.map((source, key) => (
				<Image source={source} key={key} />
			))}
		</>
	);
};

export default App;
