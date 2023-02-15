import './App.css'
import { Section } from './components/Section'
import WithColorSwap from './components/WithColorSwap/WithColorSwap'

const ColorSwapSection = WithColorSwap(Section)

function App() {

  return (
    <div className="App">
      {/* <Section title='Higher Order Component' description='Conociendo los HOC' /> */}
      <ColorSwapSection title='Higher Order Component' description='Conociendo los HOC' />
    </div>
  )
}

export default App
