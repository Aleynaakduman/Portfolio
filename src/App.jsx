import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import Tabs from './pages/Tabs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Container>
        <Tabs/>
    </Container>
    </>
  )
}

export default App
