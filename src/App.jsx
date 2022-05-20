import './App.css'

import Home from './pages/Home/Home'
import Produtos from './pages/Produtos/Produtos'
import Compartilhe from './pages/Compartilhe/Compartilhe'
import Footer from './layout/Footer/Footer'

function App() {
  return (
    <div className="App">
      <main>
        <Home />
        <Produtos />
        <Compartilhe />
      </main>
      <Footer />
    </div>
  )
}

export default App
