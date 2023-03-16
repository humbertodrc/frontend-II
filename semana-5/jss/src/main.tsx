import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ButtonJSS } from './components/ButtonJSS'
import { Example } from './components/Example'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Example /> */}
    <ButtonJSS
      labelColor='red'
      fontWeight='bold'
      fontStyle='italic'
      spacing='10px'
    >
      Soy un Button
    </ButtonJSS>
  </React.StrictMode>,
)
