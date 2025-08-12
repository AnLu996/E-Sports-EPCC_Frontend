import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/HomePage'

function App() {
  return (
    <div>
      {/* Menú de navegación */}
      <nav>
        <Link to="/">Inicio</Link> |{" "}
      </nav>

      {/* Contenedor de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
