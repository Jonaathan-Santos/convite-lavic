import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './HomePage'
import Capa from './Capa'

function App() {
  const [Opem, setOpem] = useState(false)


 
  return (
    <>
     

      {
        !Opem ? <Capa onOpem={setOpem}/> : <HomePage />
      }
    </>
  )
}

export default App
