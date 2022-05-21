import './App.css'

import { useRef } from 'react'

import Home from './pages/Home/Home'
import Produtos from './pages/Produtos/Produtos'
import Compartilhe from './pages/Compartilhe/Compartilhe'
import Footer from './layout/Footer/Footer'

function App() {
  const compartilheRef = useRef(null)
  const produtosRef = useRef(null)

  return (
    <div className="App">
      <main>
        <Home compartilhe={compartilheRef} produtos={produtosRef} />
        <Produtos refs={produtosRef} />
        <Compartilhe refs={compartilheRef} />
      </main>
      <Footer />
    </div>
  )
}

export default App
