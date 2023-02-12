import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const toggleTheme = () => {
    console.log('togleTheme')
  }

  return (
    <div className="App">
      <div className='flex justify-center pt-20'>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-2xl'>React - Provider Pattern</h1>
      <button
				className="p-4 bg-blue-700 rounded-lg uppercase text-white mt-4" onClick={toggleTheme}
			>
				Cambiar Theme
      </button>
    </div>
  )
}

export default App
