
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ModulePage from './pages/ModulePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:moduleId" element={<ModulePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
