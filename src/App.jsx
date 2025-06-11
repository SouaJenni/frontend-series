import { useState } from 'react'
import './App.css'

import AddSerie from "./pages/AddSerie.jsx";
// import Home from "./pages/Home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AddSerie />
    </>
  )
}

export default App
