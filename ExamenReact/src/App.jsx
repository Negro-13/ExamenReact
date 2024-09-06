import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState([])

  const db = 'http://localhost:3000'
  
  const getUser = () => {
    axios.GET('http://localhost:3000')
    .then(response => response.json)
    .then((data) => setName(data))
  };
  return (
    <>
      <h1>Lista de Usuarios</h1>
      <p>Name</p>
      <input></input>
      <p>Email</p>
      <input></input>
    </>
  )
}

export default App
