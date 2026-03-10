import './App.css'
import Layout from './components/layout'
import {Routes, Route} from 'react-router-dom'

import Perfil from './pages/Perfil'
import Turnos from './pages/MisTurnos'
import Agendar from './pages/AgendarTurno'
import Inicio from './pages/Inicio'

function App() {
  return (
    <Layout>
      {/* 2. Routes actúa como un "Switch". Solo muestra UNA de estas opciones a la vez */}
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/turnos" element={<Turnos />} />
      <Route path="/agendar" element={<Agendar />} />
      <Route path="*" element={<h2>Página no encontrada</h2>} />
    </Routes>
    </Layout>

  )
}
export default App
