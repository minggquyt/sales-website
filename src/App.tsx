import { useState } from 'react'
import Header from './components/Header/header';
import Body from './components/Body/body';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header />
    <Body />
    </>
  )
}

export default App
