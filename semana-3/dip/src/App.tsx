import "./App.css";
import { ConnectedLoginForm } from './components/ConnectedLoginForm';
import {LoginForm} from "./components/LoginForm";

function App() {
	return (
		<div className="App">
			{/* <LoginForm /> */}
			<ConnectedLoginForm />
		</div>
	);
}

export default App;
