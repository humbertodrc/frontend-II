import "./App.css";
import {VideoList} from "./components/VideoList";
import {videoThumbnail, liveStream} from "./data/data";

function App() {
	return (
		<div className="App">
			<h1>Principio de segregación de interfaz (ISP)</h1>
			{/* <VideoList items={videoThumbnail} /> */}
			<VideoList items={liveStream} />
		</div>
	);
}

export default App;
