import {Title} from "./components/Title";
import { WithButtonTitle } from './components/Title/WithButtonTitle';
import { WithLinkTitle } from './components/Title/WithLinkTitle';

function App() {

  const onCLick = () => {
    console.log("withButton")
  }

	return (
		<div className="App">
			<Title title='Hola Camada 1 🙂❤'>
				<WithButtonTitle  onClick={onCLick} buttonText={'Soy un button'} />
			</Title>

			<Title title='Hola Camada 2 🙂❤'>
				<WithLinkTitle  href='/' buttonText={'Soy un button'} />
			</Title>
		</div>
	);
}

export default App;
